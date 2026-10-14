import { NextRequest, NextResponse } from "next/server";
import { addWaitlistEntry, checkRateLimit, getWaitlistEntries } from "@/lib/storage";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    const { allowed } = checkRateLimit(`waitlist_${ip}`, 5, 60000);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many waitlist requests from this network. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON body provided." }, { status: 400 });
    }

    const { email, intendedUse } = body;

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const validRoles = ["Trader", "Developer", "Fund / Institution", "Token Project"] as const;
    const role = validRoles.includes(intendedUse) ? intendedUse : "Trader";

    const entry = await addWaitlistEntry({
      email: email.trim(),
      intendedUse: role,
      ipHash: `hash_${ip.slice(0, 7)}`,
    });

    return NextResponse.json({
      success: true,
      message: "Successfully joined the Dexfomo waitlist.",
      data: {
        id: entry.id,
        email: entry.email,
        intendedUse: entry.intendedUse,
        createdAt: entry.createdAt,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected server error occurred while processing your request." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const entries = await getWaitlistEntries();
  return NextResponse.json({
    totalCount: entries.length,
    status: "Accepting Registrations",
  });
}
