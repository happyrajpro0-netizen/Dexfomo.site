export type FeatureStatus = "Implemented" | "In Beta" | "Planned" | "Coming Soon";

export interface FeatureDefinition {
  id: string;
  name: string;
  category: "Analytics" | "Security" | "Intelligence" | "API" | "Monetization";
  description: string;
  status: FeatureStatus;
  badge?: string;
}

export interface TokenDiscoveryItem {
  id: string;
  symbol: string;
  name: string;
  chain: "Ethereum" | "Arbitrum" | "Solana" | "Polygon" | "Base" | "Optimism";
  dex: "Uniswap v3" | "Camelot" | "Raydium" | "Aerodrome" | "QuickSwap";
  address: string;
  samplePriceUsd: number;
  sample24hChangePct: number;
  sampleLiquidityUsd: number;
  sample24hVolumeUsd: number;
  riskScore: number; // 0 - 100 (100 being safest)
  auditStatus: "Audited" | "Verified Source" | "Pending Review";
  dataNotice: "Sample Sandbox Data for Demonstration";
}

export interface DexMarketOverview {
  network: string;
  trackedDEXesCount: number;
  sample24hVolume: number;
  sampleLiquidity: number;
  activePoolsCount: number;
}

export interface WaitlistSubmission {
  id: string;
  email: string;
  intendedUse: "Trader" | "Developer" | "Fund / Institution" | "Token Project";
  createdAt: string;
  ipHash: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "New" | "Reviewed" | "Archived";
}
