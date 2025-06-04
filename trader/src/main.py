import asyncio

from nautilus_trader.config import ImportableStrategyConfig
from nautilus_trader.config import TradingNodeConfig
from nautilus_trader.live.node import TradingNode
from nautilus_trader.model.identifiers import TraderId

from .arbitrage_data_client import ArbitrageDataClient
from .arbitrage_execution_client import ArbitrageExecutionClient


async def run_live_trading():
    # Configuration
    config = TradingNodeConfig(
        trader_id=TraderId("ARBITRAGE-001"),
        data_clients={
            "ARBITRAGE": {
                "factory": ArbitrageDataClient,
                "config": {
                    "db_path": "./../../scanner/arbitrage.db",
                    "polling_interval": 2.0,
                }
            }
        },
        exec_clients={
            "ARBITRAGE": {
                "factory": ArbitrageExecutionClient,
                "config": {
                    "hyperliquid_config": {
                    },
                    "binance_config": {
                    }
                }
            }
        },
        strategies=[
            ImportableStrategyConfig(
                strategy_path="src.arbitrage_strategy:ArbitrageStrategy",
                config_path="src.arbitrage_strategy:ArbitrageStrategyConfig",
                config={
                    "min_profit_threshold": 0.5,
                    "max_position_size": 1000.0,
                }
            )
        ],
        logging={
            "log_level": "INFO",
        }
    )

    node = TradingNode(config=config)

    try:
        await node.run_async()
    except KeyboardInterrupt:
        await node.stop_async()


def main():
    print("🚀 Starting NautilusTrader Arbitrage System")
    print("=" * 50)

    try:
        asyncio.run(run_live_trading())
    except KeyboardInterrupt:
        print("\n🛑 Shutting down...")
    except Exception as e:
        print(f"❌ Error: {e}")


if __name__ == "__main__":
    main()