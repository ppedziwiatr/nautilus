"""
Configuration for the arbitrage trading system
"""

from typing import Dict, Any
from nautilus_trader.config import StrategyConfig


class ArbitrageStrategyConfig(StrategyConfig):

    min_profit_threshold: float = 0.5
    max_position_size: float = 1000.0
    max_age_seconds: int = 5
    risk_limit_percent: float = 2.0

    # Exchange-specific settings
    hyperliquid_settings: Dict[str, Any] = {}
    binance_settings: Dict[str, Any] = {}