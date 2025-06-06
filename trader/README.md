# Nautilus Trader Arbitrage Bot

## Architecture

The bot consists of several key components:

- **Data Clients**: WebSocket clients for Hyperliquid and Binance price feeds
- **Execution Clients**: Mock execution clients for simulated trading
- **Strategy**: Core arbitrage logic with risk management
- **Configuration**: Centralized configuration management

## Installation

1. **Clone or download the project files** to a directory
2. **Create a virtual environment** (recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

## Configuration

The bot can be configured through environment variables or by modifying the `config.py` file directly.

### Symbol Configuration

The symbols to monitor are configured in `config.py`. By default, the bot monitors:

```python
symbols = [
    "AAVE", "ACE", "ADA", "AIXBT", "ALGO", "ALT", "ANIME", "APE", 
    "APT", "AR", "ARB", "ARK", "ATOM", "AVAX", "BTC", "ETH"
]
```

You can modify this list to include any symbols available on both exchanges.

## Usage

### Running the Bot

```bash
python main.py
```

The bot will:
1. Initialize WebSocket connections to both exchanges
2. Subscribe to price feeds for configured symbols
3. Monitor for arbitrage opportunities
4. Execute simulated trades when profitable opportunities are detected
