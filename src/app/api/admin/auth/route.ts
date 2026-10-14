import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { key } = body;
    const adminKey = process.env.ADMIN_SECRET_KEY || "dexfomo-admin-preview-key";

    if (!key || typeof key !== "string" || key.trim() !== adminKey.trim()) {
      return NextResponse.json({ error: "Invalid admin authentication key." }, { status: 401 });
    }

    // Return a session token for client-side state
    const sessionToken = Buffer.from(`admin:${Date.now()}:${adminKey.slice(0, 8)}`).toString("base64");

    return NextResponse.json({
      success: true,
      role: "Administrator",
      token: sessionToken,
      expiresInSeconds: 3600,
    });
  } catch {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
