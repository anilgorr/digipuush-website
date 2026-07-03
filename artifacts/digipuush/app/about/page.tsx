import type { Metadata } from "next";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Digipuush",
  description:
    "Digipuush is an AI-first digital marketing agency founded by Anil Gorraladaku, based in Bangalore, India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { founder } = siteConfig;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: founder.name,
      jobTitle: "Founder, Digipuush",
      description: founder.bio,
      url: `${siteConfig.url}/about`,
      sameAs: [founder.linkedin],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">About</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          We help brands get found — by people and by AI
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">
          Digipuush is an AI-first digital marketing agency based in Bangalore, India. We help
          brands across the country rank on Google and get cited by ChatGPT, Perplexity,
          Gemini, and Google AI Overviews — treating AI visibility as a core discipline, not an
          afterthought.
        </p>

        <div className="prose-digipuush mt-10">
          <h2>Why did Digipuush start focusing on AI visibility?</h2>
          <p>
            As search behavior shifted toward conversational AI tools, we saw well-ranked
            websites getting completely skipped in AI-generated answers because their content
            wasn&apos;t structured for machine extraction. Digipuush was built to close that gap
            for Indian businesses before it becomes a bigger competitive disadvantage.
          </p>
          <h2>What do we believe about digital marketing in 2026?</h2>
          <p>
            We believe SEO, AEO, and GEO are not separate disciplines competing for budget —
            they&apos;re one strategy built on the same technical foundation: fast, crawlable,
            well-structured, honestly written content.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-mist p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-bold text-white">
            AG
          </div>
          <h2 className="mt-4 text-xl font-bold text-navy">{founder.name}</h2>
          <p className="text-sm font-medium text-orange-dark">{founder.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate">{founder.bio}</p>
          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-dark hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-dark hover:underline"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-dark hover:underline"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
