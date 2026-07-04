"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { submitToNetlifyForms } from "@/lib/submit-form";

export function LeadForm({
  source = "Lead form",
  className = "",
}: {
  source?: string;
  className?: string;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? "") || "Requested a free AI Visibility Audit.",
      website: String(data.get("website") ?? ""),
      source,
    };

    try {
      await submitToNetlifyForms(payload);
      router.push("/thank-you");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  }

  return (
    <section className={`bg-mist ${className}`}>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-2xl border border-line bg-white p-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy">
            Get a Free AI Visibility Audit
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            See exactly where your brand stands across Google, ChatGPT, Perplexity, and
            Gemini — and what it takes to get cited.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="website"
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="lf-name" className="text-sm font-medium text-navy">
                  Name
                </label>
                <input
                  id="lf-name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
                />
              </div>
              <div>
                <label htmlFor="lf-email" className="text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  id="lf-email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
                />
              </div>
              <div>
                <label htmlFor="lf-phone" className="text-sm font-medium text-navy">
                  Phone
                </label>
                <input
                  id="lf-phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
                />
              </div>
              <div>
                <label htmlFor="lf-company" className="text-sm font-medium text-navy">
                  Company (optional)
                </label>
                <input
                  id="lf-company"
                  name="company"
                  className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lf-message" className="text-sm font-medium text-navy">
                What would you like help with? (optional)
              </label>
              <textarea
                id="lf-message"
                name="message"
                rows={3}
                className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
              />
            </div>
            {/* Honeypot — hidden from real users */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="lf-website">Website</label>
              <input id="lf-website" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            {error && (
              <p className="text-sm text-red-600">
                {error} You can also call us at{" "}
                <a href={siteConfig.contact.phoneHref} className="font-semibold underline">
                  {siteConfig.contact.phone}
                </a>
                .
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dark disabled:opacity-70"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Get a Free AI Visibility Audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
