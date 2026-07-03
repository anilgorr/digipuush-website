import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQSection } from "@/components/FAQSection";
import { AuthorBox } from "@/components/AuthorBox";
import { LastUpdated } from "@/components/LastUpdated";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "GEO vs SEO: What's the Difference?",
  description:
    "A clear comparison of Generative Engine Optimization (GEO) and traditional SEO — what each optimizes for, and how they work together.",
  alternates: { canonical: "/geo-vs-seo" },
};

const rows = [
  { label: "Primary goal", left: "Rank in the search results list", right: "Be accurately represented in AI summaries" },
  { label: "Where it shows up", left: "Google, Bing search results pages", right: "ChatGPT, Gemini, Claude, Perplexity outputs" },
  { label: "Content format", left: "Keyword-optimized long-form pages", right: "Fact-dense, structured, comparison-ready content" },
  { label: "Schema markup required", left: false, right: true },
  { label: "Off-site signals matter", left: "Backlinks", right: "Consistent brand mentions and reviews" },
  { label: "Measured by", left: "Rankings, organic traffic", right: "Brand mention accuracy, share of voice" },
];

const faqs = [
  {
    question: "Is GEO the same thing as AEO?",
    answer: "They overlap heavily. AEO focuses on being cited as the direct answer to a specific question, while GEO is the broader discipline of ensuring generative AI systems accurately represent and reference your brand across any type of output, including comparisons and summaries.",
  },
  {
    question: "Does GEO require different content than SEO?",
    answer: "GEO builds on SEO-friendly content but adds explicit, fact-dense structuring — comparison tables, clear service descriptions, and schema markup — so generative models can parse and cite your brand's information accurately.",
  },
  {
    question: "How do I know if GEO is working?",
    answer: "Track how often and how accurately your brand appears when you ask ChatGPT, Gemini, or Perplexity questions relevant to your industry. Digipuush provides this as a monthly AI visibility report for GEO clients.",
  },
];

export default function GeoVsSeoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GEO vs SEO", href: "/geo-vs-seo" }]} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <LastUpdated date="2026-06-15" />
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          GEO vs SEO: what&apos;s the difference?
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">
          SEO optimizes for ranking in search results; GEO optimizes for how generative AI
          systems like ChatGPT, Gemini, and Perplexity summarize, represent, and cite your
          brand when answering broader questions in your category.
        </p>

        <div className="mt-10">
          <ComparisonTable leftLabel="Traditional SEO" rightLabel="GEO" rows={rows} />
        </div>

        <div className="prose-digipuush mt-10">
          <h2>Why does GEO matter beyond direct-answer queries?</h2>
          <p>
            GEO covers a wider range of AI outputs than AEO — not just direct question-answer
            pairs, but comparisons, recommendations, and summaries where your brand may or may
            not get mentioned at all. This makes it especially important for competitive categories.
          </p>
          <h2>Should I run GEO alongside SEO?</h2>
          <p>
            Yes. GEO depends on the same crawlable, well-structured website that good SEO
            requires, then adds fact-dense content and schema markup on top. See our{" "}
            <a href="/services/geo-services">GEO services</a> for what a full engagement includes.
          </p>
        </div>

        <FAQSection faqs={faqs} />
        <div className="mt-16">
          <AuthorBox />
        </div>
      </article>
      <CTABanner />
    </>
  );
}
