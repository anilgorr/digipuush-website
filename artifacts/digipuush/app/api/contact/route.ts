import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  source: z.string().optional(),
  // Spam protection fields
  website: z.string().optional(), // honeypot — must stay empty
  renderedAt: z.coerce.number(), // client timestamp when form loaded (required)
});

const MIN_SUBMIT_MS = 3000;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Please fill in all required fields with valid details.", issues: result.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, phone, company, message, source, website, renderedAt } = result.data;

  // Honeypot: a real user never fills this hidden field.
  if (website && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Time-trap: reject submissions with a missing/invalid timestamp or faster
  // than 3s after the form loaded. Enforced unconditionally so a bot can't
  // bypass the gate simply by omitting renderedAt.
  if (!Number.isFinite(renderedAt) || Date.now() - renderedAt < MIN_SUBMIT_MS) {
    return NextResponse.json(
      { error: "That was a little too fast — please try submitting again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please call us instead." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New lead from digipuush.com</h2>
    <p><strong>Source:</strong> ${escapeHtml(source ?? "Contact page")}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company ?? "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const text = [
    "New lead from digipuush.com",
    `Source: ${source ?? "Contact page"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Company: ${company ?? "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Digipuush Website <onboarding@resend.dev>",
      to: [siteConfig.contact.email],
      replyTo: email,
      subject: `New AI Visibility Audit request — ${name}`,
      html,
      text,
    });

    if (error) {
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please call us instead." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
