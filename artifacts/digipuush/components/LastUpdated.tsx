function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-slate">
      Last updated: <time dateTime={date}>{formatDate(date)}</time>
    </p>
  );
}
