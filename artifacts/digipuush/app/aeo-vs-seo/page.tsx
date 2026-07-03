import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQSection } from "@/components/FAQSection";
import { AuthorBox } from "@/components/AuthorBox";
import { LastUpdated } from "@/components/LastUpdated";
import { CTABanner } from "@/components/CTABanner";
import { PlatformCloud } from "@/components/PlatformCloud";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "AEO vs SEO: What's the Difference?",
  description:
    "A clear, side-by-side comparison of Answer Engine Optimization (AEO) and traditional SEO — what each optimizes for, and why you likely need both.",
  alternates: { canonical: "/aeo-vs-seo" },
};

const rows = [
  { label: "Primary goal", left: "Rank in the search results list", right: "Be cited as the direct answer" },
  { label: "Where it shows up", left: "Google, Bing search results pages", right: "ChatGPT, Perplexity, Gemini, AI Overviews" },
  { label: "Content format", left: "Keyword-optimized long-form pages", right: "Direct-answer openers, FAQs, structured facts" },
  { label: "Schema markup required", left: false, right: true },
  { label: "Backlinks matter", left: true, right: "Less critical" },
  { label: "Measured by", left: "Rankings, organic traffic", right: "AI citation rate, share of voice" },
];

const faqs = [
  {
    question: "Do I need AEO if I already do SEO?",
    answer: "Yes — SEO and AEO share a technical foundation but optimize for different outcomes. Strong SEO alone doesn't guarantee your content gets cited inside an AI-generated answer, since that depends on structure and clarity AEO specifically addresses.",
  },
  {
    question: "Can a page rank well on Google but never get cited by AI?",
    answer: "Yes, this is common. A page can rank well due to backlinks and domain authority while lacking the direct-answer structure, FAQ schema, or factual clarity that AI systems need to extract and cite it confidently.",
  },
  {
    question: "Which should I invest in first, SEO or AEO?",
    answer: "If you have no existing SEO foundation, start there — AEO builds on the same crawlable, well-structured pages. If your SEO is already solid, layering in AEO is usually the faster win for additional visibility.",
  },
];

export default function AeoVsSeoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "AEO vs SEO", href: "/aeo-vs-seo" }]} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <LastUpdated date="2026-06-15" />
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          AEO vs SEO: what&apos;s the difference?
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">
          SEO optimizes your pages to rank in the list of search results; AEO optimizes your
          content to be quoted directly, with attribution, inside an AI-generated answer from
          ChatGPT, Perplexity, or Google AI Overviews. Most businesses need both, run together.
        </p>

        <div className="mt-10">
          <ComparisonTable leftLabel="Traditional SEO" rightLabel="AEO" rows={rows} />
        </div>

        <div className="prose-digipuush mt-10">
          <h2>How do SEO and AEO work together?</h2>
          <p>
            Both disciplines depend on the same fundamentals — fast, crawlable, well-structured
            pages with clear authority signals. AEO adds specific requirements on top: direct-answer
            openers in the first 40-60 words, FAQ sections mapped to real questions, and schema
            markup that makes facts machine-readable. Running them together, as Digipuush does
            under our <a href="/services/ai-seo">AI SEO</a> service, avoids duplicated content work.
          </p>
          <h2>Which one should you prioritize?</h2>
          <p>
            If your website already ranks reasonably well on Google, AEO is usually the faster
            path to additional visibility since the technical foundation is already there. If
            you&apos;re starting from scratch, build SEO fundamentals first, then layer in AEO.
          </p>
        </div>

        <FAQSection faqs={faqs} />
        <div className="mt-16">
          <AuthorBox />
        </div>
      </article>
      <PlatformCloud />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
