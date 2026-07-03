import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
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

export default function HomePage() {
  const slugs = getServiceSlugs();
  const featured = ["aeo-services", "geo-services", "ai-seo", "seo"].filter((s) =>
    slugs.includes(s),
  );
  const services = featured.map((slug) => ({ slug, ...getServiceContent(slug) }));

  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange-light">
            <Sparkles className="h-3.5 w-3.5" />
            AI-first digital marketing, built in Bangalore
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rank on Google. <span className="text-orange">Get cited by AI.</span>
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
        </div>
      </section>

      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs font-medium uppercase tracking-wide text-slate">
          Optimizing for Google Search &middot; Google AI Overviews &middot; ChatGPT &middot; Perplexity &middot; Gemini
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          Core services
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Everything you need to be found — by people and by AI
        </h2>
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
        <div className="mt-6 text-center">
          <Link href="/services" className="text-sm font-semibold text-orange-dark hover:underline">
            View all services &rarr;
          </Link>
        </div>
      </section>

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
                <Check className="h-5 w-5 text-orange" />
                <h3 className="mt-3 text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">Pricing</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Simple, transparent monthly packages
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[siteConfig.pricing.aeoGeo, siteConfig.pricing.seoAeoGeo].map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-line bg-white p-8">
              <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-navy">{plan.price}</span>
                <span className="text-slate">{plan.period}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/pricing" className="text-sm font-semibold text-orange-dark hover:underline">
            See full pricing details &rarr;
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <FAQSection faqs={homeFaqs} />
      </section>

      <CTABanner />
    </>
  );
}
