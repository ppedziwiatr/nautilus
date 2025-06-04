import asyncio
import json
import sqlite3
from typing import Dict, List, Optional, Any

from nautilus_trader.common.component import Logger
from nautilus_trader.core.data import Data
from nautilus_trader.live.data_client import LiveDataClient
from nautilus_trader.model.identifiers import ClientId


class ArbitrageOpportunity(Data):
    def __init__(
            self,
            symbol: str,
            hyperliquid_price: float,
            binance_price: float,
            price_difference: float,
            percentage_difference: float,
            direction: str,
            source: str,
            timestamp_ns: int,
            **kwargs
    ):
        super().__init__(timestamp_ns)
        self.timestamp_ns = timestamp_ns
        self.symbol = symbol
        self.hyperliquid_price = hyperliquid_price
        self.binance_price = binance_price
        self.price_difference = price_difference
        self.percentage_difference = percentage_difference
        self.direction = direction  # 'BUY_HL_SELL_BN' or 'BUY_BN_SELL_HL'
        self.source = source  # 'REST' or 'WEBSOCKET'

    @property
    def is_buy_hyperliquid_sell_binance(self) -> bool:
        return self.direction == 'BUY_HL_SELL_BN'

    @property
    def is_profitable(self) -> bool:
        return self.percentage_difference > 0.1  # Configurable threshold

    def __str__(self) -> str:
        return (f"ArbitrageOpportunity({self.symbol}, "
                f"{self.percentage_difference:.2f}%, {self.direction})")


class ArbitrageDataClient(LiveDataClient):
    def __init__(
            self,
            loop: asyncio.AbstractEventLoop,
            client_id: ClientId,
            db_path: str = "./../../scanner/arbitrage.db",
            polling_interval: float = 5.0,  # seconds
            config: Optional[Dict[str, Any]] = None,
    ):
        super().__init__(
            loop=loop,
            client_id=client_id,
            config=config or {},
        )

        self.db_path = db_path
        self.polling_interval = polling_interval
        self._task: Optional[asyncio.Task] = None
        self._last_processed_timestamp = 0
        self._subscribed_symbols: set = set()

        # Logger
        self._log = Logger(str_name=type(self).__name__)

    async def _connect(self) -> None:
        self._log.info("Connecting to arbitrage database...")

        try:
            await self._test_database_connection()
            self._log.info("Successfully connected to arbitrage database")

            self._task = self._loop.create_task(self._poll_arbitrage_opportunities())

        except Exception as e:
            self._log.error(f"Failed to connect to database: {e}")
            raise

    async def _disconnect(self) -> None:
        self._log.info("Disconnecting from arbitrage database...")

        if self._task and not self._task.done():
            self._task.cancel()
            try:
                await self._task
            except asyncio.CancelledError:
                pass

        self._log.info("Disconnected from arbitrage database")

    async def _test_database_connection(self) -> None:
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            cursor.execute("SELECT COUNT(*) FROM arbitrage_opportunities LIMIT 1")
            conn.close()
        except Exception as e:
            self._log.warning(f"Direct SQLite access failed: {e}")

    async def _poll_arbitrage_opportunities(self) -> None:
        self._log.info("Starting arbitrage opportunities polling...")

        while True:
            try:
                opportunities = await self._fetch_new_opportunities()

                for opp in opportunities:
                    if opp.symbol in self._subscribed_symbols or not self._subscribed_symbols:
                        # Publish the opportunity
                        self._handle_data(opp)

                await asyncio.sleep(self.polling_interval)

            except asyncio.CancelledError:
                break
            except Exception as e:
                self._log.error(f"Error polling opportunities: {e}")
                await asyncio.sleep(self.polling_interval)

    async def _fetch_new_opportunities(self) -> List[ArbitrageOpportunity]:
        opportunities = []

        try:
            export_file = "arbitrage_export_latest.json"

            try:
                with open(export_file, 'r') as f:
                    data = json.load(f)

                for record in data:
                    if record['timestamp'] > self._last_processed_timestamp:
                        opp = ArbitrageOpportunity(
                            symbol=record['symbol'],
                            hyperliquid_price=float(record['hyperliquidPrice']),
                            binance_price=float(record['binancePrice']),
                            price_difference=float(record['priceDifference']),
                            percentage_difference=float(record['percentageDifference']),
                            direction=record['direction'],
                            source=record['source'],
                            timestamp_ns=int(record['timestamp'] * 1_000_000)  # Convert to nanoseconds
                        )
                        opportunities.append(opp)

                        # Update last processed timestamp
                        self._last_processed_timestamp = max(
                            self._last_processed_timestamp,
                            record['timestamp']
                        )

            except FileNotFoundError:
                # No export file yet
                pass

        except Exception as e:
            self._log.error(f"Error fetching opportunities: {e}")

        return opportunities

    def subscribe_arbitrage_opportunities(self, symbols: Optional[List[str]] = None) -> None:
        if symbols:
            self._subscribed_symbols.update(symbols)
            self._log.info(f"Subscribed to arbitrage opportunities for: {symbols}")
        else:
            self._subscribed_symbols.clear()
            self._log.info("Subscribed to all arbitrage opportunities")

    def unsubscribe_arbitrage_opportunities(self, symbols: List[str]) -> None:
        for symbol in symbols:
            self._subscribed_symbols.discard(symbol)
        self._log.info(f"Unsubscribed from arbitrage opportunities for: {symbols}")
