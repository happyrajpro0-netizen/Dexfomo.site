import { NextResponse } from "next/server";

export async function GET() {
  const payload = {
    overview: {
      totalVolume24hUsd: 3140000000,
      totalTvlUsd: 11260000000,
      trackedPoolsCount: 42810,
      trackedChainsCount: 6,
      averageIngestionLatencyMs: 14,
    },
    chainBreakdown: [
      { name: "Ethereum", volume24hUsd: 1420000000, tvlUsd: 6100000000, pools: 18400, sharePct: 45.2 },
      { name: "Solana", volume24hUsd: 850000000, tvlUsd: 2100000000, pools: 12200, sharePct: 27.1 },
      { name: "Arbitrum", volume24hUsd: 420000000, tvlUsd: 1540000000, pools: 5900, sharePct: 13.4 },
      { name: "Base", volume24hUsd: 290000000, tvlUsd: 880000000, pools: 4100, sharePct: 9.2 },
      { name: "Polygon", volume24hUsd: 160000000, tvlUsd: 640000000, pools: 2210, sharePct: 5.1 },
    ],
    riskAnalytics: {
      auditedPoolsPercentage: 88.4,
      flaggedLiquidityLocksPercentage: 92.1,
      mempoolAnomaliesDetected24h: 34,
    },
    dataNotice: "Sample Sandbox Data for Demonstration",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
