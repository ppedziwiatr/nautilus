import { ArbitrageDatabase } from "../database.ts";

async function main() {
  const args = Deno.args;
  const limit = args.length > 0 ? parseInt(args[0]) : 10;
  const symbol = args.length > 1 ? args[1].toUpperCase() : undefined;

  if (isNaN(limit) || limit < 1) {
    console.error("❌ Invalid limit. Please provide a positive number.");
    console.log("Usage: deno task recent [limit] [symbol]");
    console.log("Example: deno task recent 20 BTC");
    Deno.exit(1);
  }

  console.log("📈 Recent Arbitrage Opportunities");
  console.log("=".repeat(50));

  if (symbol) {
    console.log(`🎯 Token: ${symbol}`);
  } else {
    console.log("🌐 All tokens");
  }
  console.log(`📊 Showing last ${limit} opportunities\n`);

  const database = await ArbitrageDatabase.create("./arbitrage.db");

  try {
    const opportunities = symbol
      ? await database.getOpportunitiesBySymbol(symbol, limit)
      : await database.getRecentOpportunities(limit);

    if (opportunities.length === 0) {
      console.log("📭 No recent opportunities found");
      if (symbol) {
        console.log(`   No opportunities found for ${symbol}`);
      } else {
        console.log("   Run the scanner first: deno task start");
      }
      return;
    }

    console.log(`Found ${opportunities.length} recent opportunities:\n`);

    opportunities.forEach((opp, index) => {
      const date = new Date(opp.timestamp).toLocaleString();
      const emoji = opp.direction === "BUY_HL_SELL_BN" ? "🟢" : "🔵";
      const sourceEmoji = opp.source === "REST" ? "🔄" : "⚡";

      console.log(
        `${index + 1}. ${emoji} ${opp.symbol} - ${
          opp.percentageDifference.toFixed(2)
        }% difference`,
      );
      console.log(`   📅 ${date} ${sourceEmoji} ${opp.source}`);
      console.log(
        `   💱 HL: ${opp.hyperliquidPrice.toFixed(6)} | BN: ${
          opp.binancePrice.toFixed(6)
        }`,
      );
      console.log(`   📈 Strategy: ${opp.direction}`);
      console.log(`   💰 Profit/unit: ${opp.priceDifference.toFixed(6)}`);

      if (index < opportunities.length - 1) {
        console.log("   " + "-".repeat(40));
      }
    });

    const avgDiff = opportunities.reduce((sum, opp) =>
      sum + opp.percentageDifference, 0) / opportunities.length;
    const maxDiff = Math.max(...opportunities.map((opp) =>
      opp.percentageDifference
    ));
    const uniqueTokens = [
      ...new Set(opportunities.map((opp) =>
        opp.symbol
      )),
    ];

    console.log("\n📊 Summary:");
    console.log(`   Average difference: ${avgDiff.toFixed(2)}%`);
    console.log(`   Maximum difference: ${maxDiff.toFixed(2)}%`);
    console.log(
      `   Unique tokens: ${uniqueTokens.length} (${uniqueTokens.join(", ")})`,
    );

    const directions = opportunities.reduce((acc, opp) => {
      acc[opp.direction] = (acc[opp.direction] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log("   Direction breakdown:");
    Object.entries(directions).forEach(([direction, count]) => {
      const percentage = ((count / opportunities.length) * 100).toFixed(1);
      console.log(`     ${direction}: ${count} (${percentage}%)`);
    });
  } catch (error) {
    console.error("❌ Error fetching recent opportunities:", error);
  } finally {
    database.close();
  }
}

if (Deno.args.includes("--help") || Deno.args.includes("-h")) {
  console.log(`
📈 Recent Opportunities Viewer

Usage:
  deno task recent [limit] [symbol]  # Show recent opportunities
  deno task recent 20               # Show last 20 opportunities (all tokens)
  deno task recent 10 BTC           # Show last 10 BTC opportunities
  deno task recent 5 ETH            # Show last 5 ETH opportunities

Parameters:
  limit                             # Number of opportunities to show (default: 10)
  symbol                            # Filter by specific token symbol (optional)

Examples:
  deno task recent                  # Show last 10 opportunities
  deno task recent 25               # Show last 25 opportunities
  deno task recent 15 SOL           # Show last 15 SOL opportunities
  `);
  Deno.exit(0);
}

if (import.meta.main) {
  main().catch(console.error);
}
