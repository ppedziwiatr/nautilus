#!/usr/bin/env python3
import asyncio

from nautilus_trader.adapters.sandbox.config import SandboxExecutionClientConfig
from nautilus_trader.common.config import LoggingConfig
from nautilus_trader.config import TradingNodeConfig
from nautilus_trader.live.config import LiveExecEngineConfig
from nautilus_trader.live.node import TradingNode
from nautilus_trader.model import TraderId

from arbitrage_strategy import ArbitrageStrategy, ArbitrageStrategyConfig
from client.binance_client import BinanceLiveDataClientConfig, BinanceLiveDataClientFactory
from client.hyperliquid_client import (
    HyperliquidLiveDataClientConfig, HyperliquidLiveDataClientFactory,
)
from config import BINANCE_VENUE, HYPERLIQUID_VENUE
from client.mock_exec_client import MockExecClientFactory


async def main():
    print("=" * 60)
    print("Hyperliquid Nautilus Trader Sandbox")
    print("=" * 60)

    hyperliquid_config = HyperliquidLiveDataClientConfig(
        websocket_url="wss://api.hyperliquid.xyz/ws",
        reconnect_timeout=5,
        heartbeat_interval=30,
    )

    binance_config = BinanceLiveDataClientConfig(
        websocket_url="wss://stream.binance.com:9443/ws",
        reconnect_timeout=5,
        heartbeat_interval=30,
    )

    venues = [BINANCE_VENUE, HYPERLIQUID_VENUE]
    exec_clients = {}
    for venue in venues:
        exec_clients[venue] = SandboxExecutionClientConfig(
            venue=venue,
            starting_balances=["10_000 USDT", "10 ETH"],
            account_type="MARGIN",
            oms_type="NETTING",
        )


    config = TradingNodeConfig(
        trader_id=TraderId("PPE-THE-TRADER-555"),
        logging=LoggingConfig(
            log_level="DEBUG",
            # log_level_file="DEBUG",
            # log_file_format="json",
            log_colors=True,
            use_pyo3=True,
        ),
        data_clients={
            "HYPERLIQUID": hyperliquid_config,
            "BINANCE": binance_config,
        },
        exec_engine=LiveExecEngineConfig(
            reconciliation=False,  # Not applicable
            inflight_check_interval_ms=0,  # Not applicable
            # snapshot_orders=True,
            # snapshot_positions=True,
            # snapshot_positions_interval_secs=5.0,
        ),
        exec_clients=exec_clients,
        timeout_connection=30.0,
        timeout_reconciliation=10.0,
        timeout_portfolio=10.0,
        timeout_disconnection=10.0,
        timeout_post_stop=5.0,
    )

    node = TradingNode(config=config)

    strategy_config = ArbitrageStrategyConfig(
        profit_threshold=0.01,
        max_position_size=1000.0,
        risk_check_interval=5.0
    )

    strategy = ArbitrageStrategy(config=strategy_config)
    node.trader.add_strategy(strategy)

    node.add_data_client_factory("HYPERLIQUID", HyperliquidLiveDataClientFactory)
    node.add_data_client_factory("BINANCE", BinanceLiveDataClientFactory)

    for venue in venues:
        node.add_exec_client_factory(venue, MockExecClientFactory)

    node.build()

    print("Starting Hyperliquid data feed...")
    print("Press Ctrl+C to stop")

    try:
        await node.run_async()
    finally:
        await node.stop_async()
        await asyncio.sleep(1)
        node.dispose()



if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nShutdown complete.")