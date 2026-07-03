import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { siteConfig } from "@/lib/site";

export type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-mist">
      <JsonLd data={jsonLd} />
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-6 py-3 text-sm text-slate">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-line">/</span>}
            {i === items.length - 1 ? (
              <span className="font-medium text-navy">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-orange-dark">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
