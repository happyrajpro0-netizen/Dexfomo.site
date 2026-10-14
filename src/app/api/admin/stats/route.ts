import { NextRequest, NextResponse } from "next/server";
import { getWaitlistEntries, getContactSubmissions } from "@/lib/storage";

function verifyAdminToken(token: string): boolean {
  try {
    const adminKey = process.env.ADMIN_SECRET_KEY || "dexfomo-admin-preview-key";
    const expectedPrefix = adminKey.slice(0, 8);
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const parts = decoded.split(":");

    if (parts.length !== 3) return false;
    if (parts[0] !== "admin") return false;

    const timestamp = parseInt(parts[1], 10);
    if (isNaN(timestamp)) return false;

    // Check expiration: 24 hours
    if (Date.now() - timestamp > 24 * 60 * 60 * 1000) return false;

    // Verify key hash/prefix
    return parts[2] === expectedPrefix;
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized access: Bearer token required" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "").trim();
  if (!verifyAdminToken(token)) {
    return NextResponse.json({ error: "Invalid or expired administrator session." }, { status: 401 });
  }

  const waitlist = await getWaitlistEntries();
  const contacts = await getContactSubmissions();

  return NextResponse.json({
    stats: {
      totalWaitlistSignups: waitlist.length,
      totalContactInquiries: contacts.length,
      serverUptimeSeconds: Math.floor(process.uptime()),
      systemHealth: "Operational",
      environment: process.env.NODE_ENV || "production",
      lastDataRefresh: new Date().toISOString(),
    },
    waitlist,
    contacts,
  });
}
