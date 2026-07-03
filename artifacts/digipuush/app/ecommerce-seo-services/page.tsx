import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AuthorBox } from "@/components/AuthorBox";
import { LastUpdated } from "@/components/LastUpdated";
import { CTABanner } from "@/components/CTABanner";
import { PlatformCloud } from "@/components/PlatformCloud";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "eCommerce SEO Services | Digipuush",
  description:
    "Digipuush provides eCommerce SEO services covering category and product page optimization, technical SEO, and AI shopping visibility for Indian online stores.",
  alternates: { canonical: "/ecommerce-seo-services" },
};

const faqs = [
  {
    question: "What's different about SEO for e-commerce stores?",
    answer: "E-commerce SEO involves optimizing at scale across category and product pages, managing duplicate content from filters and variants, and handling technical issues like faceted navigation and out-of-stock products, in addition to standard on-page and technical SEO.",
  },
  {
    question: "Do you optimize for AI shopping assistants too?",
    answer: "Yes — as more shopping research shifts to AI assistants like ChatGPT and Gemini, we structure product and category content so it can be accurately extracted and recommended by these tools, alongside traditional Google Shopping and organic visibility.",
  },
  {
    question: "Which e-commerce platforms do you work with?",
    answer: "We work with Shopify, WooCommerce, and custom-built e-commerce platforms, adapting our technical SEO recommendations to each platform's specific constraints.",
  },
];

export default function EcommerceSeoPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "eCommerce SEO Services", href: "/ecommerce-seo-services" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <LastUpdated date="2026-05-30" />
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          eCommerce SEO services
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">
          Digipuush optimizes online stores for both organic search rankings and AI shopping
          visibility — covering category and product page structure, technical SEO at scale,
          and content that AI assistants can confidently recommend.
        </p>

        <div className="prose-digipuush mt-10">
          <h2>What does e-commerce SEO involve?</h2>
          <p>
            E-commerce SEO covers category page optimization, product page content and schema
            markup, technical fixes for faceted navigation and duplicate content, and site
            architecture that helps search engines and AI crawlers understand your catalog.
          </p>
          <h2>How does AI visibility apply to online stores?</h2>
          <p>
            As shoppers increasingly ask AI assistants for product recommendations, structuring
            product data clearly — pricing, specifications, availability — improves the odds
            your products get surfaced in AI-generated shopping answers, an extension of our{" "}
            <a href="/services/geo-services">GEO services</a>.
          </p>
          <h2>What's included in an e-commerce SEO engagement?</h2>
          <p>
            Engagements typically include a technical audit, category and product page
            optimization, structured data implementation, and ongoing content and backlink
            building tailored to your catalog size and competitive category.
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
