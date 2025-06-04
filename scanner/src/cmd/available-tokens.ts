interface PerpToken {
  name: string;
  szDecimals: number;
  maxLeverage: number;
  onlyIsolated?: boolean;
  isDelisted?: boolean;
}

interface SpotToken {
  name: string;
  szDecimals: number;
  weiDecimals: number;
  index: number;
  tokenId: string;
  isCanonical: boolean;
  evmContract: string | null;
  fullName: string | null;
}

interface SpotPair {
  name: string;
  tokens: [number, number]; // [base_token_index, quote_token_index]
  index: number;
  isCanonical: boolean;
}

interface PerpMetaResponse {
  universe: PerpToken[];
}

interface SpotMetaResponse {
  tokens: SpotToken[];
  universe: SpotPair[];
}

interface BinanceSymbol {
  symbol: string;
  status: string;
  baseAsset: string;
  quoteAsset: string;
  baseAssetPrecision: number;
  quotePrecision: number;
  quoteAssetPrecision: number;
  permissions: string[];
  filters: unknown[];
}

interface BinanceExchangeInfo {
  symbols: BinanceSymbol[];
}

interface TokenAvailability {
  token: string;
  hyperliquid: {
    available: boolean;
    perpetual: boolean;
    spot: boolean;
    maxLeverage?: number;
  };
  binance: {
    available: boolean;
    usdtPair: boolean;
    busdPair: boolean;
    usdcPair: boolean;
    status?: string;
  };
  compatible: boolean;
}

class TokensFetcher {
  private baseUrl = "https://api.hyperliquid.xyz";
  private binanceBaseUrl = "https://api.binance.com";
  private binanceSymbols: BinanceSymbol[] = [];

  async fetchHlPerpetualTokens(): Promise<PerpToken[]> {
    try {
      const response = await fetch(`${this.baseUrl}/info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "meta",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: PerpMetaResponse = await response.json();
      return data.universe || [];
    } catch (error) {
      console.error("Error fetching perpetual tokens:", error);
      return [];
    }
  }

  async fetchHlSpotTokens(): Promise<
    { tokens: SpotToken[]; pairs: SpotPair[] }
  > {
    try {
      const response = await fetch(`${this.baseUrl}/info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "spotMeta",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: SpotMetaResponse = await response.json();
      return {
        tokens: data.tokens || [],
        pairs: data.universe || [],
      };
    } catch (error) {
      console.error("Error fetching spot tokens:", error);
      return { tokens: [], pairs: [] };
    }
  }

  async fetchBinanceSymbols(): Promise<BinanceSymbol[]> {
    try {
      console.log("📡 Fetching Binance exchange info...");
      const response = await fetch(
        `${this.binanceBaseUrl}/api/v3/exchangeInfo`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: BinanceExchangeInfo = await response.json();
      this.binanceSymbols = data.symbols || [];

      console.log(
        `✅ Found ${this.binanceSymbols.length} Binance trading pairs`,
      );
      return this.binanceSymbols;
    } catch (error) {
      console.error("Error fetching Binance symbols:", error);
      return [];
    }
  }

  getBinanceTokenAvailability(token: string): {
    available: boolean;
    usdtPair: boolean;
    busdPair: boolean;
    usdcPair: boolean;
    status?: string;
  } {
    const usdtSymbol = this.binanceSymbols.find((s) =>
      s.symbol === `${token}USDT` && s.status === "TRADING"
    );
    const busdSymbol = this.binanceSymbols.find((s) =>
      s.symbol === `${token}BUSD` && s.status === "TRADING"
    );
    const usdcSymbol = this.binanceSymbols.find((s) =>
      s.symbol === `${token}USDC` && s.status === "TRADING"
    );

    const available = !!(usdtSymbol || busdSymbol || usdcSymbol);

    return {
      available,
      usdtPair: !!usdtSymbol,
      busdPair: !!busdSymbol,
      usdcPair: !!usdcSymbol,
      status: usdtSymbol?.status || busdSymbol?.status || usdcSymbol?.status,
    };
  }

  async crossCheckAvailability(): Promise<{
    availability: TokenAvailability[];
    compatibleTokens: string[];
    hyperliquidOnly: string[];
    binanceOnly: string[];
  }> {
    console.log("🔄 Cross-checking token availability...\n");

    const [perpetuals, spotData, binanceSymbols] = await Promise.all([
      this.fetchHlPerpetualTokens(),
      this.fetchHlSpotTokens(),
      this.fetchBinanceSymbols(),
    ]);

    const { tokens: spotTokens } = spotData;

    const hyperliquidTokens = new Set<string>();

    perpetuals.forEach((token) => {
      if (!token.isDelisted) {
        hyperliquidTokens.add(token.name);
      }
    });

    spotTokens.forEach((token) => {
      if (token.isCanonical && token.name !== "USDC") {
        hyperliquidTokens.add(token.name);
      }
    });

    const binanceTokens = new Set<string>();
    const stablecoins = new Set([
      "USDT",
      "BUSD",
      "USDC",
      "DAI",
      "TUSD",
      "USDP",
    ]);

    binanceSymbols.forEach((symbol) => {
      if (
        symbol.status === "TRADING" &&
        (symbol.quoteAsset === "USDT" || symbol.quoteAsset === "BUSD" ||
          symbol.quoteAsset === "USDC") &&
        !stablecoins.has(symbol.baseAsset)
      ) {
        binanceTokens.add(symbol.baseAsset);
      }
    });

    const allTokens = new Set([...hyperliquidTokens, ...binanceTokens]);
    const availability: TokenAvailability[] = [];

    for (const token of allTokens) {
      const hlAvailable = hyperliquidTokens.has(token);
      const perpData = perpetuals.find((p) =>
        p.name === token && !p.isDelisted
      );
      const spotData = spotTokens.find((t) =>
        t.name === token && t.isCanonical
      );

      const binanceAvailability = this.getBinanceTokenAvailability(token);

      const tokenAvailability: TokenAvailability = {
        token,
        hyperliquid: {
          available: hlAvailable,
          perpetual: !!perpData,
          spot: !!spotData,
          maxLeverage: perpData?.maxLeverage,
        },
        binance: binanceAvailability,
        compatible: hlAvailable && binanceAvailability.available,
      };

      availability.push(tokenAvailability);
    }

    availability.sort((a, b) => {
      if (a.compatible && !b.compatible) return -1;
      if (!a.compatible && b.compatible) return 1;
      return a.token.localeCompare(b.token);
    });

    const compatibleTokens = availability
      .filter((a) => a.compatible)
      .map((a) => a.token);

    const hyperliquidOnly = availability
      .filter((a) => a.hyperliquid.available && !a.binance.available)
      .map((a) => a.token);

    const binanceOnly = availability
      .filter((a) => !a.hyperliquid.available && a.binance.available)
      .map((a) => a.token);

    return {
      availability,
      compatibleTokens,
      hyperliquidOnly,
      binanceOnly,
    };
  }

  displayCrossCheckResults(results: {
    availability: TokenAvailability[];
    compatibleTokens: string[];
    hyperliquidOnly: string[];
    binanceOnly: string[];
  }): void {
    const { availability, compatibleTokens, hyperliquidOnly, binanceOnly } =
      results;

    console.log("🚀 CROSS-EXCHANGE TOKEN AVAILABILITY ANALYSIS");
    console.log("=".repeat(60));

    console.log(
      `✅ Compatible tokens (both exchanges): ${compatibleTokens.length}`,
    );
    console.log(`🔵 Hyperliquid only: ${hyperliquidOnly.length}`);
    console.log(`🟡 Binance only: ${binanceOnly.length}`);
    console.log(`📊 Total unique tokens analyzed: ${availability.length}`);

    console.log("\n🎯 VERIFIED ARBITRAGE-READY TOKENS:");
    console.log("-".repeat(50));

    const compatibleAvailability = availability.filter((a) => a.compatible);
    compatibleAvailability.forEach((token, index) => {
      const hlInfo = [];
      if (token.hyperliquid.perpetual) {
        hlInfo.push(`Perp(${token.hyperliquid.maxLeverage}x)`);
      }
      if (token.hyperliquid.spot) {
        hlInfo.push("Spot");
      }

      const bnInfo = [];
      if (token.binance.usdtPair) bnInfo.push("USDT");
      if (token.binance.usdcPair) bnInfo.push("USDC");
      if (token.binance.busdPair) bnInfo.push("BUSD");

      console.log(
        `${(index + 1).toString().padStart(3)}. ${
          token.token.padEnd(8)
        } | HL: ${hlInfo.join(", ").padEnd(12)} | BN: ${bnInfo.join(", ")}`,
      );
    });

    console.log("\n📋 READY-TO-USE ARRAYS:");
    console.log("-".repeat(50));

    console.log("// All verified tokens (both exchanges):");
    console.log("const allCompatibleTokens = [");
    compatibleTokens.forEach((token, index) => {
      const comma = index < compatibleTokens.length - 1 ? "," : "";
      console.log(`  '${token}'${comma}`);
    });
    console.log("];");

    const highPriorityTokens = compatibleTokens.filter((token) =>
      [
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
        "ADA",
        "DOT",
        "ATOM",
        "NEAR",
        "FTM",
        "ALGO",
        "XLM",
        "VET",
        "ICP",
        "HBAR",
      ].includes(token)
    );

    console.log("\n// High-priority arbitrage tokens:");
    console.log("const priorityArbitrageTokens = [");
    highPriorityTokens.forEach((token, index) => {
      const comma = index < highPriorityTokens.length - 1 ? "," : "";
      console.log(`  '${token}'${comma}`);
    });
    console.log("];");

    const perpOnlyTokens = compatibleTokens.filter((token) => {
      const tokenData = availability.find((a) => a.token === token);
      return tokenData?.hyperliquid.perpetual && !tokenData?.hyperliquid.spot;
    });

    if (perpOnlyTokens.length > 0) {
      console.log("\n// Perpetual-only tokens (futures arbitrage):");
      console.log("const perpetualTokens = [");
      perpOnlyTokens.forEach((token, index) => {
        const comma = index < perpOnlyTokens.length - 1 ? "," : "";
        console.log(`  '${token}'${comma}`);
      });
      console.log("];");
    }

    if (hyperliquidOnly.length > 0) {
      console.log("\n🔵 HYPERLIQUID EXCLUSIVE TOKENS:");
      console.log("-".repeat(50));
      console.log("These tokens are available on Hyperliquid but not Binance:");
      console.log(hyperliquidOnly.slice(0, 20).join(", "));
      if (hyperliquidOnly.length > 20) {
        console.log(`... and ${hyperliquidOnly.length - 20} more`);
      }
    }

    console.log("\n📊 STATISTICS:");
    console.log("-".repeat(50));
    const perpCount =
      compatibleAvailability.filter((a) => a.hyperliquid.perpetual).length;
    const spotCount =
      compatibleAvailability.filter((a) => a.hyperliquid.spot).length;
    const usdtCount =
      compatibleAvailability.filter((a) => a.binance.usdtPair).length;
    const usdcCount =
      compatibleAvailability.filter((a) => a.binance.usdcPair).length;

    console.log(`Compatible tokens with perpetuals: ${perpCount}`);
    console.log(`Compatible tokens with spot: ${spotCount}`);
    console.log(`Compatible tokens with USDT pairs: ${usdtCount}`);
    console.log(`Compatible tokens with USDC pairs: ${usdcCount}`);

    const coveragePercent =
      ((compatibleTokens.length / availability.length) * 100).toFixed(1);
    console.log(`Cross-exchange coverage: ${coveragePercent}%`);
  }

  async getAllHyperliquidTokens(): Promise<{
    perpetuals: PerpToken[];
    spotTokens: SpotToken[];
    spotPairs: SpotPair[];
    allTokenNames: string[];
  }> {
    console.log("🔍 Fetching all supported tokens from Hyperliquid...\n");

    const [perpetuals, spotData] = await Promise.all([
      this.fetchHlPerpetualTokens(),
      this.fetchHlSpotTokens(),
    ]);

    const { tokens: spotTokens, pairs: spotPairs } = spotData;

    const perpTokenNames = perpetuals
      .filter((token) => !token.isDelisted)
      .map((token) => token.name);

    const spotTokenNames = spotTokens
      .filter((token) => token.isCanonical && token.name !== "USDC") // Exclude stablecoin base
      .map((token) => token.name);

    const allTokenNames = Array.from(
      new Set([...perpTokenNames, ...spotTokenNames]),
    );

    return {
      perpetuals,
      spotTokens,
      spotPairs,
      allTokenNames,
    };
  }

  displayTokenInfo(data: {
    perpetuals: PerpToken[];
    spotTokens: SpotToken[];
    spotPairs: SpotPair[];
    allTokenNames: string[];
  }): void {
    const { perpetuals, spotTokens, spotPairs, allTokenNames } = data;

    console.log("🚀 HYPERLIQUID SUPPORTED TOKENS SUMMARY");
    console.log("=".repeat(50));

    console.log(`📊 Total unique tokens: ${allTokenNames.length}`);
    console.log(
      `⚡ Perpetual contracts: ${
        perpetuals.filter((p) => !p.isDelisted).length
      }`,
    );
    console.log(
      `💱 Spot tokens: ${spotTokens.filter((t) => t.isCanonical).length}`,
    );
    console.log(
      `🔄 Spot pairs: ${spotPairs.filter((p) => p.isCanonical).length}`,
    );

    console.log("\n📈 PERPETUAL CONTRACTS:");
    console.log("-".repeat(30));
    perpetuals
      .filter((token) => !token.isDelisted)
      .forEach((token, index) => {
        const leverage = token.maxLeverage;
        const isolated = token.onlyIsolated ? " (Isolated Only)" : "";
        console.log(
          `${(index + 1).toString().padStart(3)}. ${
            token.name.padEnd(8)
          } - Max Leverage: ${leverage}x${isolated}`,
        );
      });

    if (perpetuals.some((p) => p.isDelisted)) {
      console.log("\n⚠️  DELISTED PERPETUALS:");
      perpetuals
        .filter((token) => token.isDelisted)
        .forEach((token) => {
          console.log(`    ${token.name} (delisted)`);
        });
    }

    console.log("\n💎 SPOT TOKENS:");
    console.log("-".repeat(30));
    spotTokens
      .filter((token) => token.isCanonical)
      .forEach((token, index) => {
        const decimals = token.szDecimals;
        console.log(
          `${(index + 1).toString().padStart(3)}. ${
            token.name.padEnd(8)
          } - Decimals: ${decimals}`,
        );
      });

    console.log("\n🔄 MAJOR SPOT PAIRS:");
    console.log("-".repeat(30));
    spotPairs
      .filter((pair) => pair.isCanonical)
      .forEach((pair, index) => {
        console.log(`${(index + 1).toString().padStart(3)}. ${pair.name}`);
      });

    console.log("\n🎯 ALL TOKEN NAMES (for arbitrage scanning):");
    console.log("-".repeat(30));
    console.log(allTokenNames.sort().join(", "));

    console.log("\n📋 TypeScript Array Format:");
    console.log("-".repeat(30));
    console.log("const hyperliquidTokens = [");
    allTokenNames.sort().forEach((token, index) => {
      const comma = index < allTokenNames.length - 1 ? "," : "";
      console.log(`  '${token}'${comma}`);
    });
    console.log("];");
  }

  getArbitrageTokens(): string[] {
    // Focus on major tokens that are likely to be on both Hyperliquid and Binance
    return [
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
      "ADA",
      "DOT",
      "ATOM",
      "NEAR",
      "FTM",
      "ALGO",
      "XLM",
      "VET",
      "ICP",
      "HBAR",
      "FLOW",
      "MANA",
      "SAND",
      "AXS",
      "ENJ",
      "BAT",
      "ZRX",
      "COMP",
      "MKR",
      "SNX",
    ];
  }
}

async function main() {
  const fetcher = new TokensFetcher();

  try {
    // Option 1: Quick token discovery (Hyperliquid only)
    console.log("🎯 OPTION 1: QUICK HYPERLIQUID TOKEN DISCOVERY");
    console.log("=".repeat(60));
    const tokenData = await fetcher.getAllHyperliquidTokens();
    fetcher.displayTokenInfo(tokenData);

    console.log("\n🎲 SUGGESTED ARBITRAGE TOKENS:");
    console.log("-".repeat(30));
    const arbitrageTokens = fetcher.getArbitrageTokens()
      .filter((token) => tokenData.allTokenNames.includes(token))
      .slice(0, 15); // Top 15 for practical arbitrage scanning

    console.log(`Tokens present on Hyperliquid and likely on Binance:`);
    console.log(arbitrageTokens.join(", "));

    console.log("\n📝 Ready-to-use array for your arbitrage scanner:");
    console.log("const tokens = [");
    arbitrageTokens.forEach((token, index) => {
      const comma = index < arbitrageTokens.length - 1 ? "," : "";
      console.log(`  '${token}'${comma}`);
    });
    console.log("];");

    // Option 2: Full cross-exchange verification
    console.log("\n\n🔍 OPTION 2: COMPREHENSIVE CROSS-EXCHANGE VERIFICATION");
    console.log("=".repeat(60));
    console.log(
      "This will take a moment as we check Binance availability...\n",
    );

    const crossCheckResults = await fetcher.crossCheckAvailability();
    fetcher.displayCrossCheckResults(crossCheckResults);

    console.log("\n✨ RECOMMENDATION:");
    console.log("=".repeat(60));
    console.log(
      'Use the "priorityArbitrageTokens" array for the best arbitrage opportunities.',
    );
    console.log(
      "These tokens are verified to exist on both exchanges and are major cryptocurrencies.",
    );
  } catch (error) {
    console.error("Failed to fetch token data:", error);
  }
}

// Run if this file is executed directly
if (import.meta.main) {
  main().catch(console.error);
}
