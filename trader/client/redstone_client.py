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

from config import SYMBOLS, BINANCE_VENUE

ssl_context = ssl.create_default_context()
ssl_context.load_verify_locations(certifi.where())


class BinanceLiveDataClientConfig(LiveDataClientConfig, frozen=True):
    websocket_url: str = "wss://stream.binance.com:9443/ws"
    reconnect_timeout: int = 5
    heartbeat_interval: int = 30


class BinanceLiveDataClient(LiveMarketDataClient):
    def __init__(
            self,
            loop: asyncio.AbstractEventLoop,
            msgbus: MessageBus,
            cache: Cache,
            clock: LiveClock,
            config: BinanceLiveDataClientConfig,
    ) -> None:
        super().__init__(
            loop=loop,
            client_id=ClientId("Binance"),
            venue=Venue(BINANCE_VENUE),
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
            self._log.info(f"Connecting to Binance WebSocket: {self._config.websocket_url}")
            streams = [f"{symbol.lower()}usdt@ticker" for symbol in SYMBOLS]
            stream_url = f"{self._config.websocket_url}/{'/'.join(streams)}"
            self._websocket = await websockets.connect(stream_url, ssl=ssl_context)
            self._log.info("Connected to Binance WebSocket")

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

            if "data" in data:
                await self._handle_ticker_data(data["data"])
            elif "s" in data:
                await self._handle_ticker_data(data)

        except Exception as e:
            self._log.error(f"Error processing message: {e}")

    async def _handle_ticker_data(self, ticker_data: Dict[str, Any]):
        try:
            symbol = ticker_data.get("s").replace("USDT", "")  # Symbol
            bid_price = Price.from_str(ticker_data.get("b", "0"))  # Best bid
            ask_price = Price.from_str(ticker_data.get("a", "0"))  # Best ask
            bid_qty = Quantity.from_str(ticker_data.get("B", "1"))  # Best bid qty
            ask_qty = Quantity.from_str(ticker_data.get("A", "1"))  # Best ask qty

            instrument_id = InstrumentId.from_str(symbol + "." + self.venue.value)

            quote_tick = QuoteTick(
                instrument_id=instrument_id,
                bid_price=bid_price,
                ask_price=ask_price,
                bid_size=bid_qty,
                ask_size=ask_qty,
                ts_event=self._clock.timestamp_ns(),
                ts_init=self._clock.timestamp_ns(),
            )

            # Publish quote tick to message bus
            # self._log.info(f"publish to data.quotes.{instrument_id.venue.value}.{instrument_id.symbol.value}")
            self._msgbus.publish(topic=f"data.quotes.{instrument_id.venue.value}.{instrument_id.symbol.value}", msg=quote_tick)

        except Exception as e:
            self._log.error(f"Error handling Binance data: {e}")

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


class BinanceLiveDataClientFactory(LiveDataClientFactory):

    @staticmethod
    def create(
            loop: asyncio.AbstractEventLoop,
            name: str,
            msgbus: MessageBus,
            cache: Cache,
            clock: LiveClock,
            config: Optional[BinanceLiveDataClientConfig] = None,
    ) -> BinanceLiveDataClient:
        if config is None:
            config = BinanceLiveDataClientConfig()

        return BinanceLiveDataClient(
            loop=loop,
            msgbus=msgbus,
            cache=cache,
            clock=clock,
            config=config,
        )