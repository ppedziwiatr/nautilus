import asyncio
import json
import ssl
from typing import Any, Dict, Optional

import certifi
import websockets
from nautilus_trader.cache.cache import Cache
from nautilus_trader.common.component import LiveClock, MessageBus
from nautilus_trader.common.providers import InstrumentProvider
from nautilus_trader.config import LiveDataClientConfig
from nautilus_trader.live.data_client import LiveMarketDataClient
from nautilus_trader.live.factories import LiveDataClientFactory
from nautilus_trader.model.data import QuoteTick
from nautilus_trader.model.identifiers import InstrumentId, Venue, ClientId
from nautilus_trader.model.objects import Price, Quantity

from config import SYMBOLS, HYPERLIQUID_VENUE

ssl_context = ssl.create_default_context()
ssl_context.load_verify_locations(certifi.where())

class HyperliquidLiveDataClientConfig(LiveDataClientConfig, frozen=True):
    websocket_url: str = "wss://api.hyperliquid.xyz/ws"
    reconnect_timeout: int = 5
    heartbeat_interval: int = 30


class HyperliquidLiveDataClient(LiveMarketDataClient):
    def __init__(
            self,
            loop: asyncio.AbstractEventLoop,
            msgbus: MessageBus,
            cache: Cache,
            clock: LiveClock,
            config: HyperliquidLiveDataClientConfig,
    ) -> None:
        super().__init__(
            loop=loop,
            client_id=ClientId("hyper"),
            venue=Venue(HYPERLIQUID_VENUE),
            msgbus=msgbus,
            cache=cache,
            clock=clock,
            config=config,
            instrument_provider=InstrumentProvider()
        )

        self._config = config
        self._websocket: Optional[websockets.WebSocketServerProtocol] = None
        self._subscribed_symbols: set[str] = set()
        self._reconnect_task: Optional[asyncio.Task] = None
        self._heartbeat_task: Optional[asyncio.Task] = None

    async def _connect(self) -> None:
        try:
            self._log.info(f"Connecting to Hyperliquid WebSocket: {self._config.websocket_url}")
            self._websocket = await websockets.connect(self._config.websocket_url, ssl=ssl_context)
            self._log.info("Connected to Hyperliquid WebSocket")

            await self._subscribe_to_all_mids()

            self._loop.create_task(self._handle_messages())

            if self._config.heartbeat_interval > 0:
                self._heartbeat_task = self._loop.create_task(self._heartbeat())

        except Exception as e:
            self._log.error(f"Failed to connect to Hyperliquid WebSocket: {e}")
            raise

    async def _disconnect(self) -> None:
        if self._heartbeat_task:
            self._heartbeat_task.cancel()

        if self._websocket:
            await self._websocket.close()
            self._websocket = None

        self._log.info("Disconnected from Hyperliquid WebSocket")

    async def _subscribe_to_all_mids(self) -> None:
        if not self._websocket:
            raise RuntimeError("WebSocket not connected")

        subscribe_msg = {
            "method": "subscribe",
            "subscription": {
                "type": "allMids"
            }
        }

        await self._websocket.send(json.dumps(subscribe_msg))
        self._log.info("Subscribed to allMids feed")

    async def _handle_messages(self) -> None:
        try:
            async for message in self._websocket:
                await self._process_message(message)
        except websockets.exceptions.ConnectionClosed:
            self._log.warning("WebSocket connection closed")
            if not self._reconnect_task:
                self._reconnect_task = self._loop.create_task(self._reconnect())
        except Exception as e:
            self._log.error(f"Error handling messages: {e}")

    async def _process_message(self, message: str) -> None:
        try:
            data = json.loads(message)

            if data.get("channel") == "allMids" and "data" in data:
                await self._handle_all_mids_data(data["data"])

        except Exception as e:
            self._log.error(f"Error processing message: {e}")

    async def _handle_all_mids_data(self, data: Dict[str, Any]) -> None:
        try:
            mids = data.get("mids", {})

            for symbol_str, mid_price_str in mids.items():
                try:
                    if not symbol_str in SYMBOLS:
                        continue
                    instrument_id = InstrumentId.from_str(symbol_str + "." + self.venue.value)
                    price = Price.from_str(mid_price_str)

                    quote_tick = QuoteTick(
                        instrument_id=instrument_id,
                        bid_price=price, # just mids..
                        ask_price=price, # just mids..
                        bid_size=Quantity.from_int(0),  # Not provided in allMids
                        ask_size=Quantity.from_int(0),  # Not provided in allMids
                        ts_event=data.get("time", self._clock.timestamp_ns()),
                        ts_init=self._clock.timestamp_ns(),
                    )

                    self._log.info(f"publish to data.quotes.{instrument_id.venue.value}.{instrument_id.symbol.value}")

                    # self._msgbus.publish(topic=f"data.quotes.${instrument_id}", msg=quote_tick)
                    # note: during the subscription to a topic, the order of symbol.venue seems to be changed to venue.symbol...because why not?
                    # not sure wtf is going on, for now - we need to adapt here
                    # 2025-06-06T09:30:04.583488000Z [INFO] PPE-THE-TRADER-555.ArbitrageStrategy: Subscribing to AVAXUSDT.HYPERLIQUID
                    # 2025-06-06T09:30:04.583491000Z [DEBUG] PPE-THE-TRADER-555.MessageBus: Added Subscription(topic=data.quotes.HYPERLIQUID.AVAXUSDT, handler=<bound method ArbitrageStrategy.handle_quote_tick of ArbitrageStrategy(ArbitrageStrategy-000)>, priority=0)
                    # 2025-06-06T09:30:04.583621000Z [INFO] PPE-THE-TRADER-555.ArbitrageStrategy: [CMD]--> SubscribeQuoteTicks(instrument_id=AVAXUSDT.HYPERLIQUID, client_id=JUST-PPE-STRATEGY, venue=HYPERLIQUID)
                    #
                    self._msgbus.publish(topic=f"data.quotes.{instrument_id.venue.value}.{instrument_id.symbol.value}", msg=quote_tick)

                except Exception as e:
                    self._log.error(f"Error processing symbol {symbol_str}: {e}")

        except Exception as e:
            self._log.error(f"Error handling allMids data: {e}")

    async def _heartbeat(self) -> None:
        while True:
            try:
                await asyncio.sleep(self._config.heartbeat_interval)
                if self._websocket:
                    ping_msg = {"method": "ping"}
                    await self._websocket.send(json.dumps(ping_msg))
                    self._log.debug("Sent heartbeat ping")
            except Exception as e:
                self._log.error(f"Heartbeat error: {e}")
                break

    async def _reconnect(self) -> None:
        backoff = 1
        max_backoff = 60

        while True:
            try:
                self._log.info(f"Attempting to reconnect in {backoff} seconds...")
                await asyncio.sleep(backoff)

                await self._connect()
                self._log.info("Successfully reconnected")
                self._reconnect_task = None
                break

            except Exception as e:
                self._log.error(f"Reconnection failed: {e}")
                backoff = min(backoff * 2, max_backoff)

    # this crap below is required
    async def _subscribe_instruments(self) -> None:
        pass

    async def _subscribe_instrument(self, instrument_id: InstrumentId) -> None:
        pass

    async def _subscribe_order_book_deltas(self, instrument_id: InstrumentId, book_type, depth: Optional[int] = None) -> None:
        pass

    async def _subscribe_order_book_snapshots(self, instrument_id: InstrumentId, book_type, depth: Optional[int] = None) -> None:
        pass

    async def _subscribe_quote_ticks(self, instrument_id: InstrumentId) -> None:
        pass

    async def _subscribe_trade_ticks(self, instrument_id: InstrumentId) -> None:
        pass

    async def _subscribe_bars(self, bar_type) -> None:
        pass

    async def _subscribe_instrument_status(self, instrument_id: InstrumentId) -> None:
        pass

    async def _subscribe_instrument_close(self, instrument_id: InstrumentId) -> None:
        pass

    async def _unsubscribe_instruments(self) -> None:
        pass

    async def _unsubscribe_instrument(self, instrument_id: InstrumentId) -> None:
        pass

    async def _unsubscribe_order_book_deltas(self, instrument_id: InstrumentId) -> None:
        pass

    async def _unsubscribe_order_book_snapshots(self, instrument_id: InstrumentId) -> None:
        pass

    async def _unsubscribe_quote_ticks(self, instrument_id: InstrumentId) -> None:
        pass

    async def _unsubscribe_trade_ticks(self, instrument_id: InstrumentId) -> None:
        pass

    async def _unsubscribe_bars(self, bar_type) -> None:
        pass

    async def _unsubscribe_instrument_status(self, instrument_id: InstrumentId) -> None:
        pass

    async def _unsubscribe_instrument_close(self, instrument_id: InstrumentId) -> None:
        pass

    async def _request_instrument(self, instrument_id: InstrumentId, correlation_id: str) -> None:
        pass

    async def _request_instruments(self, venue: Venue, correlation_id: str) -> None:
        pass

    async def _request_quote_ticks(self, instrument_id: InstrumentId, limit: int, correlation_id: str, start=None, end=None) -> None:
        pass

    async def _request_trade_ticks(self, instrument_id: InstrumentId, limit: int, correlation_id: str, start=None, end=None) -> None:
        pass

    async def _request_bars(self, bar_type, limit: int, correlation_id: str, start=None, end=None) -> None:
        pass


class HyperliquidLiveDataClientFactory(LiveDataClientFactory):

    @staticmethod
    def create(
            loop: asyncio.AbstractEventLoop,
            name: str,
            msgbus: MessageBus,
            cache: Cache,
            clock: LiveClock,
            config: Optional[HyperliquidLiveDataClientConfig] = None,
    ) -> HyperliquidLiveDataClient:
        if config is None:
            config = HyperliquidLiveDataClientConfig()

        return HyperliquidLiveDataClient(
            loop=loop,
            msgbus=msgbus,
            cache=cache,
            clock=clock,
            config=config,
        )