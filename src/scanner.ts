import { ArbitrageOpportunity, PriceData } from "./types.ts";
import { HyperliquidAPI } from "./exchanges/hyperliquid.ts";
import { BinanceAPI } from "./exchanges/binance.ts";
import { ArbitrageDatabase } from "./database.ts";

export class ArbitrageScanner {
  private tokens: string[];
  private hyperliquidPrices: Map<string, PriceData> = new Map();
  private binancePrices: Map<string, PriceData> = new Map();
  private arbitrageThreshold: number;
  private wsConnections: WebSocket[] = [];
  private hyperliquidAPI: HyperliquidAPI;
  private binanceAPI: BinanceAPI;
  private database: ArbitrageDatabase;

  constructor(
    tokens: string[],
    arbitrageThreshold: number = 0.5,
    database: ArbitrageDatabase,
  ) {
    this.tokens = tokens;
    this.arbitrageThreshold = arbitrageThreshold;
    this.hyperliquidAPI = new HyperliquidAPI();
    this.binanceAPI = new BinanceAPI();
    this.database = database;
  }

  private updateHyperliquidPrices = (prices: Map<string, PriceData>) => {
    console.log(`🔄 Updating Hyperliquid prices for ${prices.size} tokens`);
    for (const [symbol, priceData] of prices) {
      this.hyperliquidPrices.set(symbol, priceData);
      console.log(`   ${symbol}: $${priceData.price.toFixed(6)}`);
    }
    this.checkArbitrageOpportunities("WEBSOCKET");
  };

  private updateBinancePrices = (prices: Map<string, PriceData>) => {
    console.log(`🔄 Updating Binance prices for ${prices.size} tokens`);
    for (const [symbol, priceData] of prices) {
      this.binancePrices.set(symbol, priceData);
      console.log(`   ${symbol}: $${priceData.price.toFixed(6)}`);
    }
    this.checkArbitrageOpportunities("WEBSOCKET");
  };

  private async checkArbitrageOpportunities(
    source: "REST" | "WEBSOCKET",
  ): Promise<void> {
    const opportunities: ArbitrageOpportunity[] = [];
    const timestamp = new Date().toLocaleTimeString();

    console.log(`\n🔍 [${timestamp}] Checking arbitrage opportunities...`);
    console.log(
      `   HL prices: ${this.hyperliquidPrices.size}, BN prices: ${this.binancePrices.size}`,
    );

    for (const token of this.tokens) {
      const hlPrice = this.hyperliquidPrices.get(token);
      const bnPrice = this.binancePrices.get(token);

      if (hlPrice && bnPrice) {
        const priceDiff = Math.abs(hlPrice.price - bnPrice.price);
        const avgPrice = (hlPrice.price + bnPrice.price) / 2;
        const percentageDiff = (priceDiff / avgPrice) * 100;

        /*console.log(
          `   ${token}: HL=$${hlPrice.price.toFixed(6)}, BN=$${
            bnPrice.price.toFixed(6)
          }, Diff=${percentageDiff.toFixed(2)}%`,
        );*/

        if (percentageDiff >= this.arbitrageThreshold) {
          const direction = hlPrice.price > bnPrice.price
            ? "BUY_BN_SELL_HL"
            : "BUY_HL_SELL_BN";

          const opportunity: ArbitrageOpportunity = {
            symbol: token,
            hyperliquidPrice: hlPrice.price,
            binancePrice: bnPrice.price,
            priceDifference: priceDiff,
            percentageDifference: percentageDiff,
            direction: direction,
            timestamp: Date.now(),
          };

          opportunities.push(opportunity);

          try {
            const recordId = await this.database.storeOpportunity({
              ...opportunity,
              source,
            });
            console.log(`💾 Stored opportunity ${token} with ID: ${recordId}`);
          } catch (error) {
            console.error(
              `❌ Failed to store opportunity for ${token}:`,
              error,
            );
          }
        }
      } else {
        console.log(
          `   ${token}: Missing data (HL: ${!!hlPrice}, BN: ${!!bnPrice})`,
        );
      }
    }

    if (opportunities.length > 0) {
      console.log("\n🚨 ARBITRAGE OPPORTUNITIES DETECTED:");
      opportunities.forEach((opp) => {
        const emoji = opp.direction === "BUY_HL_SELL_BN" ? "🟢" : "🔵";
        console.log(
          `${emoji} ${opp.symbol}: ${
            opp.percentageDifference.toFixed(2)
          }% difference`,
        );
        console.log(`   Hyperliquid: $${opp.hyperliquidPrice.toFixed(6)}`);
        console.log(`   Binance:     $${opp.binancePrice.toFixed(6)}`);
        console.log(`   Strategy:    ${opp.direction}`);
        console.log(`   Profit/unit: $${opp.priceDifference.toFixed(6)}`);
        console.log("   ---");
      });

      await this.displayDatabaseStats();
    } else {
      console.log("   ✅ No arbitrage opportunities above threshold");
    }
  }

  private async displayDatabaseStats(): Promise<void> {
    try {
      const stats = await this.database.getStats();
      if (stats) {
        console.log("\n📊 DATABASE STATISTICS:");
        console.log(
          `   Total opportunities recorded: ${stats.totalOpportunities}`,
        );
        console.log(
          `   Average price difference: ${
            stats.averagePercentageDiff.toFixed(2)
          }%`,
        );

        if (stats.bestOpportunity) {
          console.log(
            `   Best opportunity: ${stats.bestOpportunity.symbol} (${
              stats.bestOpportunity.percentageDifference.toFixed(2)
            }%)`,
          );
        }

        const topSymbols = Object.entries(stats.bySymbol)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 3);

        if (topSymbols.length > 0) {
          console.log(
            `   Most active tokens: ${
              topSymbols.map(([symbol, count]) => `${symbol} (${count})`).join(
                ", ",
              )
            }`,
          );
        }
      }
    } catch (error) {
      console.error("Failed to display database stats:", error);
    }
  }

  async scanArbitrageREST(): Promise<ArbitrageOpportunity[]> {
    console.log("📊 Fetching prices from both exchanges...");

    const [hlPrices, bnPrices] = await Promise.all([
      this.hyperliquidAPI.fetchPrices(this.tokens),
      this.binanceAPI.fetchPrices(this.tokens),
    ]);

    for (const [symbol, priceData] of hlPrices) {
      this.hyperliquidPrices.set(symbol, priceData);
    }
    for (const [symbol, priceData] of bnPrices) {
      this.binancePrices.set(symbol, priceData);
    }

    const opportunities: ArbitrageOpportunity[] = [];

    console.log("\n📈 Current Prices:");
    for (const token of this.tokens) {
      const hlPrice = this.hyperliquidPrices.get(token);
      const bnPrice = this.binancePrices.get(token);

      if (hlPrice && bnPrice) {
        const priceDiff = Math.abs(hlPrice.price - bnPrice.price);
        const avgPrice = (hlPrice.price + bnPrice.price) / 2;
        const percentageDiff = (priceDiff / avgPrice) * 100;

        const diffColor = percentageDiff >= this.arbitrageThreshold
          ? "🔴"
          : "⚪";
        console.log(
          `${diffColor} ${token}: HL=$${hlPrice.price.toFixed(6)}, BN=$${
            bnPrice.price.toFixed(6)
          }, Diff=${percentageDiff.toFixed(2)}%`,
        );

        if (percentageDiff >= this.arbitrageThreshold) {
          const direction = hlPrice.price > bnPrice.price
            ? "BUY_BN_SELL_HL"
            : "BUY_HL_SELL_BN";

          const opportunity: ArbitrageOpportunity = {
            symbol: token,
            hyperliquidPrice: hlPrice.price,
            binancePrice: bnPrice.price,
            priceDifference: priceDiff,
            percentageDifference: percentageDiff,
            direction: direction,
            timestamp: Date.now(),
          };

          opportunities.push(opportunity);

          try {
            const recordId = await this.database.storeOpportunity({
              ...opportunity,
              source: "REST",
            });
            console.log(
              `💾 Stored REST opportunity ${token} with ID: ${recordId}`,
            );
          } catch (error) {
            console.error(
              `❌ Failed to store REST opportunity for ${token}:`,
              error,
            );
          }
        }
      } else {
        console.log(
          `❌ ${token}: Missing price data (HL: ${!!hlPrice}, BN: ${!!bnPrice})`,
        );
      }
    }

    if (opportunities.length > 0) {
      await this.displayDatabaseStats();
    }

    return opportunities;
  }

  startRealtimeScanning(): void {
    console.log("🔄 Starting real-time arbitrage scanning...");
    console.log(
      `📊 Monitoring ${this.tokens.length} tokens: ${this.tokens.join(", ")}`,
    );
    console.log(`🎯 Arbitrage threshold: ${this.arbitrageThreshold}%\n`);

    this.scanArbitrageREST().then(() => {
      console.log(
        "\n🔌 Starting WebSocket connections for real-time updates...\n",
      );

      const hlWs = this.hyperliquidAPI.createWebSocket(
        this.tokens,
        this.updateHyperliquidPrices,
      );
      const bnWsResult = this.binanceAPI.createWebSocket(
        this.tokens,
        this.updateBinancePrices,
      );

      this.wsConnections.push(hlWs);

      // Handle multiple Binance connections
      if (Array.isArray(bnWsResult)) {
        this.wsConnections.push(...bnWsResult);
      } else {
        this.wsConnections.push(bnWsResult);
      }

      const statusInterval = setInterval(async () => {
        console.log(
          `\n💓 Status Check - HL: ${this.hyperliquidPrices.size} prices, BN: ${this.binancePrices.size} prices`,
        );

        const recentCount = await this.database.getOpportunityCount(1);
        console.log(`📈 Opportunities in last hour: ${recentCount}`);
      }, 30000);

      (this as any).statusInterval = statusInterval;
    });
  }

  stopScanning(): void {
    this.wsConnections.forEach((ws) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    });
    this.wsConnections = [];

    if ((this as any).statusInterval) {
      clearInterval((this as any).statusInterval);
      delete (this as any).statusInterval;
    }

    console.log("⏹️  Stopped arbitrage scanning");
  }

  getCurrentPrices(): {
    hyperliquid: Map<string, PriceData>;
    binance: Map<string, PriceData>;
  } {
    return {
      hyperliquid: new Map(this.hyperliquidPrices),
      binance: new Map(this.binancePrices),
    };
  }

  getTokens(): string[] {
    return [...this.tokens];
  }

  setArbitrageThreshold(threshold: number): void {
    this.arbitrageThreshold = threshold;
  }

  async getHistoricalOpportunities(symbol?: string, limit: number = 50) {
    if (symbol) {
      return await this.database.getOpportunitiesBySymbol(symbol, limit);
    }
    return await this.database.getRecentOpportunities(limit);
  }

  async getOpportunityStats() {
    return await this.database.getStats();
  }

  async exportData(symbol?: string) {
    return await this.database.exportToJSON(symbol);
  }

  async cleanupOldData(daysToKeep: number = 30) {
    const deleted = await this.database.clearOldRecords(daysToKeep);
    console.log(`🧹 Cleaned up ${deleted} old records`);
    return deleted;
  }
}
