import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      service: "dexfomo-market-intelligence",
      domain: "https://dexfomo.site",
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || "production",
      supportedNetworks: ["Ethereum", "Arbitrum", "Solana", "Polygon", "Base", "Optimism"],
      version: "1.0.0-alpha",
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
