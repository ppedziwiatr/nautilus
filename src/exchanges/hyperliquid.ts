import { HyperliquidMidsResponse, PriceData } from "../types.ts";

export class HyperliquidAPI {
  private baseUrl = "https://api.hyperliquid.xyz";
  private wsUrl = "wss://api.hyperliquid.xyz/ws";

  async fetchPrices(tokens: string[]): Promise<Map<string, PriceData>> {
    const prices = new Map<string, PriceData>();

    try {
      const response = await fetch(`${this.baseUrl}/info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "allMids",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const mids: HyperliquidMidsResponse = await response.json();

      for (const token of tokens) {
        if (mids[token]) {
          prices.set(token, {
            symbol: token,
            price: parseFloat(mids[token]),
            timestamp: Date.now(),
            exchange: "Hyperliquid",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching Hyperliquid prices:", error);
    }

    return prices;
  }

  createWebSocket(
    tokens: string[],
    onPriceUpdate: (prices: Map<string, PriceData>) => void,
  ): WebSocket {
    const ws = new WebSocket(this.wsUrl);

    ws.onopen = () => {
      console.log("🔗 Connected to Hyperliquid WebSocket");
      ws.send(JSON.stringify({
        method: "subscribe",
        subscription: { type: "allMids" },
      }));
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log(
          "📨 Hyperliquid message:",
          JSON.stringify(message).slice(0, 200) + "...",
        );

        if (message.channel === "allMids" && message.data) {
          const prices = new Map<string, PriceData>();
          const mids = message.data;

          for (const token of tokens) {
            if (mids[token]) {
              prices.set(token, {
                symbol: token,
                price: parseFloat(mids[token]),
                timestamp: Date.now(),
                exchange: "Hyperliquid",
              });
            }
          }

          console.log(`📊 Hyperliquid updated ${prices.size} prices`);
          if (prices.size > 0) {
            onPriceUpdate(prices);
          }
        }
      } catch (error) {
        console.error("Error parsing Hyperliquid WebSocket message:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("Hyperliquid WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("🔌 Hyperliquid WebSocket connection closed");
    };

    return ws;
  }
}
