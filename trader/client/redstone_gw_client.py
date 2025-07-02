import asyncio
import logging
from typing import Dict, List, Optional, Any, Tuple
from decimal import Decimal

import aiohttp

from nautilus_trader.common.component import LiveClock, MessageBus
from nautilus_trader.live.data_client import LiveMarketDataClient
from nautilus_trader.model.data import QuoteTick
from nautilus_trader.model.identifiers import InstrumentId, Symbol, Venue
from nautilus_trader.model.instruments import CurrencyPair
from nautilus_trader.model.objects import Price, Quantity, Currency


class RestDataClientConfig(LiveMarketDataClient):
    """Configuration for REST API data client"""

    def __init__(
            self,
            symbols: List[str],
            api_url: str = "https://oracle-gateway-2.a.redstone.finance/v2/data-packages/latest/redstone-primary-prod/show-metadata",
            profit_threshold: float = 0.002,
            polling_interval: int = 11
    ):
        super().__init__()
        self.symbols = symbols
        self.api_url = api_url
        self.profit_threshold = profit_threshold
        self.polling_interval = polling_interval


class RedstoneGwClient:
    def __init__(
            self,
            loop: asyncio.AbstractEventLoop,
            msgbus: MessageBus,
            cache,
            clock: LiveClock,
            config: RestDataClientConfig,
    ):
        self._loop = loop
        self._msgbus = msgbus
        self._cache = cache
        self._clock = clock
        self._config = config
        self._logger = logging.getLogger(f"{type(self).__name__}")

        self._session: Optional[aiohttp.ClientSession] = None
        self._is_connected = False
        self._is_running = False
        self._polling_task: Optional[asyncio.Task] = None

        # Track instruments for each venue/source
        self._instruments: Dict[str, Dict[str, CurrencyPair]] = {}
        self._source_venues: Dict[str, Venue] = {}

        # Initialize instruments for all symbols and sources
        self._initialize_instruments()

    def _initialize_instruments(self):
        common_sources = [
            "binance-usdt", "bitget-usdt", "bitmart-usdt", "kraken-usd",
            "kucoin-usdt", "lbank-usdt", "okx-usdt", "bitfinex-usd",
            "coinbase-usd", "uniswap-v3-ethereum-weth-3000"
        ]

        for symbol in self._config.symbols:
            self._instruments[symbol] = {}

            for source in common_sources:
                # Determine quote currency from source name
                if source.endswith('-usdt'):
                    quote_currency = Currency.from_str("USDT")
                    venue_name = source.replace('-usdt', '').upper()
                elif source.endswith('-usd'):
                    quote_currency = Currency.from_str("USD")
                    venue_name = source.replace('-usd', '').upper()
                else:
                    quote_currency = Currency.from_str("USD")  # Default
                    venue_name = source.upper()

                # Create venue
                venue = Venue(venue_name)
                self._source_venues[source] = venue

                # Create instrument
                base_currency = Currency.from_str(symbol)

                instrument_id = InstrumentId(
                    symbol=Symbol(f"{symbol}/{quote_currency.code}"),
                    venue=venue
                )

                instrument = CurrencyPair(
                    instrument_id=instrument_id,
                    raw_symbol=Symbol(symbol),
                    base_currency=base_currency,
                    quote_currency=quote_currency,
                    price_precision=8,
                    size_precision=8,
                    price_increment=Price.from_str("0.00000001"),
                    size_increment=Quantity.from_str("0.00000001"),
                    lot_size=None,
                    max_quantity=None,
                    min_quantity=Quantity.from_str("0.00000001"),
                    max_notional=None,
                    min_notional=None,
                    max_price=None,
                    min_price=Price.from_str("0.00000001"),
                    margin_init=Decimal("0.1"),
                    margin_maint=Decimal("0.05"),
                    maker_fee=Decimal("0.001"),
                    taker_fee=Decimal("0.001"),
                    ts_event=self._clock.timestamp_ns(),
                    ts_init=self._clock.timestamp_ns(),
                )

                self._instruments[symbol][source] = instrument
                self._cache.add_instrument(instrument)

    async def connect(self):
        """Connect to the REST API"""
        try:
            self._logger.info("Connecting to REST API...")

            # Create HTTP session
            timeout = aiohttp.ClientTimeout(total=30)
            self._session = aiohttp.ClientSession(timeout=timeout)

            # Test connection
            await self._fetch_data()

            self._is_connected = True
            self._logger.info("Connected to REST API successfully")

        except Exception as e:
            self._logger.error(f"Failed to connect to REST API: {e}")
            if self._session:
                await self._session.close()
            raise

    async def disconnect(self):
        """Disconnect from the REST API"""
        self._is_running = False

        if self._polling_task:
            self._polling_task.cancel()
            try:
                await self._polling_task
            except asyncio.CancelledError:
                pass

        if self._session:
            await self._session.close()

        self._is_connected = False
        self._logger.info("Disconnected from REST API")

    async def run(self):
        """Run the data client"""
        if not self._is_connected:
            await self.connect()

        self._is_running = True
        self._logger.info("REST API data client started")

        # Start polling task
        self._polling_task = asyncio.create_task(self._polling_loop())

        try:
            await self._polling_task
        except asyncio.CancelledError:
            self._logger.info("Polling task cancelled")
        except Exception as e:
            self._logger.error(f"Error in REST API data client: {e}")
        finally:
            await self.disconnect()

    async def _polling_loop(self):
        """Main polling loop"""
        while self._is_running:
            try:
                await self._fetch_and_process_data()
                await asyncio.sleep(self._config.polling_interval)
            except asyncio.CancelledError:
                break
            except Exception as e:
                self._logger.error(f"Error in polling loop: {e}")
                await asyncio.sleep(self._config.polling_interval)

    async def _fetch_data(self) -> Dict[str, Any]:
        """Fetch data from REST API"""
        if not self._session:
            raise RuntimeError("HTTP session not initialized")

        # Build query parameters for symbols
        params = {
            'symbols': ','.join(self._config.symbols),
            'provider': 'redstone',
            'limit': 1  # Get latest data only
        }

        async with self._session.get(self._config.api_url, params=params) as response:
            if response.status != 200:
                raise RuntimeError(f"API request failed with status {response.status}")

            return await response.json()

    async def _fetch_and_process_data(self):
        """Fetch data and process for arbitrage opportunities"""
        try:
            data = await self._fetch_data()

            # Process each symbol's data
            for symbol, symbol_data in data.items():
                if symbol in self._config.symbols and symbol_data:
                    await self._process_symbol_data(symbol, symbol_data)

        except Exception as e:
            self._logger.error(f"Error fetching and processing data: {e}")

    async def _process_symbol_data(self, symbol: str, symbol_data: List[Dict[str, Any]]):
        """Process data for a specific symbol"""
        if not symbol_data:
            return

        # Get the first (latest) data point
        latest_data = symbol_data[0]

        if 'dataPoints' not in latest_data or not latest_data['dataPoints']:
            return

        data_point = latest_data['dataPoints'][0]

        if 'metadata' not in data_point or 'sourceMetadata' not in data_point['metadata']:
            return

        source_metadata = data_point['metadata']['sourceMetadata']

        # Extract prices from all sources
        source_prices = self._extract_source_prices(source_metadata)

        if len(source_prices) < 2:
            self._logger.debug(f"Not enough price sources for {symbol}: {len(source_prices)}")
            return

        # Find arbitrage opportunities
        arbitrage_opportunities = self._find_arbitrage_opportunities(symbol, source_prices)

        # Publish quote ticks for arbitrage opportunities
        for opportunity in arbitrage_opportunities:
            await self._publish_arbitrage_opportunity(symbol, opportunity)

    def _extract_source_prices(self, source_metadata: Dict[str, Any]) -> Dict[str, float]:
        """Extract prices from source metadata"""
        source_prices = {}

        for source, data in source_metadata.items():
            try:
                # Try to get price from 'value' field
                if 'value' in data:
                    price = float(data['value'])
                    source_prices[source] = price
                # Try to get price from tradeInfo
                elif 'tradeInfo' in data:
                    trade_info = data['tradeInfo']
                    if 'bidPrice' in trade_info and 'askPrice' in trade_info:
                        # Use mid price
                        bid = float(trade_info['bidPrice'])
                        ask = float(trade_info['askPrice'])
                        mid_price = (bid + ask) / 2
                        source_prices[source] = mid_price
                    elif 'bidPrice' in trade_info:
                        source_prices[source] = float(trade_info['bidPrice'])
                    elif 'askPrice' in trade_info:
                        source_prices[source] = float(trade_info['askPrice'])

            except (ValueError, KeyError, TypeError) as e:
                self._logger.debug(f"Could not extract price from {source}: {e}")
                continue

        return source_prices

    def _find_arbitrage_opportunities(
            self,
            symbol: str,
            source_prices: Dict[str, float]
    ) -> List[Tuple[str, str, float, float, float]]:
        """Find arbitrage opportunities between sources"""
        opportunities = []

        # Compare all pairs of sources
        sources = list(source_prices.keys())

        for i in range(len(sources)):
            for j in range(i + 1, len(sources)):
                source1, source2 = sources[i], sources[j]
                price1, price2 = source_prices[source1], source_prices[source2]

                # Calculate price difference percentage
                min_price = min(price1, price2)
                max_price = max(price1, price2)

                if min_price > 0:
                    price_diff_pct = (max_price - min_price) / min_price

                    if price_diff_pct >= self._config.profit_threshold:
                        # Determine buy/sell sources
                        if price1 < price2:
                            buy_source, sell_source = source1, source2
                            buy_price, sell_price = price1, price2
                        else:
                            buy_source, sell_source = source2, source1
                            buy_price, sell_price = price2, price1

                        opportunities.append((
                            buy_source, sell_source, buy_price, sell_price, price_diff_pct
                        ))

                        self._logger.info(
                            f"Arbitrage opportunity found for {symbol}: "
                            f"Buy at {buy_source} @ {buy_price:.6f}, "
                            f"Sell at {sell_source} @ {sell_price:.6f}, "
                            f"Profit: {price_diff_pct:.2%}"
                        )

        return opportunities

    async def _publish_arbitrage_opportunity(
            self,
            symbol: str,
            opportunity: Tuple[str, str, float, float, float]
    ):
        """Publish quote ticks for an arbitrage opportunity"""
        buy_source, sell_source, buy_price, sell_price, profit_pct = opportunity

        try:
            # Create quote ticks for both sources
            timestamp = self._clock.timestamp_ns()

            # Buy source (lower price)
            if buy_source in self._instruments[symbol]:
                buy_instrument = self._instruments[symbol][buy_source]

                buy_quote = QuoteTick(
                    instrument_id=buy_instrument.id,
                    bid_price=Price.from_str(str(buy_price * 0.9995)),  # Slightly lower bid
                    ask_price=Price.from_str(str(buy_price)),
                    bid_size=Quantity.from_str("1.0"),
                    ask_size=Quantity.from_str("1.0"),
                    ts_event=timestamp,
                    ts_init=timestamp,
                )

                # Publish to message bus
                topic = f"data.quotes.{buy_instrument.id}"
                self._msgbus.publish(topic=topic, msg=buy_quote)

            # Sell source (higher price)
            if sell_source in self._instruments[symbol]:
                sell_instrument = self._instruments[symbol][sell_source]

                sell_quote = QuoteTick(
                    instrument_id=sell_instrument.id,
                    bid_price=Price.from_str(str(sell_price)),
                    ask_price=Price.from_str(str(sell_price * 1.0005)),  # Slightly higher ask
                    bid_size=Quantity.from_str("1.0"),
                    ask_size=Quantity.from_str("1.0"),
                    ts_event=timestamp,
                    ts_init=timestamp,
                )

                # Publish to message bus
                topic = f"data.quotes.{sell_instrument.id}"
                self._msgbus.publish(topic=topic, msg=sell_quote)

        except Exception as e:
            self._logger.error(f"Error publishing arbitrage opportunity: {e}")


class RestDataClientFactory:
    """Factory for creating REST API data clients"""

    @staticmethod
    def create(
            loop: asyncio.AbstractEventLoop,
            msgbus: MessageBus,
            cache,
            clock: LiveClock,
            config: RestDataClientConfig,
    ) -> RedstoneGwClient:
        return RedstoneGwClient(
            loop=loop,
            msgbus=msgbus,
            cache=cache,
            clock=clock,
            config=config,
        )