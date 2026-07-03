import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Digipuush has helped Indian businesses grow organic traffic and AI citations through AEO, GEO, and SEO.",
  alternates: { canonical: "/case-studies" },
};

const caseStudies = [
  {
    title: "B2B SaaS platform: from zero to 40+ AI citations in 5 months",
    client: "SaaS company, Bangalore",
    summary:
      "A project management SaaS company had strong Google rankings but almost no presence in ChatGPT or Perplexity answers. We restructured their comparison and feature pages, added FAQ schema, and built citation-worthy content around buyer questions.",
    results: ["40+ tracked AI citations across ChatGPT and Perplexity", "62% increase in organic signup traffic", "5-month engagement"],
  },
  {
    title: "D2C e-commerce brand: 3x organic revenue in 8 months",
    client: "D2C brand, Mumbai",
    summary:
      "An e-commerce brand selling home goods needed better category page structure and technical SEO to compete with larger marketplaces. We rebuilt their category architecture and optimized product schema at scale.",
    results: ["3x organic revenue growth", "180% increase in indexed product pages ranking on page one", "8-month engagement"],
  },
  {
    title: "Professional services firm: local + AI visibility in Bangalore",
    client: "Legal services firm, Bangalore",
    summary:
      "A Bangalore-based legal services firm needed to dominate local search while also becoming the cited source when people asked AI assistants legal questions relevant to their practice areas.",
    results: ["Top 3 local pack rankings for 12 priority terms", "Regular citations in ChatGPT for practice-area questions", "6-month engagement"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }]} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">Case Studies</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Real results from AEO, GEO, and SEO campaigns
        </h1>
        <div className="mt-10 space-y-6">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="rounded-2xl border border-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-dark">
                {cs.client}
              </p>
              <h2 className="mt-2 text-xl font-bold text-navy">{cs.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{cs.summary}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                {cs.results.map((result) => (
                  <li key={result} className="flex items-start gap-2 text-sm text-navy">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
