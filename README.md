## Prerequisites

- [Deno](https://deno.land/) v1.40+ installed

## Quick Start

### 1. **Discover supported tokens**:

```bash
deno task tokens
```

### 2. **Run arbitrage scanner with database storage**:

```bash
deno task start
```

### 3. **Development mode with auto-reload**:

```bash
deno task dev
```

## Database Commands

### **📊 View Statistics**

```bash
# Show comprehensive database statistics
deno task stats
```

Displays total opportunities, averages, best opportunities, and detailed token
performance with min/max/avg differences.

### **📈 View Recent Opportunities**

```bash
# Show last 10 opportunities (default)
deno task recent

# Show last 20 opportunities
deno task recent 20

# Show last 15 SOL opportunities
deno task recent 15 SOL

# Show help
deno task recent -- --help
```

### **📁 Export Data**

```bash
# Export all data (last 1000 records)
deno task export

# Export BTC opportunities only
deno task export BTC

# Export last 500 BTC opportunities  
deno task export BTC 500

# Show help
deno task export -- --help
```

### **🧹 Database Cleanup**

```bash
# Keep last 30 days (default)
deno task cleanup

# Keep last 7 days
deno task cleanup 7

# Keep last 3 days (requires --force for safety)
deno task cleanup 3 --force

# Show help
deno task cleanup -- --help
```

### **📊 Generate Analysis Report**

```bash
# Create comprehensive analysis with time patterns
deno task analyze
```

## Configuration

### Using Discovered Tokens

After running `deno task tokens`, copy the suggested arbitrage tokens into your
scanner:

```typescript
// In src/arbitrage-tokens.ts
export const arbitrageTokens = [
  "BTC",
  "ETH",
  "SOL",
  "AVAX",
  "MATIC",
  "LINK",
  "UNI",
  "AAVE",
  "CRV",
  "DOGE",
];
```

### Arbitrage Threshold

Adjust the minimum percentage difference:

```typescript
const scanner = new ArbitrageScanner(tokens, 0.3, database); // 0.3% minimum
```
