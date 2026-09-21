import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Digipuush Research | AI Search, AEO & AI Visibility Studies" },
  description:
    "Original Digipuush research on AI search, Answer Engine Optimization, AI visibility and how brands are preparing for answer-engine discovery.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Digipuush Research | AI Search, AEO & AI Visibility Studies",
    description:
      "Original Digipuush research on AI search, Answer Engine Optimization, AI visibility and how brands are preparing for answer-engine discovery.",
    url: "/research",
  },
};

export default function ResearchPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
        ]}
      />

      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
            Original Research
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Digipuush Research
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-navy">
            Original research on how search is changing in the age of AI.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
            Digipuush publishes independent research on Answer Engine Optimization, AI search
            readiness, AI visibility and the way websites are adapting for answer engines.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
              Latest study
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Research reports
            </h2>
          </div>
          <span className="text-sm text-slate">1 study</span>
        </div>

        <article className="group overflow-hidden rounded-3xl border border-line bg-white transition hover:border-orange/40 hover:shadow-xl hover:shadow-orange-light/10">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex min-h-64 items-center justify-center bg-navy p-8">
              <div className="text-center">
                <BarChart3 className="mx-auto h-10 w-10 text-orange" />
                <div className="mt-5 text-6xl font-extrabold text-orange">78%</div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-orange-light">
                  Weak or Very Weak
                </p>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
                Original Research · 2026
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                DigiPuush AI Search Readiness Benchmark 2026
              </h3>
              <p className="mt-4 font-semibold text-navy">
                50 B2B websites. 5 categories. 15 readiness factors.
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate">
                78% of the websites analyzed were classified as Weak or Very Weak for AI Search
                Readiness under the DigiPuush framework.
              </p>
              <Link
                href="/research/ai-search-readiness-benchmark-2026"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-orange-dark hover:underline"
              >
                Read the Benchmark
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}