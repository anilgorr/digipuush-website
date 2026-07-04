"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const renderedAt = useRef<number>(0);

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

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
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
      renderedAt: renderedAt.current,
      source: "Contact page",
    };

    try {
      const res = await fetch("/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      router.push("/thank-you");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-navy">
            Company (optional)
          </label>
          <input
            id="company"
            name="company"
            className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          What are you looking for help with?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-orange"
        />
      </div>
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
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
  );
}
