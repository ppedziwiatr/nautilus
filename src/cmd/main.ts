import { ArbitrageScanner } from "../scanner.ts";
import { ArbitrageDatabase } from "../database.ts";
import { arbitrageTokens } from "../arbitrage-tokens.ts";

async function main() {
  console.log(
    "🚀 Starting Hyperliquid-Binance Arbitrage Scanner with Database Storage",
  );
  console.log("=".repeat(70));

  const database = await ArbitrageDatabase.create("./arbitrage.db");
  console.log("💾 Database initialized successfully");

  const tokens = arbitrageTokens;

  const scanner = new ArbitrageScanner(tokens, 0.3, database); // 0.3% minimum difference

  console.log("\n📊 === EXISTING DATABASE STATISTICS ===");
  const existingStats = await scanner.getOpportunityStats();
  if (existingStats && existingStats.totalOpportunities > 0) {
    console.log(
      `📈 Total opportunities recorded: ${existingStats.totalOpportunities}`,
    );
    console.log(
      `📊 Average price difference: ${
        existingStats.averagePercentageDiff.toFixed(2)
      }%`,
    );

    if (existingStats.bestOpportunity) {
      console.log(
        `🏆 Best opportunity: ${existingStats.bestOpportunity.symbol} (${
          existingStats.bestOpportunity.percentageDifference.toFixed(2)
        }%) on ${
          new Date(existingStats.bestOpportunity.timestamp).toLocaleString()
        }`,
      );
    }

    const topSymbols = Object.entries(existingStats.bySymbol)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    console.log(
      `🎯 Most active tokens: ${
        topSymbols.map(([symbol, count]) => `${symbol} (${count})`).join(", ")
      }`,
    );

    const recent24h = await database.getOpportunityCount(24);
    const recent1h = await database.getOpportunityCount(1);
    console.log(
      `⏰ Opportunities in last 24h: ${recent24h}, last 1h: ${recent1h}`,
    );
  } else {
    console.log("📭 No existing data found - starting fresh");
  }

  console.log("\n📊 === REST API SCAN ===");
  const opportunities = await scanner.scanArbitrageREST();

  if (opportunities.length > 0) {
    console.log("\n🎯 ARBITRAGE OPPORTUNITIES SUMMARY:");
    opportunities.forEach((opp) => {
      console.log(
        `💰 ${opp.symbol}: ${opp.percentageDifference.toFixed(2)}% difference`,
      );
      console.log(`   Strategy: ${opp.direction}`);
      console.log(
        `   HL: $${opp.hyperliquidPrice.toFixed(6)} | BN: $${
          opp.binancePrice.toFixed(6)
        }`,
      );
      console.log(
        `   Potential profit: $${opp.priceDifference.toFixed(6)} per unit\n`,
      );
    });
  } else {
    console.log("❌ No arbitrage opportunities found above threshold.");
  }

  console.log("\n🔄 === STARTING REAL-TIME MONITORING ===");
  console.log(
    "💾 All opportunities will be automatically stored in the database",
  );
  console.log("📊 Database statistics will be updated in real-time");
  console.log("Press Ctrl+C to stop and view final statistics...\n");

  scanner.startRealtimeScanning();

  const cleanup = async () => {
    console.log("\n🛑 Shutting down...");

    scanner.stopScanning();

    console.log("\n📊 === FINAL DATABASE STATISTICS ===");
    const finalStats = await scanner.getOpportunityStats();
    if (finalStats && finalStats.totalOpportunities > 0) {
      console.log(
        `📈 Total opportunities recorded: ${finalStats.totalOpportunities}`,
      );
      console.log(
        `📊 Average price difference: ${
          finalStats.averagePercentageDiff.toFixed(2)
        }%`,
      );

      if (finalStats.bestOpportunity) {
        console.log(
          `🏆 Best opportunity: ${finalStats.bestOpportunity.symbol} (${
            finalStats.bestOpportunity.percentageDifference.toFixed(2)
          }%)`,
        );
      }

      const topSymbols = Object.entries(finalStats.bySymbol)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5);

      console.log(
        `🎯 Most active tokens: ${
          topSymbols.map(([symbol, count]) => `${symbol} (${count})`).join(", ")
        }`,
      );

      const directions = Object.entries(finalStats.byDirection);
      console.log(
        `📈 Direction breakdown: ${
          directions.map(([dir, count]) => `${dir} (${count})`).join(", ")
        }`,
      );

      const recent = await database.getOpportunityCount(24);
      console.log(`⏰ Opportunities in last 24h: ${recent}`);
    }

    try {
      const exportData = await scanner.exportData(undefined); // All opportunities
      if (exportData.length > 0) {
        const filename = `arbitrage_data_${
          new Date().toISOString().split("T")[0]
        }.json`;
        await Deno.writeTextFile(filename, JSON.stringify(exportData, null, 2));
        console.log(`📁 Exported ${exportData.length} records to ${filename}`);
      }
    } catch (error) {
      console.error("Failed to export data:", error);
    }

    const deleted = await scanner.cleanupOldData(30);
    if (deleted > 0) {
      console.log(`🧹 Cleaned up ${deleted} old records`);
    }

    database.close();
    console.log("💾 Database connection closed");
    Deno.exit(0);
  };

  Deno.addSignalListener("SIGINT", cleanup);

  // Keep the process alive
  setInterval(() => {
  }, 10000);
}

if (import.meta.main) {
  main().catch(console.error);
}
