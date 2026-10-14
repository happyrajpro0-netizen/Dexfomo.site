import { NextRequest, NextResponse } from "next/server";
import { addContactSubmission, checkRateLimit } from "@/lib/storage";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    const { allowed } = checkRateLimit(`contact_${ip}`, 3, 60000);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many messages submitted from this network. Please wait a few minutes." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON body provided." }, { status: 400 });
    }

    const { name, email, subject, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json({ error: "Please provide a subject." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Please provide a message of at least 10 characters." }, { status: 400 });
    }

    const submission = await addContactSubmission({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to Dexfomo. Our team has received your message.",
      ticketId: submission.id,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to process message due to an internal error." },
      { status: 500 }
    );
  }
}
