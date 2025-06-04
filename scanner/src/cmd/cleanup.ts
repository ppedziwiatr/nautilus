import { ArbitrageDatabase } from "../database.ts";

async function main() {
  const args = Deno.args;
  const daysToKeep = args.length > 0 ? parseInt(args[0]) : 30;

  if (isNaN(daysToKeep) || daysToKeep < 1) {
    console.error(
      "❌ Invalid number of days. Please provide a positive number.",
    );
    console.log("Usage: deno task cleanup [days]");
    console.log("Example: deno task cleanup 7  # Keep last 7 days");
    Deno.exit(1);
  }

  console.log("🧹 Database Cleanup");
  console.log("=".repeat(40));
  console.log(`📅 Keeping records from last ${daysToKeep} days`);

  const database = await ArbitrageDatabase.create("./arbitrage.db");

  try {
    const statsBefore = await database.getStats();
    if (statsBefore) {
      console.log(
        `📊 Current total records: ${statsBefore.totalOpportunities}`,
      );
    }

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
    console.log(`🗓️  Cutoff date: ${cutoffDate.toLocaleString()}`);

    if (daysToKeep < 7 && !args.includes("--force")) {
      console.log(
        "\n⚠️  Warning: You are about to delete records newer than 7 days.",
      );
      console.log(
        "   Add --force flag to confirm: deno task cleanup 3 --force",
      );
      Deno.exit(1);
    }

    console.log("\n⏳ Cleaning up old records...");
    const deletedCount = await database.clearOldRecords(daysToKeep);

    if (deletedCount === 0) {
      console.log("✅ No old records found to delete");
    } else {
      console.log(`✅ Successfully deleted ${deletedCount} old records`);

      // Show updated stats
      const statsAfter = await database.getStats();
      if (statsAfter) {
        console.log(`📊 Remaining records: ${statsAfter.totalOpportunities}`);
        console.log(`💾 Freed up space from ${deletedCount} records`);
      }
    }
  } catch (error) {
    console.error("❌ Error during cleanup:", error);
  } finally {
    database.close();
  }
}

if (Deno.args.includes("--help") || Deno.args.includes("-h")) {
  console.log(`
🧹 Database Cleanup Tool

Usage:
  deno task cleanup [days]           # Keep records from last N days (default: 30)
  deno task cleanup 7               # Keep last 7 days
  deno task cleanup 1 --force       # Keep last 1 day (requires --force)

Options:
  --force                           # Force cleanup for periods less than 7 days
  --help, -h                        # Show this help

Examples:
  deno task cleanup                 # Keep last 30 days (default)
  deno task cleanup 14              # Keep last 14 days
  deno task cleanup 3 --force       # Keep last 3 days (forced)
  `);
  Deno.exit(0);
}

if (import.meta.main) {
  main().catch(console.error);
}
