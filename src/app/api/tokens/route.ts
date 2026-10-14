import { NextRequest, NextResponse } from "next/server";
import { SAMPLE_TOKENS } from "@/lib/constants";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const chain = searchParams.get("chain");
  const q = searchParams.get("q")?.toLowerCase();

  let tokens = [...SAMPLE_TOKENS];

  if (chain && chain !== "All") {
    tokens = tokens.filter((t) => t.chain.toLowerCase() === chain.toLowerCase());
  }

  if (q) {
    tokens = tokens.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.symbol.toLowerCase().includes(q) ||
        t.address.toLowerCase().includes(q)
    );
  }

  return NextResponse.json(
    {
      tokens,
      totalCount: tokens.length,
      notice: "Sample Sandbox Data for Demonstration",
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    }
  );
}
