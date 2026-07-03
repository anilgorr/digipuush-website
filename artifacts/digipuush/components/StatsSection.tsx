import { NumberTicker } from "@/components/ui/NumberTicker";
import { statCounters } from "@/lib/social";

export function StatsSection({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statCounters.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-4xl font-extrabold tracking-tight text-navy">
                <NumberTicker value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
