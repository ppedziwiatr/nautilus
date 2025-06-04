from typing import Dict, Optional

from nautilus_trader.common.component import Logger
from nautilus_trader.core import UUID4
from nautilus_trader.core.data import Data
from nautilus_trader.model.data import DataType
from nautilus_trader.model.enums import OrderSide, TimeInForce
from nautilus_trader.model.identifiers import InstrumentId, Symbol, Venue, ClientOrderId
from nautilus_trader.model.objects import Quantity
from nautilus_trader.model.orders import MarketOrder
from nautilus_trader.trading.strategy import Strategy

from arbitrage_data_client import ArbitrageOpportunity


class ArbitrageStrategy(Strategy):
    def __init__(
            self,
            min_profit_threshold: float = 0.5,  # Minimum profit percentage
            max_position_size: float = 1000.0,  # Maximum position size in USDT
            config: Optional[Dict] = None,
    ):
        super().__init__(config)

        self.min_profit_threshold = min_profit_threshold
        self.max_position_size = max_position_size

        # Track active arbitrage positions
        self._active_arbitrages: Dict[str, dict] = {}

        # Logger
        self._log = Logger(str_name=type(self).__name__)

    def on_start(self) -> None:
        self._log.info("Starting Arbitrage Strategy...")

        self.subscribe_data(
            DataType_data_type=DataType(ArbitrageOpportunity),
            ClientId_client_id=None,  # Will use default data client
        )

        self._log.info("Arbitrage Strategy started")

    def on_stop(self) -> None:
        self._log.info("Stopping Arbitrage Strategy...")

        self._close_all_positions()

        self._log.info("Arbitrage Strategy stopped")

    def on_data(self, data: Data) -> None:
        if isinstance(data, ArbitrageOpportunity):
            self._handle_arbitrage_opportunity(data)

    def _handle_arbitrage_opportunity(self, opportunity: ArbitrageOpportunity) -> None:
        self._log.info(f"Received arbitrage opportunity: {opportunity}")

        if not self._should_execute_arbitrage(opportunity):
            return

        if opportunity.symbol in self._active_arbitrages:
            self._log.info(f"Already have active arbitrage for {opportunity.symbol}")
            return

        self._execute_arbitrage(opportunity)

    def _should_execute_arbitrage(self, opportunity: ArbitrageOpportunity) -> bool:
        if opportunity.percentage_difference < self.min_profit_threshold:
            self._log.info(f"Opportunity below threshold: {opportunity.percentage_difference:.2f}% < {self.min_profit_threshold}%")
            return False

        current_time = self.clock.timestamp_ns()
        opportunity_age_ms = (current_time - opportunity.timestamp_ns) / 1_000_000

        if opportunity_age_ms > 5000:  # 5 seconds
            self._log.info(f"Opportunity too old: {opportunity_age_ms:.1f}ms")
            return False

        return True

    def _execute_arbitrage(self, opportunity: ArbitrageOpportunity) -> None:
        self._log.info(f"Executing arbitrage for {opportunity.symbol}: {opportunity.direction}")

        try:
            # Calculate position size (simplified)
            position_size = min(
                self.max_position_size / opportunity.hyperliquid_price,
                100.0  # Max 100 units
            )

            quantity = Quantity.from_str(str(position_size))

            if opportunity.is_buy_hyperliquid_sell_binance:
                # Buy on Hyperliquid, Sell on Binance
                self._execute_buy_hyperliquid_sell_binance(opportunity, quantity)
            else:
                # Buy on Binance, Sell on Hyperliquid
                self._execute_buy_binance_sell_hyperliquid(opportunity, quantity)

            # Track active arbitrage
            self._active_arbitrages[opportunity.symbol] = {
                'opportunity': opportunity,
                'quantity': quantity,
                'timestamp': self.clock.timestamp_ns(),
            }

        except Exception as e:
            self._log.error(f"Error executing arbitrage: {e}")

    def _execute_buy_hyperliquid_sell_binance(self, opportunity: ArbitrageOpportunity, quantity: Quantity) -> None:
        hl_instrument = InstrumentId(
            Symbol(opportunity.symbol),
            Venue("HYPERLIQUID")
        )
        bn_instrument = InstrumentId(
            Symbol(f"{opportunity.symbol}USDT"),
            Venue("BINANCE")
        )

        # Submit buy order on Hyperliquid
        buy_order = MarketOrder(
            TraderId_trader_id=self.trader_id,
            StrategyId_strategy_id=self.id,
            InstrumentId_instrument_id=hl_instrument,
            ClientOrderId_client_order_id=self._generate_client_order_id(),
            OrderSide_order_side=OrderSide.BUY,
            Quantity_quantity=quantity,
            TimeInForce_time_in_force=TimeInForce.IOC,
            UUID4_init_id=UUID4(),
            uint64_t_ts_init=self.clock.timestamp_ns(),
        )

        # Submit sell order on Binance
        sell_order = MarketOrder(
            TraderId_trader_id=self.trader_id,
            StrategyId_strategy_id=self.id,
            InstrumentId_instrument_id=bn_instrument,
            ClientOrderId_client_order_id=self._generate_client_order_id(),
            OrderSide_order_side=OrderSide.SELL,
            Quantity_quantity=quantity,
            TimeInForce_time_in_force=TimeInForce.IOC,
            UUID4_init_id=UUID4(),
            uint64_t_ts_init=self.clock.timestamp_ns(),
        )

        self.submit_order(buy_order)
        self.submit_order(sell_order)

        self._log.info(f"Submitted arbitrage orders: BUY {quantity} {opportunity.symbol} on HL, SELL {quantity} on BN")

    def _execute_buy_binance_sell_hyperliquid(self, opportunity: ArbitrageOpportunity, quantity: Quantity) -> None:
        bn_instrument = InstrumentId(
            Symbol(f"{opportunity.symbol}USDT"),
            Venue("BINANCE")
        )
        hl_instrument = InstrumentId(
            Symbol(opportunity.symbol),
            Venue("HYPERLIQUID")
        )

        # Submit buy order on Binance
        buy_order = MarketOrder(
            TraderId_trader_id=self.trader_id,
            StrategyId_strategy_id=self.id,
            InstrumentId_instrument_id=bn_instrument,
            ClientOrderId_client_order_id=self._generate_client_order_id(),
            OrderSide_order_side=OrderSide.BUY,
            Quantity_quantity=quantity,
            TimeInForce_time_in_force=TimeInForce.IOC,
            UUID4_init_id=UUID4(),
            uint64_t_ts_init=self.clock.timestamp_ns(),
        )

        # Submit sell order on Hyperliquid
        sell_order = MarketOrder(
            TraderId_trader_id=self.trader_id,
            StrategyId_strategy_id=self.id,
            InstrumentId_instrument_id=hl_instrument,
            ClientOrderId_client_order_id=self._generate_client_order_id(),
            OrderSide_order_side=OrderSide.SELL,
            Quantity_quantity=quantity,
            TimeInForce_time_in_force=TimeInForce.IOC,
            UUID4_init_id=UUID4(),
            uint64_t_ts_init=self.clock.timestamp_ns(),
        )

        self.submit_order(buy_order)
        self.submit_order(sell_order)

        self._log.info(f"Submitted arbitrage orders: BUY {quantity} {opportunity.symbol} on BN, SELL {quantity} on HL")

    def _close_all_positions(self) -> None:
        for symbol in list(self._active_arbitrages.keys()):
            self._log.info(f"Closing arbitrage position for {symbol}")
            del self._active_arbitrages[symbol]

    def _generate_client_order_id(self) -> ClientOrderId:
        return ClientOrderId(str(UUID4()))