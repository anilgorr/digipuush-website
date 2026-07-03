import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AuthorBox } from "@/components/AuthorBox";
import { LastUpdated } from "@/components/LastUpdated";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO Company in Bangalore | Digipuush",
  description:
    "Digipuush is an SEO company in Bangalore helping local and national businesses rank higher on Google and get cited by AI search tools.",
  alternates: { canonical: "/seo-company-in-bangalore" },
};

const faqs = [
  {
    question: "Why choose a Bangalore-based SEO company?",
    answer: "A Bangalore-based SEO company understands the local competitive landscape, customer search behavior, and business ecosystem specific to Karnataka, which improves the accuracy of local SEO and Google Business Profile strategy.",
  },
  {
    question: "Do you only work with Bangalore businesses?",
    answer: "No — while we're headquartered in Bangalore and offer dedicated local SEO expertise for the city, Digipuush works with clients across India for both national and location-specific SEO campaigns.",
  },
  {
    question: "What does local SEO include?",
    answer: "Local SEO includes Google Business Profile optimization, local citation building, location-specific landing pages, and review management, aimed at improving visibility in local map pack and 'near me' search results.",
  },
];

export default function SeoBangalorePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `${siteConfig.name} - SEO Company in Bangalore`,
      url: `${siteConfig.url}/seo-company-in-bangalore`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      areaServed: "Bangalore, Karnataka, India",
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "SEO Company in Bangalore", href: "/seo-company-in-bangalore" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <LastUpdated date="2026-06-05" />
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          SEO company in Bangalore
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">
          Digipuush is an AI-first SEO company based in Bangalore, helping local and national
          businesses rank higher on Google while also getting cited by ChatGPT, Perplexity, and
          Gemini through combined SEO, AEO, and GEO strategy.
        </p>

        <div className="prose-digipuush mt-10">
          <h2>What makes an SEO company effective for Bangalore businesses?</h2>
          <p>
            An effective SEO company for Bangalore businesses combines strong technical SEO
            fundamentals with local search expertise — Google Business Profile optimization,
            location-specific content, and an understanding of how customers in Bangalore search
            for services in your category.
          </p>
          <h2>What SEO services does Digipuush offer in Bangalore?</h2>
          <p>
            We offer full-funnel SEO covering technical audits, on-page optimization, local SEO
            and Google Business Profile management, and backlink building — all built on the
            same foundation as our <a href="/services/aeo-services">AEO</a> and{" "}
            <a href="/services/geo-services">GEO</a> services, so your visibility extends to AI
            answer engines as well as Google.
          </p>
          <h2>How do I get started?</h2>
          <p>
            Contact our Bangalore team for a free audit of your current search and AI visibility,
            and a proposal tailored to your business goals.
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
