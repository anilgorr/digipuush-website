import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const defaultOgImage = {
  url: "/opengraph.jpg",
  width: 1024,
  height: 576,
  alt: "Digipuush — rank on Google and get cited by AI",
};

/**
 * Fill in Open Graph and Twitter tags from a page's own title, description
 * and canonical path.
 *
 * Next.js does not derive og:title / og:description / og:url from the page
 * metadata, and a page-level `openGraph` replaces the root layout's object
 * wholesale. Without this, every page shares the homepage's social card and
 * og:url. Anything the page sets explicitly in `openGraph` / `twitter` wins.
 */
export function withSocial(meta: Metadata): Metadata {
  const rawTitle = meta.title;
  const title =
    typeof rawTitle === "string"
      ? rawTitle
      : rawTitle && "absolute" in rawTitle
        ? rawTitle.absolute
        : undefined;
  const description = meta.description ?? undefined;
  const canonical = meta.alternates?.canonical;
  const url = typeof canonical === "string" ? canonical : undefined;

  return {
    ...meta,
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [defaultOgImage],
      ...meta.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
      ...meta.twitter,
    },
  };
}
