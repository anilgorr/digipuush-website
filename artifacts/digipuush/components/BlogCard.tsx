import Link from "next/link";

export function BlogCard({
  slug,
  title,
  description,
  date,
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-2xl border border-line bg-white p-6 transition hover:border-orange"
    >
      <time dateTime={date} className="text-xs font-medium uppercase tracking-wide text-orange-dark">
        {new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
      </time>
      <h3 className="mt-2 text-base font-bold text-navy group-hover:text-orange-dark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
    </Link>
  );
}
