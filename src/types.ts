export interface PriceData {
  symbol: string;
  price: number;
  timestamp: number;
  exchange: string;
}

export interface ArbitrageOpportunity {
  symbol: string;
  hyperliquidPrice: number;
  binancePrice: number;
  priceDifference: number;
  percentageDifference: number;
  direction: "BUY_HL_SELL_BN" | "BUY_BN_SELL_HL";
  timestamp: number;
}

export interface HyperliquidMidsResponse {
  [symbol: string]: string;
}

export interface BinancePriceResponse {
  symbol: string;
  price: string;
}

export interface BinanceTickerData {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  c: string; // Close price
  o: string; // Open price
  h: string; // High price
  l: string; // Low price
  v: string; // Volume
  q: string; // Quote volume
  O: number; // Open time
  C: number; // Close time
  F: number; // First trade ID
  L: number; // Last trade ID
  n: number; // Count
}
