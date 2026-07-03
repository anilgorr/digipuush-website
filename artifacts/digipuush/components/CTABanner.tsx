import Link from "next/link";

export function CTABanner({
  title = "Ready to be the answer AI gives?",
  subtitle = "Get a free AI Visibility Audit and see exactly where you stand across Google, ChatGPT, Perplexity, and Gemini.",
  ctaLabel = "Get a Free AI Visibility Audit",
  ctaHref = "/contact",
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300 text-[15px]" style={{ color: "#a3adc2" }}>
          {subtitle}
        </p>
        <div className="mt-8">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-lg bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
