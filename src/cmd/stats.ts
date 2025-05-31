import { ArbitrageDatabase } from "../database.ts";

async function main() {
  console.log("📊 Database Statistics");
  console.log("=".repeat(40));

  const database = await ArbitrageDatabase.create("./arbitrage.db");

  try {
    const stats = await database.getStats();

    if (!stats || stats.totalOpportunities === 0) {
      console.log("📭 No arbitrage opportunities found in database");
      console.log("   Run the scanner first: deno task start");
      return;
    }

    console.log(`📈 Total opportunities recorded: ${stats.totalOpportunities}`);
    console.log(
      `📊 Average price difference: ${stats.averagePercentageDiff.toFixed(2)}%`,
    );
    console.log(
      `⏰ Last updated: ${new Date(stats.lastUpdated).toLocaleString()}`,
    );

    if (stats.bestOpportunity) {
      console.log("\n🏆 Best Opportunity:");
      console.log(`   Token: ${stats.bestOpportunity.symbol}`);
      console.log(
        `   Difference: ${
          stats.bestOpportunity.percentageDifference.toFixed(2)
        }%`,
      );
      console.log(
        `   Date: ${
          new Date(stats.bestOpportunity.timestamp).toLocaleString()
        }`,
      );
      console.log(`   Strategy: ${stats.bestOpportunity.direction}`);
      console.log(`   Source: ${stats.bestOpportunity.source}`);
    }

    if (Object.keys(stats.bySymbol).length > 0) {
      console.log("\n🎯 Top Tokens by Opportunity Count:");
      const topSymbols = Object.entries(stats.bySymbol)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10);

      for (let i = 0; i < topSymbols.length; i++) {
        const [symbol, count] = topSymbols[i];

        const opportunities = await database.getOpportunitiesBySymbol(
          symbol,
          1000,
        );

        if (opportunities.length > 0) {
          const differences = opportunities.map((opp) =>
            opp.percentageDifference
          );
          const minDiff = Math.min(...differences);
          const maxDiff = Math.max(...differences);
          const avgDiff = differences.reduce((sum, diff) => sum + diff, 0) /
            differences.length;

          console.log(`   ${i + 1}. ${symbol}: ${count} opportunities`);
          console.log(
            `      📊 Min: ${minDiff.toFixed(2)}% | Max: ${
              maxDiff.toFixed(2)
            }% | Avg: ${avgDiff.toFixed(2)}%`,
          );
        } else {
          console.log(`   ${i + 1}. ${symbol}: ${count} opportunities`);
          console.log(`      📊 No detailed data available`);
        }
      }
    }

    if (Object.keys(stats.byDirection).length > 0) {
      console.log("\n📈 Direction Breakdown:");
      Object.entries(stats.byDirection).forEach(([direction, count]) => {
        const percentage = ((count / stats.totalOpportunities) * 100).toFixed(
          1,
        );
        console.log(`   ${direction}: ${count} (${percentage}%)`);
      });
    }

    const recent24h = await database.getOpportunityCount(24);
    const recent1h = await database.getOpportunityCount(1);
    console.log("\n⏰ Recent Activity:");
    console.log(`   Last 24 hours: ${recent24h} opportunities`);
    console.log(`   Last 1 hour: ${recent1h} opportunities`);
  } catch (error) {
    console.error("❌ Error fetching statistics:", error);
  } finally {
    database.close();
  }
}

if (import.meta.main) {
  main().catch(console.error);
}
