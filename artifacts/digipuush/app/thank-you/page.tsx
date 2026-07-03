import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-28 text-center">
      <CheckCircle2 className="h-14 w-14 text-orange" />
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy">
        Thanks — we&apos;ve got your message
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-slate">
        Someone from the Digipuush team will get back to you within one business day with next
        steps for your free AI visibility audit.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange-dark"
      >
        Back to homepage
      </Link>
    </section>
  );
}
