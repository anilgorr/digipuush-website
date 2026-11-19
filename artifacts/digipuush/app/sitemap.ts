import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  getServiceSlugs,
  getServiceContent,
  getAllBlogPosts,
  getAllCaseStudies,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const newest = (dates: string[]) => dates.sort().at(-1) ?? "2026-08-31";
  const services = getServiceSlugs().map((slug) => getServiceContent(slug).frontmatter);
  const posts = getAllBlogPosts();
  const caseStudies = getAllCaseStudies();

  // lastModified is the date each page's content last changed. Bump it when
  // you edit the page. Never use `new Date()` here: a sitemap where every URL
  // "changed today" on every deploy teaches Google to ignore lastmod entirely.
  const staticRoutes: Array<[route: string, lastModified: string]> = [
    ["", "2026-11-09"],
    ["/services", newest(services.map((s) => s.dateModified))],
    ["/aeo-vs-seo", "2026-11-09"],
    ["/geo-vs-seo", "2026-06-15"],
    ["/seo-company-in-bangalore", "2026-08-31"],
    ["/ecommerce-seo-services", "2026-08-31"],
    ["/aeo-geo-consultation", "2026-09-08"],
    ["/pricing", "2026-11-09"],
    ["/case-studies", newest(caseStudies.map((c) => c.frontmatter.dateModified))],
    ["/research", "2026-10-06"],
    ["/research/ai-search-readiness-benchmark-2026", "2026-10-06"],
    ["/blog", newest(posts.map((p) => p.frontmatter.dateModified))],
    ["/about", "2026-08-31"],
    ["/contact", "2026-08-31"],
  ];

  const staticEntries = staticRoutes.map(([route, lastModified]) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(lastModified),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = getServiceSlugs().map((slug) => {
    const { frontmatter } = getServiceContent(slug);
    return {
      url: `${siteConfig.url}/services/${slug}`,
      lastModified: new Date(frontmatter.dateModified),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    };
  });

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyRoutes = getAllCaseStudies().map((cs) => ({
    url: `${siteConfig.url}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.frontmatter.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceRoutes, ...blogRoutes, ...caseStudyRoutes];
}
