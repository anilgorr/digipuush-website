import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LastUpdated } from "@/components/LastUpdated";
import { AuthorBox } from "@/components/AuthorBox";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { MDXContent } from "@/components/MDXContent";
import { getBlogSlugs, getBlogContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

function getData(slug: string) {
  try {
    return getBlogContent(slug);
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
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getData(slug);
  if (!data) notFound();
  const { frontmatter, content } = data;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: frontmatter.title,
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
      mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: frontmatter.title, href: `/blog/${slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <LastUpdated date={frontmatter.dateModified} />
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {frontmatter.title}
        </h1>
        <div className="mt-8">
          <MDXContent source={content} />
        </div>
        {frontmatter.faqs && <FAQSection faqs={frontmatter.faqs} />}
        <div className="mt-16">
          <AuthorBox />
        </div>
      </article>
    </>
  );
}
