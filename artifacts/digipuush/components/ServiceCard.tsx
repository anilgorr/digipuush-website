import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-line bg-white p-6 transition hover:border-orange hover:shadow-lg hover:shadow-orange-light/10"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-navy">{title}</h3>
        <ArrowUpRight className="h-4.5 w-4.5 shrink-0 text-slate transition group-hover:text-orange" />
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-slate">{description}</p>
    </Link>
  );
}
