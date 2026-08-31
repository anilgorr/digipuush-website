export type ArticleHeading = {
  label: string;
  id: string;
};

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getArticleHeadings(source: string): ArticleHeading[] {
  return source
    .split("\n")
    .map((line) => line.match(/^##\s+(.+)$/)?.[1]?.trim())
    .filter((label): label is string => Boolean(label))
    .map((label) => ({ label, id: slugifyHeading(label) }));
}

export function ArticleTools({
  takeaways,
  headings,
}: {
  takeaways: string;
  headings: ArticleHeading[];
}) {
  return (
    <div className="not-prose mb-10 space-y-5">
      <aside className="rounded-2xl border border-orange/25 bg-orange/5 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-dark">
          Key takeaways
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-navy">{takeaways}</p>
      </aside>
      {headings.length > 0 && (
        <nav aria-label="On this page" className="rounded-2xl border border-line bg-mist p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-dark">
            On this page
          </p>
          <ol className="mt-3 grid gap-2 text-sm text-slate sm:grid-cols-2">
            {headings.map((heading, index) => (
              <li key={heading.id}>
                <a className="hover:text-orange-dark hover:underline" href={`#${heading.id}`}>
                  <span className="mr-2 text-xs text-orange-dark">{index + 1}.</span>
                  {heading.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
}