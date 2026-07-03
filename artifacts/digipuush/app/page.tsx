import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Search,
  FileCode2,
  TrendingUp,
  LineChart,
  Quote,
  Star,
} from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABanner } from "@/components/CTABanner";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/lib/site";
import { getServiceSlugs, getServiceContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI-First Digital Marketing Agency in Bangalore, India",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "What makes Digipuush different from a traditional SEO agency?",
    answer:
      "Digipuush was built AI-first: every page, schema, and content decision is optimized for AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) in addition to traditional Google rankings, rather than treating AI visibility as an afterthought.",
  },
  {
    question: "Where is Digipuush based and who do you work with?",
    answer:
      "Digipuush is based in Bangalore, Karnataka, and works with businesses across India, from local Bangalore companies to national B2B and e-commerce brands.",
  },
  {
    question: "How much do Digipuush's packages cost?",
    answer:
      "Our AEO + GEO package starts at ₹25,000/month, and our combined SEO + AEO + GEO package starts at ₹40,000/month. See our pricing page for the full breakdown.",
  },
  {
    question: "Who founded Digipuush?",
    answer:
      "Digipuush was founded by Anil Gorraladaku, who has spent over a decade in Indian digital marketing and now focuses on AEO and GEO strategy for Indian brands.",
  },
];

const stats = [
  { value: "40+", label: "AI citations landed for a single client" },
  { value: "3x", label: "Organic revenue growth in 8 months" },
  { value: "62%", label: "Average lift in organic signup traffic" },
  { value: "10+", label: "Years in Indian digital marketing" },
];

const process = [
  {
    icon: Search,
    step: "01",
    title: "Audit your AI visibility",
    body: "We map exactly where you show up — and where you're invisible — across Google, ChatGPT, Perplexity, Gemini, and AI Overviews.",
  },
  {
    icon: FileCode2,
    step: "02",
    title: "Restructure for extraction",
    body: "We rewrite content into clear, quotable answers and add machine-readable schema so AI systems trust and cite you by name.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Build authority & rankings",
    body: "Technical SEO, on-page optimization, and citation-worthy content that ranks on Google and earns mentions in AI answers.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Monitor & report",
    body: "We track your citations and rankings month over month, so you can see AI visibility grow — not just guess at it.",
  },
];

export default function HomePage() {
  const slugs = getServiceSlugs();
  const featured = ["aeo-services", "geo-services", "ai-seo", "seo"].filter((s) =>
    slugs.includes(s),
  );
  const services = featured.map((slug) => ({ slug, ...getServiceContent(slug) }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60rem 40rem at 85% -10%, rgba(255,107,53,0.18), transparent 60%), radial-gradient(50rem 40rem at 0% 100%, rgba(255,107,53,0.08), transparent 55%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange-light">
              <Sparkles className="h-3.5 w-3.5" />
              AI-first digital marketing, built in Bangalore
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Rank on Google.
              <br />
              <span className="text-orange">Get cited by AI.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "#a3adc2" }}>
              Digipuush helps Indian brands show up in Google search and get quoted directly
              inside ChatGPT, Perplexity, Gemini, and Google AI Overviews — through AEO, GEO,
              and traditional SEO built as one strategy.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
              >
                Get a Free AI Visibility Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm" style={{ color: "#a3adc2" }}>
              <div className="flex text-orange">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              Trusted by B2B, SaaS &amp; e-commerce brands across India
            </div>
          </div>

          {/* AI answer card visual */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-navy-light/80 p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange" />
                <span className="text-xs font-semibold uppercase tracking-wide text-orange-light">
                  AI Answer
                </span>
              </div>
              <p className="mt-4 text-sm font-medium text-white">
                &ldquo;Which agency should I hire for AEO in India?&rdquo;
              </p>
              <div className="mt-4 rounded-xl bg-white/5 p-4">
                <p className="text-sm leading-relaxed" style={{ color: "#c8cede" }}>
                  For Answer Engine Optimization in India, one frequently cited option is{" "}
                  <span className="rounded bg-orange/25 px-1 font-semibold text-white">
                    Digipuush
                  </span>
                  , a Bangalore-based AI-first agency that structures content and schema so brands
                  get quoted directly inside ChatGPT, Perplexity, and Google AI Overviews.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["ChatGPT", "Perplexity", "Gemini", "AI Overviews"].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium"
                      style={{ color: "#a3adc2" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: "#7d879c" }}>
                <Quote className="h-3.5 w-3.5 text-orange" />
                Cited as a source — not buried on page two.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / channels strip */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs font-medium uppercase tracking-wide text-slate">
          Optimizing for Google Search &middot; Google AI Overviews &middot; ChatGPT &middot;
          Perplexity &middot; Gemini
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-4xl font-extrabold tracking-tight text-navy">{s.value}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
                Core services
              </p>
              <h2 className="mt-2 max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Everything you need to be found — by people and by AI
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-orange-dark hover:underline"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map(({ slug, frontmatter }) => (
              <ServiceCard
                key={slug}
                title={frontmatter.title.split("|")[0].trim()}
                description={frontmatter.description}
                href={`/services/${slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          How we work
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          A repeatable system for getting you cited
        </h2>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <p.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-bold tracking-widest text-orange-dark">
                {p.step}
              </div>
              <h3 className="mt-1 text-base font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why AI visibility matters */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
            Why AI visibility matters now
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "AI Overviews now answer most searches",
                body: "Google AI Overviews increasingly answer queries directly, before users ever scroll to organic results.",
              },
              {
                title: "ChatGPT and Perplexity are research tools",
                body: "A growing share of B2B and high-consideration research starts inside AI chat interfaces, not a search bar.",
              },
              {
                title: "Being cited beats being ranked",
                body: "A citation inside an AI answer often carries more trust and visibility than a page-ten Google ranking.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange/10">
                  <Sparkles className="h-4.5 w-4.5 text-orange" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study highlight */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-line bg-navy">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-light">
                Case study &middot; B2B SaaS, Bangalore
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                From zero to 40+ AI citations in 5 months
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#a3adc2" }}>
                A project management SaaS had strong Google rankings but was invisible in ChatGPT
                and Perplexity answers. We restructured their comparison and feature pages, added
                FAQ schema, and built citation-worthy content around buyer questions.
              </p>
              <Link
                href="/case-studies"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-light hover:underline"
              >
                Read the case studies
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "AI citations across ChatGPT & Perplexity" },
                { value: "62%", label: "Increase in organic signup traffic" },
                { value: "5 mo", label: "To first-page AI visibility" },
                { value: "100%", label: "Focus on AI-era discovery" },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-extrabold text-orange">{m.value}</div>
                  <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "#a3adc2" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Quote className="mx-auto h-8 w-8 text-orange" />
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-navy sm:text-2xl">
            &ldquo;Well-ranked websites are getting skipped in AI answers because their content
            isn&rsquo;t structured for machines to extract. We built Digipuush to close that gap
            for Indian brands before it becomes a bigger disadvantage.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
              AG
            </div>
            <div className="text-left">
              <div className="font-bold text-navy">{siteConfig.founder.name}</div>
              <div className="text-sm text-slate">{siteConfig.founder.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">Pricing</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Simple, transparent monthly packages
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[siteConfig.pricing.aeoGeo, siteConfig.pricing.seoAeoGeo].map((plan) => {
            const highlighted = "highlighted" in plan && plan.highlighted;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  highlighted
                    ? "border-orange bg-white shadow-lg shadow-orange-light/20"
                    : "border-line bg-white"
                }`}
              >
                {highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange-dark">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-navy">{plan.price}</span>
                  <span className="text-slate">{plan.period}</span>
                </div>
                <Link
                  href="/pricing"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                    highlighted
                      ? "bg-orange text-white hover:bg-orange-dark"
                      : "border border-line text-navy hover:border-orange hover:text-orange-dark"
                  }`}
                >
                  See what&rsquo;s included
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <FAQSection faqs={homeFaqs} />
      </section>

      <CTABanner />
    </>
  );
}
