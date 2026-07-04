import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  getServiceSlugs,
  getServiceContent,
  getAllBlogPosts,
  getAllCaseStudies,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/aeo-vs-seo",
    "/geo-vs-seo",
    "/seo-company-in-bangalore",
    "/ecommerce-seo-services",
    "/pricing",
    "/case-studies",
    "/blog",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
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

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseStudyRoutes];
}
