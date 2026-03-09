import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      return NextResponse.json({ error: "Missing RESEND_AUDIENCE_ID on server" }, { status: 500 });
    }

    // Basic UUID validation to catch obvious misconfiguration before calling Resend
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    if (!uuidRegex.test(audienceId)) {
      return NextResponse.json(
        { error: "RESEND_AUDIENCE_ID must be a valid UUID" },
        { status: 400 },
      );
    }

    const result = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId,
    });

    return NextResponse.json({ ok: true, id: result?.data?.id ?? null });
  } catch (error: any) {
    const message = error?.message || "Failed to subscribe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
