import { ArbitrageDatabase } from "../database.ts";

export class ArbitrageAnalyzer {
  private database: ArbitrageDatabase;

  constructor(database: ArbitrageDatabase) {
    this.database = database;
  }

  static async create(dbPath?: string): Promise<ArbitrageAnalyzer> {
    const database = await ArbitrageDatabase.create(dbPath);
    return new ArbitrageAnalyzer(database);
  }

  async analyzeByTimeOfDay(symbol?: string): Promise<Record<number, number>> {
    const records = symbol
      ? await this.database.getOpportunitiesBySymbol(symbol, 1000)
      : await this.database.getRecentOpportunities(1000);

    const hourCounts: Record<number, number> = {};

    for (let i = 0; i < 24; i++) {
      hourCounts[i] = 0;
    }

    records.forEach((record) => {
      const hour = new Date(record.timestamp).getHours();
      hourCounts[hour]++;
    });

    return hourCounts;
  }

  async findBestTradingTimes(): Promise<
    { hour: number; count: number; avgDifference: number }[]
  > {
    const records = await this.database.getRecentOpportunities(1000);
    const hourlyData: Record<number, { count: number; totalDiff: number }> = {};

    for (let i = 0; i < 24; i++) {
      hourlyData[i] = { count: 0, totalDiff: 0 };
    }

    records.forEach((record) => {
      const hour = new Date(record.timestamp).getHours();
      hourlyData[hour].count++;
      hourlyData[hour].totalDiff += record.percentageDifference;
    });

    return Object.entries(hourlyData)
      .map(([hour, data]) => ({
        hour: parseInt(hour),
        count: data.count,
        avgDifference: data.count > 0 ? data.totalDiff / data.count : 0,
      }))
      .filter((item) => item.count > 0)
      .sort((a, b) => b.avgDifference - a.avgDifference);
  }

  async analyzeTokenPerformance(): Promise<{
    symbol: string;
    count: number;
    avgDifference: number;
    maxDifference: number;
    lastSeen: number;
  }[]> {
    const records = await this.database.getRecentOpportunities(1000);
    const tokenData: Record<string, {
      count: number;
      totalDiff: number;
      maxDiff: number;
      lastSeen: number;
    }> = {};

    records.forEach((record) => {
      if (!tokenData[record.symbol]) {
        tokenData[record.symbol] = {
          count: 0,
          totalDiff: 0,
          maxDiff: 0,
          lastSeen: 0,
        };
      }

      const data = tokenData[record.symbol];
      data.count++;
      data.totalDiff += record.percentageDifference;
      data.maxDiff = Math.max(data.maxDiff, record.percentageDifference);
      data.lastSeen = Math.max(data.lastSeen, record.timestamp);
    });

    return Object.entries(tokenData)
      .map(([symbol, data]) => ({
        symbol,
        count: data.count,
        avgDifference: data.totalDiff / data.count,
        maxDifference: data.maxDiff,
        lastSeen: data.lastSeen,
      }))
      .sort((a, b) => b.count - a.count);
  }

  async generateReport(): Promise<string> {
    const stats = await this.database.getStats();
    const tokenPerformance = await this.analyzeTokenPerformance();
    const bestTimes = await this.findBestTradingTimes();

    let report = "📊 ARBITRAGE ANALYSIS REPORT\n";
    report += "=".repeat(50) + "\n\n";

    if (stats) {
      report += `📈 OVERVIEW:\n`;
      report += `   Total opportunities: ${stats.totalOpportunities}\n`;
      report += `   Average difference: ${
        stats.averagePercentageDiff.toFixed(2)
      }%\n`;
      report += `   Last updated: ${
        new Date(stats.lastUpdated).toLocaleString()
      }\n\n`;

      if (stats.bestOpportunity) {
        report += `🏆 BEST OPPORTUNITY:\n`;
        report += `   Token: ${stats.bestOpportunity.symbol}\n`;
        report += `   Difference: ${
          stats.bestOpportunity.percentageDifference.toFixed(2)
        }%\n`;
        report += `   Date: ${
          new Date(stats.bestOpportunity.timestamp).toLocaleString()
        }\n`;
        report += `   Strategy: ${stats.bestOpportunity.direction}\n\n`;
      }
    }

    if (tokenPerformance.length > 0) {
      report += `🎯 TOP PERFORMING TOKENS:\n`;
      tokenPerformance.slice(0, 10).forEach((token, index) => {
        report += `   ${
          index + 1
        }. ${token.symbol}: ${token.count} opportunities, avg ${
          token.avgDifference.toFixed(2)
        }%, max ${token.maxDifference.toFixed(2)}%\n`;
      });
      report += "\n";
    }

    if (bestTimes.length > 0) {
      report += `⏰ BEST TRADING HOURS (UTC):\n`;
      bestTimes.slice(0, 5).forEach((time, index) => {
        report += `   ${index + 1}. ${
          time.hour.toString().padStart(2, "0")
        }:00 - ${time.count} opportunities, avg ${
          time.avgDifference.toFixed(2)
        }%\n`;
      });
      report += "\n";
    }

    return report;
  }

  close(): void {
    this.database.close();
  }
}

async function analyzeData() {
  const analyzer = await ArbitrageAnalyzer.create("./arbitrage.db");

  try {
    const report = await analyzer.generateReport();
    console.log(report);

    const filename = `arbitrage_report_${
      new Date().toISOString().split("T")[0]
    }.txt`;
    await Deno.writeTextFile(filename, report);
    console.log(`📁 Report saved to ${filename}`);
  } catch (error) {
    console.error("Analysis failed:", error);
  } finally {
    analyzer.close();
  }
}

if (import.meta.main) {
  analyzeData().catch(console.error);
}
