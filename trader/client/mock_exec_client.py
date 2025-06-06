import asyncio
import time
import uuid

from nautilus_trader.accounting.accounts.margin import MarginAccount
from nautilus_trader.adapters.sandbox.config import SandboxExecutionClientConfig
from nautilus_trader.cache.cache import Cache, Decimal
from nautilus_trader.common.component import LiveClock, MessageBus
from nautilus_trader.core import UUID4
from nautilus_trader.execution.client import ExecutionClient
from nautilus_trader.execution.messages import SubmitOrder, CancelOrder, ModifyOrder
from nautilus_trader.live.factories import LiveExecClientFactory
from nautilus_trader.model.enums import LiquiditySide
from nautilus_trader.model.events import OrderAccepted, OrderFilled, OrderRejected
from nautilus_trader.model.functions import oms_type_from_str, account_type_from_str
from nautilus_trader.model.identifiers import AccountId, ClientId, VenueOrderId, Venue, InstrumentId, Symbol, TradeId
from nautilus_trader.model.instruments import CurrencyPair
from nautilus_trader.model.objects import Money, Price, Currency, Quantity
from nautilus_trader.model.orders import Order

from config import SYMBOLS


class LoggingMockExecutionClient(ExecutionClient):
    def __init__(
            self,
            loop: asyncio.AbstractEventLoop,
            client_id: ClientId,
            msgbus: MessageBus,
            cache: Cache,
            clock: LiveClock,
            config: SandboxExecutionClientConfig,
    ):
        oms_type = oms_type_from_str(config.oms_type)
        account_type = account_type_from_str(config.account_type)
        super().__init__(
            client_id=client_id,
            venue=Venue(config.venue),
            oms_type=oms_type,
            account_type=account_type,
            base_currency=config.base_currency,
            msgbus=msgbus,
            cache=cache,
            clock=clock,
            config=config
        )

        now = time.time_ns()
        for symbol in SYMBOLS:
            base_currency = Currency.from_str(symbol)
            quote_currency = Currency.from_str("USDT")

            instrument = CurrencyPair(
                instrument_id=InstrumentId(Symbol(symbol), self.venue),
                raw_symbol=Symbol(symbol),
                base_currency=base_currency,
                quote_currency=quote_currency,
                price_precision=4,
                size_precision=4,
                price_increment=Price.from_str("0.0001"),
                size_increment=Quantity.from_str("0.0001"),
                lot_size=None,
                max_quantity=None,
                min_quantity=Quantity.from_str("0.0001"),
                max_notional=None,
                min_notional=None,
                max_price=None,
                min_price=Price.from_str("0.0001"),
                margin_init=Decimal("0.1"),
                margin_maint=Decimal("0.05"),
                maker_fee=Decimal("0.0002"),
                taker_fee=Decimal("0.0005"),
                ts_event=now,
                ts_init=now,
            )
            self._cache.add_instrument(instrument)

        self._loop = loop
        self._config = config

        self._account_id = AccountId(f"{self.venue}-MOCK-{uuid.uuid4().hex[:8]}")

    def connect(self) -> None:
        self._set_connected(True)
        self._log.info(f"MOCK {self.venue}: Connected to simulated execution venue")


    def disconnect(self) -> None:
        self._set_connected(False)
        self._log.info(f"MOCK {self.venue}: Disconnected from simulated execution venue")

    def reset(self) -> None:
        self._log.info(f"MOCK {self.venue}: Resetting client state")

    def dispose(self) -> None:
        self._log.info(f"MOCK {self.venue}: Disposing client")

    def _update_mock_balances(self, account: MarginAccount) -> None:
        pass

    def submit_order(self, command: SubmitOrder) -> None:
        try:
            order = command.order

            self._log.info(f"MOCK {self.venue} EXEC: Received order submission")
            self._log.info(f"  Order ID: {order.client_order_id}")
            self._log.info(f"  Symbol: {order.instrument_id}")
            self._log.info(f"  Side: {order.side}")
            self._log.info(f"  Quantity: {order.quantity}")
            self._log.info(f"  Type: {order.order_type.name}")

            if hasattr(order, 'price') and order.price:
                self._log.info(f"  Price: ${order.price}")

            self._simulate_order_acceptance(order)

            self._loop.create_task(self._simulate_order_fill(order))

        except Exception as e:
            self._log.error(f"Error submitting order: {e}")

    def cancel_order(self, command: CancelOrder) -> None:
        try:
            self._log.info(f"MOCK {self.venue} EXEC: Order cancellation requested")
            self._log.info(f"  Order ID: {command.client_order_id}")

            self._log.info(f"MOCK {self.venue} EXEC: Order {command.client_order_id} canceled")

        except Exception as e:
            self._log.error(f"Error canceling order: {e}")

    def modify_order(self, command: ModifyOrder) -> None:
        try:
            self._log.info(f"MOCK {self.venue} EXEC: Order modification requested")
            self._log.info(f"  Order ID: {command.client_order_id}")

            if command.quantity:
                self._log.info(f"  New Quantity: {command.quantity}")
            if command.price:
                self._log.info(f"  New Price: ${command.price}")

            self._log.info(f"MOCK {self.venue} EXEC: Order {command.client_order_id} modified")

        except Exception as e:
            self._log.error(f"Error modifying order: {e}")

    def _simulate_order_acceptance(self, order: Order) -> None:
        try:
            venue_order_id = VenueOrderId(f"${self.venue}-{uuid.uuid4().hex[:12].upper()}")
            event_id = UUID4()

            # Generate order accepted event
            event = OrderAccepted(
                trader_id=order.trader_id,
                strategy_id=order.strategy_id,
                instrument_id=order.instrument_id,
                client_order_id=order.client_order_id,
                venue_order_id=venue_order_id,
                account_id=self._account_id,
                event_id=event_id,
                ts_event=self._clock.timestamp_ns(),
                ts_init=self._clock.timestamp_ns(),
                reconciliation=False
            )

            # self._msgbus.publish(event)

            self._log.info(f"MOCK {self.venue} EXEC: Order accepted {event}")
            self._log.info(f"  Client Order ID: {order.client_order_id}")
            self._log.info(f"  Venue Order ID: {venue_order_id}")

        except Exception as e:
            self._log.error(f"Error simulating order acceptance: {e}")

    async def _simulate_order_fill(self, order: Order) -> None:
        try:
            await asyncio.sleep(0.1)

            import random

            if random.random() < 0.05:
                self._simulate_order_rejection(order)
                return

            if random.random() < 0.95:
                self._simulate_order_fill_event(order)
            else:
                self._log.info(f"MOCK {self.venue} EXEC: Order {order.client_order_id} not filled (market conditions)")

        except Exception as e:
            self._log.error(f"Error simulating order fill: {e}")

    def _simulate_order_rejection(self, order: Order) -> None:
        try:

            event = OrderRejected(
                trader_id=order.trader_id,
                strategy_id=order.strategy_id,
                instrument_id=order.instrument_id,
                client_order_id=order.client_order_id,
                account_id=self._account_id,
                reason="Insufficient margin (simulated rejection)",
                event_id=UUID4(),
                ts_event=self._clock.timestamp_ns(),
                ts_init=self._clock.timestamp_ns(),
                reconciliation=False
            )

            #self._msgbus.publish(topic="data.events", msg=event)

            self._log.warning(f"MOCK {self.venue} EXEC: Order rejected {event}")
            self._log.warning(f"  Order ID: {order.client_order_id}")
            self._log.warning(f"  Reason: Insufficient margin (simulated)")

        except Exception as e:
            self._log.error(f"Error simulating order rejection: {e}")

    def _simulate_order_fill_event(self, order: Order) -> None:
        try:
            # Simulate fill price (add some slippage)
            import random

            if hasattr(order, 'price') and order.price:
                fill_price = order.price
            else:
                # For market orders, simulate current market price
                fill_price = Price.from_str("50000.00")  # Mock price

            # Add small amount of slippage (0.01-0.05%)
            slippage_factor = 1 + (random.uniform(-0.0005, 0.0005))
            fill_price = Price.from_str(str(float(fill_price) * slippage_factor))

            event = OrderFilled(
                trader_id=order.trader_id,
                strategy_id=order.strategy_id,
                instrument_id=order.instrument_id,
                client_order_id=order.client_order_id,
                venue_order_id=VenueOrderId("venue-id"),
                account_id=self._account_id,
                position_id=order.position_id,
                trade_id=TradeId(UUID4().value),
                order_side=order.side,
                order_type=order.order_type,
                last_qty=order.quantity,
                last_px=fill_price,
                currency=Currency.from_str("USDT"),
                commission=Money.from_str("0 USDT"),
                liquidity_side=LiquiditySide.NO_LIQUIDITY_SIDE, # ??
                event_id=UUID4(),
                ts_event=self._clock.timestamp_ns(),
                ts_init=self._clock.timestamp_ns(),
                reconciliation=True,
            )

            # self._msgbus.publish(event)

            self._log.info(f"MOCK {self.venue} EXEC: Order filled {event}")
            self._log.info(f"  Order ID: {order.client_order_id}")
            self._log.info(f"  Trade ID: {event.trade_id}")
            self._log.info(f"  Side: {order.side.name}")
            self._log.info(f"  Quantity: {order.quantity}")
            self._log.info(f"  Fill Price: ${fill_price}")
            self._log.info(f"  Total Value: ${float(order.quantity) * float(fill_price):.2f}")

        except Exception as e:
            self._log.error(f"Error simulating order fill event: {e}")


class MockExecClientFactory(LiveExecClientFactory):
    @staticmethod
    def create(
            loop: asyncio.AbstractEventLoop,
            name: str,
            msgbus: MessageBus,
            cache,
            clock: LiveClock,
            config: SandboxExecutionClientConfig,
    ) -> LoggingMockExecutionClient:
        return LoggingMockExecutionClient(
            loop=loop,
            client_id=ClientId("ID-" + config.venue),
            msgbus=msgbus,
            cache=cache,
            clock=clock,
            config=config,
        )