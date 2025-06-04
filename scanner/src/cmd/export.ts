import { ArbitrageDatabase } from "../database.ts";

async function main() {
  const args = Deno.args;
  const symbol = args.length > 0 ? args[0].toUpperCase() : undefined;
  const limit = args.length > 1 ? parseInt(args[1]) : 1000;

  console.log("📁 Exporting Arbitrage Data");
  console.log("=".repeat(40));

  if (symbol) {
    console.log(`🎯 Token: ${symbol}`);
  } else {
    console.log("🌐 All tokens");
  }
  console.log(`📊 Limit: ${limit} records`);

  const database = await ArbitrageDatabase.create("./arbitrage.db");

  try {
    console.log("\n⏳ Fetching data...");
    const data = await database.exportToJSON(symbol, limit);

    if (data.length === 0) {
      console.log("📭 No data found to export");
      if (symbol) {
        console.log(`   No opportunities found for ${symbol}`);
      } else {
        console.log("   Run the scanner first: deno task start");
      }
      return;
    }

    const timestamp = new Date().toISOString().split("T")[0];
    const symbolSuffix = symbol ? `_${symbol.toLowerCase()}` : "";
    const filename = `arbitrage_export${symbolSuffix}_${timestamp}.json`;

    await Deno.writeTextFile(filename, JSON.stringify(data, null, 2));

    console.log(
      `✅ Successfully exported ${data.length} records to ${filename}`,
    );

    const avgDiff = data.reduce((sum, record) =>
      sum + record.percentageDifference, 0) / data.length;
    const maxDiff = Math.max(...data.map((r) =>
      r.percentageDifference
    ));
    const minDiff = Math.min(...data.map((r) => r.percentageDifference));

    console.log("\n📊 Export Summary:");
    console.log(`   Records: ${data.length}`);
    console.log(
      `   Date range: ${
        new Date(data[data.length - 1].timestamp).toLocaleDateString()
      } to ${new Date(data[0].timestamp).toLocaleDateString()}`,
    );
    console.log(`   Average difference: ${avgDiff.toFixed(2)}%`);
    console.log(`   Max difference: ${maxDiff.toFixed(2)}%`);
    console.log(`   Min difference: ${minDiff.toFixed(2)}%`);

    const uniqueTokens = [...new Set(data.map((r) => r.symbol))];
    console.log(
      `   Unique tokens: ${uniqueTokens.length} (${uniqueTokens.join(", ")})`,
    );
  } catch (error) {
    console.error("❌ Error exporting data:", error);
  } finally {
    database.close();
  }
}

if (Deno.args.includes("--help") || Deno.args.includes("-h")) {
  console.log(`
📁 Arbitrage Data Export Tool

Usage:
  deno task export                    # Export all data (last 1000 records)
  deno task export BTC               # Export BTC opportunities only
  deno task export BTC 500           # Export last 500 BTC opportunities
  deno task export -- --help         # Show this help

Examples:
  deno task export
  deno task export SOL
  deno task export ETH 100
  `);
  Deno.exit(0);
}

if (import.meta.main) {
  main().catch(console.error);
}
