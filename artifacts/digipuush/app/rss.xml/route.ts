import { getAllBlogPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = getAllBlogPosts()
    .map(
      ({ slug, frontmatter }) => `
    <item>
      <title>${escapeXml(frontmatter.title)}</title>
      <link>${siteConfig.url}/blog/${slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${slug}</guid>
      <description>${escapeXml(frontmatter.description)}</description>
      <pubDate>${new Date(frontmatter.datePublished).toUTCString()}</pubDate>
    </item>`,
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Digipuush — AEO, GEO &amp; SEO</title>
    <link>${siteConfig.url}/blog</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-IN</language>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}