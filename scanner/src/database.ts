interface ArbitrageRecord {
  id: string;
  timestamp: number;
  symbol: string;
  hyperliquidPrice: number;
  binancePrice: number;
  priceDifference: number;
  percentageDifference: number;
  direction: "BUY_HL_SELL_BN" | "BUY_BN_SELL_HL";
  detectedAt: string; // ISO string for human readability
  source: "REST" | "WEBSOCKET";
}

interface ArbitrageStats {
  totalOpportunities: number;
  bySymbol: Record<string, number>;
  byDirection: Record<string, number>;
  averagePercentageDiff: number;
  bestOpportunity: ArbitrageRecord | null;
  lastUpdated: number;
}

export class ArbitrageDatabase {
  private kv: Deno.Kv;

  constructor(kv: Deno.Kv) {
    this.kv = kv;
  }

  static async create(path?: string): Promise<ArbitrageDatabase> {
    const kv = await Deno.openKv(path);
    return new ArbitrageDatabase(kv);
  }

  private generateId(): string {
    return `arb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async storeOpportunity(opportunity: {
    symbol: string;
    hyperliquidPrice: number;
    binancePrice: number;
    priceDifference: number;
    percentageDifference: number;
    direction: "BUY_HL_SELL_BN" | "BUY_BN_SELL_HL";
    timestamp: number;
    source: "REST" | "WEBSOCKET";
  }): Promise<string> {
    const id = this.generateId();
    const record: ArbitrageRecord = {
      id,
      ...opportunity,
      detectedAt: new Date(opportunity.timestamp).toISOString(),
    };

    await this.kv.set(["arbitrage", "opportunities", id], record);

    await this.kv.set(
      ["arbitrage", "by_symbol", opportunity.symbol, id],
      record,
    );

    const dateKey = new Date(opportunity.timestamp).toISOString().split("T")[0]; // YYYY-MM-DD
    await this.kv.set(["arbitrage", "by_date", dateKey, id], record);

    await this.updateStats(record);

    return id;
  }

  private async updateStats(newRecord: ArbitrageRecord): Promise<void> {
    const statsResult = await this.kv.get<ArbitrageStats>([
      "arbitrage",
      "stats",
    ]);
    const currentStats: ArbitrageStats = statsResult.value || {
      totalOpportunities: 0,
      bySymbol: {},
      byDirection: {},
      averagePercentageDiff: 0,
      bestOpportunity: null,
      lastUpdated: Date.now(),
    };

    currentStats.totalOpportunities++;

    currentStats.bySymbol[newRecord.symbol] =
      (currentStats.bySymbol[newRecord.symbol] || 0) + 1;

    currentStats.byDirection[newRecord.direction] =
      (currentStats.byDirection[newRecord.direction] || 0) + 1;

    if (
      !currentStats.bestOpportunity ||
      newRecord.percentageDifference >
        currentStats.bestOpportunity.percentageDifference
    ) {
      currentStats.bestOpportunity = newRecord;
    }

    // Update average (simple running average approximation)
    currentStats.averagePercentageDiff = (currentStats.averagePercentageDiff *
        (currentStats.totalOpportunities - 1) +
      newRecord.percentageDifference) /
      currentStats.totalOpportunities;

    currentStats.lastUpdated = Date.now();

    await this.kv.set(["arbitrage", "stats"], currentStats);
  }

  async getOpportunitiesBySymbol(
    symbol: string,
    limit: number = 100,
  ): Promise<ArbitrageRecord[]> {
    const records: ArbitrageRecord[] = [];
    const iter = this.kv.list<ArbitrageRecord>({
      prefix: ["arbitrage", "by_symbol", symbol],
    }, { limit });

    for await (const entry of iter) {
      records.push(entry.value);
    }

    return records.sort((a, b) => b.timestamp - a.timestamp);
  }

  async getOpportunitiesByDate(date: string): Promise<ArbitrageRecord[]> {
    const records: ArbitrageRecord[] = [];
    const iter = this.kv.list<ArbitrageRecord>({
      prefix: ["arbitrage", "by_date", date],
    });

    for await (const entry of iter) {
      records.push(entry.value);
    }

    return records.sort((a, b) => b.timestamp - a.timestamp);
  }

  async getRecentOpportunities(limit: number = 50): Promise<ArbitrageRecord[]> {
    const records: ArbitrageRecord[] = [];
    const iter = this.kv.list<ArbitrageRecord>({
      prefix: ["arbitrage", "opportunities"],
    }, {
      limit,
      reverse: true,
    });

    for await (const entry of iter) {
      records.push(entry.value);
    }

    return records;
  }

  async getStats(): Promise<ArbitrageStats | null> {
    const result = await this.kv.get<ArbitrageStats>(["arbitrage", "stats"]);
    return result.value;
  }

  async getOpportunityCount(hours: number = 24): Promise<number> {
    const since = Date.now() - (hours * 60 * 60 * 1000);
    let count = 0;

    const iter = this.kv.list<ArbitrageRecord>({
      prefix: ["arbitrage", "opportunities"],
    });
    for await (const entry of iter) {
      if (entry.value.timestamp >= since) {
        count++;
      }
    }

    return count;
  }

  async clearOldRecords(daysToKeep: number = 30): Promise<number> {
    const cutoffTime = Date.now() - (daysToKeep * 24 * 60 * 60 * 1000);
    let deletedCount = 0;

    const iter = this.kv.list<ArbitrageRecord>({
      prefix: ["arbitrage", "opportunities"],
    });
    for await (const entry of iter) {
      if (entry.value.timestamp < cutoffTime) {
        await this.kv.delete(entry.key);
        deletedCount++;
      }
    }

    return deletedCount;
  }

  async exportToJSON(
    symbol?: string,
    limit: number = 1000,
  ): Promise<ArbitrageRecord[]> {
    if (symbol) {
      return await this.getOpportunitiesBySymbol(symbol, limit);
    }

    const records: ArbitrageRecord[] = [];
    const iter = this.kv.list<ArbitrageRecord>({
      prefix: ["arbitrage", "opportunities"],
    }, { limit });

    for await (const entry of iter) {
      records.push(entry.value);
    }

    return records.sort((a, b) => b.timestamp - a.timestamp);
  }

  close(): void {
    this.kv.close();
  }
}
