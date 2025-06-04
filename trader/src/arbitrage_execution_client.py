import asyncio
from typing import Dict, Optional, Any

from nautilus_trader.common.component import Logger
from nautilus_trader.core.uuid import UUID4
from nautilus_trader.execution.messages import SubmitOrder, ModifyOrder, CancelOrder
from nautilus_trader.live.execution_client import LiveExecutionClient
from nautilus_trader.model.events.order import OrderAccepted, OrderFilled, OrderRejected
from nautilus_trader.model.identifiers import (
    ClientId,
    ClientOrderId,
    AccountId
)
from nautilus_trader.model.objects import Price, Money


class ArbitrageExecutionClient(LiveExecutionClient):

    def __init__(
            self,
            loop: asyncio.AbstractEventLoop,
            client_id: ClientId,
            account_id: AccountId,
            hyperliquid_config: Optional[Dict[str, Any]] = None,
            binance_config: Optional[Dict[str, Any]] = None,
            config: Optional[Dict[str, Any]] = None,
    ):
        super().__init__(
            loop=loop,
            client_id=client_id,
            account_id=account_id, # TODO
            config=config or {},
        )

        self.hyperliquid_config = hyperliquid_config or {}
        self.binance_config = binance_config or {}

        # Simulated connection states for PoC
        self._hyperliquid_connected = False
        self._binance_connected = False

        self._pending_orders: Dict[ClientOrderId, dict] = {}

        self._log = Logger(str_name=type(self).__name__)

    async def _connect(self) -> None:
        self._log.info("Connecting to exchanges for arbitrage execution...")

        try:
            await self._connect_hyperliquid()

            await self._connect_binance()

            self._log.info("Successfully connected to both exchanges")

        except Exception as e:
            self._log.error(f"Failed to connect to exchanges: {e}")
            raise

    async def _connect_hyperliquid(self) -> None:
        self._log.info("Connecting to Hyperliquid...")
        await asyncio.sleep(0.1)  # Simulate connection delay
        self._hyperliquid_connected = True
        self._log.info("Connected to Hyperliquid")

    async def _connect_binance(self) -> None:
        self._log.info("Connecting to Binance...")
        await asyncio.sleep(0.1)  # Simulate connection delay
        self._binance_connected = True
        self._log.info("Connected to Binance")

    async def _disconnect(self) -> None:
        self._log.info("Disconnecting from exchanges...")
        self._hyperliquid_connected = False
        self._binance_connected = False
        self._log.info("Disconnected from exchanges")

    def submit_order(self, command: SubmitOrder) -> None:
        self._log.info(f"Submitting arbitrage order: {command.order}")

        venue = command.order.instrument_id.venue

        if venue.value == "HYPERLIQUID":
            self._loop.create_task(self._submit_hyperliquid_order(command))
        elif venue.value == "BINANCE":
            self._loop.create_task(self._submit_binance_order(command))
        else:
            self._log.error(f"Unsupported venue: {venue}")
            self._generate_order_rejected(command, f"Unsupported venue: {venue}")

    async def _submit_hyperliquid_order(self, command: SubmitOrder) -> None:
        if not self._hyperliquid_connected:
            self._generate_order_rejected(command, "Not connected to Hyperliquid")
            return

        try:
            self._log.info(f"Submitting order to Hyperliquid: {command.order.client_order_id}")

            self._pending_orders[command.order.client_order_id] = {
                'command': command,
                'venue': 'HYPERLIQUID',
                'timestamp': self._clock.timestamp_ns()
            }

            # Simulate processing delay
            await asyncio.sleep(0.1)

            self._generate_order_accepted(command)

            # Simulate fill after a short delay
            await asyncio.sleep(0.2)
            self._generate_order_filled(command)

        except Exception as e:
            self._log.error(f"Error submitting Hyperliquid order: {e}")
            self._generate_order_rejected(command, str(e))

    async def _submit_binance_order(self, command: SubmitOrder) -> None:
        if not self._binance_connected:
            self._generate_order_rejected(command, "Not connected to Binance")
            return

        try:
            self._log.info(f"Submitting order to Binance: {command.order.client_order_id}")

            self._pending_orders[command.order.client_order_id] = {
                'command': command,
                'venue': 'BINANCE',
                'timestamp': self._clock.timestamp_ns()
            }

            await asyncio.sleep(0.1)

            self._generate_order_accepted(command)

            await asyncio.sleep(0.2)
            self._generate_order_filled(command)

        except Exception as e:
            self._log.error(f"Error submitting Binance order: {e}")
            self._generate_order_rejected(command, str(e))

    def _generate_order_accepted(self, command: SubmitOrder) -> None:
        event = OrderAccepted(
            TraderId_trader_id=command.trader_id,
            StrategyId_strategy_id=command.strategy_id,
            InstrumentId_instrument_id=command.order.instrument_id,
            ClientOrderId_client_order_id=command.order.client_order_id,
            VenueOrderId_venue_order_id=None,  # Would be set by actual exchange
            AccountId_account_id=self.account_id,
            UUID4_event_id=UUID4(),
            uint64_t_ts_event=self._clock.timestamp_ns(),
            uint64_t_ts_init=self._clock.timestamp_ns(),
        )
        self._handle_event(event)

    def _generate_order_filled(self, command: SubmitOrder) -> None:
        order = command.order

        fill_price = order.price if hasattr(order, 'price') and order.price else Price.from_str("100.00")  # Mock price

        event = OrderFilled(
            trader_id=command.trader_id,
            strategy_id=command.strategy_id,
            instrument_id=order.instrument_id,
            client_order_id=order.client_order_id,
            venue_order_id=None,
            account_id=self.account_id,
            trade_id=None,
            order_side=order.side,
            order_type=order.order_type,
            last_qty=order.quantity,
            last_px=fill_price,
            currency=order.instrument_id.quote_currency,
            commission=Money.from_str("0.001 USDT"),  # Mock commission
            liquidity_side=None,
            event_id=UUID4(),
            ts_event=self._clock.timestamp_ns(),
            ts_init=self._clock.timestamp_ns(),
        )

        # Remove from pending orders
        self._pending_orders.pop(order.client_order_id, None)

        self._handle_event(event)

    def _generate_order_rejected(self, command: SubmitOrder, reason: str) -> None:
        event = OrderRejected(
            TraderId_trader_id=command.trader_id,
            StrategyId_strategy_id=command.strategy_id,
            InstrumentId_instrument_id=command.order.instrument_id,
            ClientOrderId_client_order_id=command.order.client_order_id,
            AccountId_account_id=self.account_id,
            str_reason=reason,
            UUID4_event_id=UUID4(),
            uint64_t_ts_event=self._clock.timestamp_ns(),
            uint64_t_ts_init=self._clock.timestamp_ns(),
        )

        self._pending_orders.pop(command.order.client_order_id, None)

        self._handle_event(event)

    def cancel_order(self, command: CancelOrder) -> None:
        self._log.info(f"Cancelling order: {command.client_order_id}")

    def modify_order(self, command: ModifyOrder) -> None:
        self._log.info(f"Modifying order: {command.client_order_id}")
