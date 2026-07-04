import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LastUpdated } from "@/components/LastUpdated";
import { AuthorBox } from "@/components/AuthorBox";
import { FAQSection } from "@/components/FAQSection";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { MDXContent } from "@/components/MDXContent";
import { getCaseStudySlugs, getCaseStudyContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

function getData(slug: string) {
  try {
    return getCaseStudyContent(slug);
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getData(slug);
  if (!data) return {};
  return {
    title: data.frontmatter.title,
    description: data.frontmatter.description,
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getData(slug);
  if (!data) notFound();
  const { frontmatter, content } = data;
  const heading = frontmatter.title.split("|")[0].trim();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: heading,
      description: frontmatter.description,
      datePublished: frontmatter.datePublished,
      dateModified: frontmatter.dateModified,
      author: {
        "@type": "Person",
        name: frontmatter.author,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntityOfPage: `${siteConfig.url}/case-studies/${slug}`,
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: heading, href: `/case-studies/${slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <LastUpdated date={frontmatter.dateModified} />
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-orange-dark">
          {frontmatter.client}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {heading}
        </h1>
        <div className="mt-8">
          <MDXContent source={content} />
        </div>
        <FAQSection faqs={frontmatter.faqs} />
        <div className="mt-16">
          <AuthorBox />
        </div>
      </article>
      <CTABanner />
    </>
  );
}
