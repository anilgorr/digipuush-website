import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { getAllCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Digipuush has helped Indian businesses grow organic traffic and AI citations through AEO, GEO, and SEO.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }]} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">Case Studies</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Real results from AEO, GEO, and SEO campaigns
        </h1>
        <div className="mt-10 space-y-6">
          {caseStudies.map((cs) => {
            const heading = cs.frontmatter.title.split("|")[0].trim();
            return (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block rounded-2xl border border-line bg-white p-8 transition hover:border-orange"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-dark">
                  {cs.frontmatter.client}
                </p>
                <h2 className="mt-2 flex items-start justify-between gap-4 text-xl font-bold text-navy group-hover:text-orange-dark">
                  {heading}
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate transition group-hover:text-orange" />
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">{cs.frontmatter.summary}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-orange-dark">
                  Read the case study →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
