import {
  BinancePriceResponse,
  BinanceTickerData,
  PriceData,
} from "../types.ts";

export class BinanceAPI {
  private baseUrl = "https://api.binance.com";
  private wsUrl = "wss://stream.binance.com:9443/ws";

  async fetchPrices(tokens: string[]): Promise<Map<string, PriceData>> {
    const prices = new Map<string, PriceData>();

    try {
      const symbols = tokens.map((token) => `${token}USDT`);
      const symbolsParam = JSON.stringify(symbols);

      const response = await fetch(
        `${this.baseUrl}/api/v3/ticker/price?symbols=${
          encodeURIComponent(symbolsParam)
        }`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: BinancePriceResponse[] = await response.json();

      for (const priceData of data) {
        const symbol = priceData.symbol.replace("USDT", "");
        if (tokens.includes(symbol)) {
          prices.set(symbol, {
            symbol: symbol,
            price: parseFloat(priceData.price),
            timestamp: Date.now(),
            exchange: "Binance",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching Binance prices:", error);
    }

    return prices;
  }

  createWebSocket(
    tokens: string[],
    onPriceUpdate: (prices: Map<string, PriceData>) => void,
  ): WebSocket {
    const streams = tokens.map((token) => `${token.toLowerCase()}usdt@ticker`)
      .join("/");
    const ws = new WebSocket(`${this.wsUrl}/${streams}`);

    ws.onopen = () => {
      console.log("🔗 Connected to Binance WebSocket");
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data) as BinanceTickerData;
        // console.log("📨 Binance message type:", message.stream || "unknown");

        if (message) {
          const symbol = message.s.replace("USDT", "");

          if (tokens.includes(symbol)) {
            const prices = new Map<string, PriceData>();
            prices.set(symbol, {
              symbol: symbol,
              price: parseFloat(message.c),
              timestamp: Date.now(),
              exchange: "Binance",
            });
            console.log(`📊 Binance updated ${symbol}: ${message.c}`);
            onPriceUpdate(prices);
          }
        }
      } catch (error) {
        console.error("Error parsing Binance WebSocket message:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("Binance WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("🔌 Binance WebSocket connection closed");
    };

    return ws;
  }
}
