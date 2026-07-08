import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import client from "@/lib/apollo/client";
import { GET_CONTACT_PAGE } from "@/lib/graphql/contact.queries";

const DEFAULT_RECIPIENT = "m.uzairk92@gmail.com";

async function fetchRecipientFromCms(): Promise<string | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_CONTACT_PAGE, fetchPolicy: "no-cache" })
    .then(({ data }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sections = (data as any)?.page?.contactPageSections?.contactSections ?? [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formSection = sections.find((s: any) => s.__typename === "ContactPageSectionsContactSectionsFormLayout");
      return formSection?.recipientEmail ?? null;
    })
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const { name, company, email, phone, interest, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });
  }

  const cmsRecipient = await fetchRecipientFromCms();
  const recipient = cmsRecipient || process.env.CONTACT_RECIPIENT_EMAIL || DEFAULT_RECIPIENT;

  const bodyLines = [
    `Name: ${name}`,
    `Company: ${company || "—"}`,
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone || "—"}`,
    `Interested In: ${interest || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Tan Jimenez Consulting <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `Strategic Conversation Inquiry — ${name}`,
      text: bodyLines,
    });

    if (error) {
      console.error("Contact form: Resend error", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form: unexpected error", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
