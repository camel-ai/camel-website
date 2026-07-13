import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Collect-only endpoint: adds the email as a contact in Resend.
// It never sends any email (no welcome/confirmation responses).
// Requires RESEND_API_KEY; RESEND_AUDIENCE_ID is optional — when unset,
// the account's first (default) audience is used.

let cachedAudienceId: string | null = null;

async function resolveAudienceId(resend: Resend): Promise<string | null> {
  if (process.env.RESEND_AUDIENCE_ID) return process.env.RESEND_AUDIENCE_ID;
  if (cachedAudienceId) return cachedAudienceId;
  const audiences = await resend.audiences.list();
  const first = audiences.data?.data?.[0];
  if (first) cachedAudienceId = first.id;
  return cachedAudienceId;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Subscriptions are not configured" }, { status: 503 });
    }

    const resend = new Resend(apiKey);

    const audienceId = await resolveAudienceId(resend);
    if (!audienceId) {
      return NextResponse.json({ error: "No audience available" }, { status: 503 });
    }

    const result = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to subscribe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
