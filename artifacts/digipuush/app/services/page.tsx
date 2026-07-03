import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABanner } from "@/components/CTABanner";
import { getServiceSlugs, getServiceContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Explore Digipuush's full range of digital marketing services: AEO, GEO, AI SEO, traditional SEO, website development, branding, social media, and paid marketing.",
};

export default function ServicesPage() {
  const slugs = getServiceSlugs();
  const services = slugs.map((slug) => {
    const { frontmatter } = getServiceContent(slug);
    return { slug, frontmatter };
  });

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          Services
        </p>
        <h1 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Digital marketing services built for Google and AI search
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate">
          Every service below is built on the same foundation: fast, well-structured, fully
          crawlable pages that work for human visitors, Google&apos;s algorithm, and AI answer
          engines at once.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, frontmatter }) => (
            <ServiceCard
              key={slug}
              title={frontmatter.title.split("|")[0].trim()}
              description={frontmatter.description}
              href={`/services/${slug}`}
            />
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
