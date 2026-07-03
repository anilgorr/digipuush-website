import { Marquee } from "@/components/ui/Marquee";
import { platforms } from "@/lib/social";

export function PlatformCloud({
  heading = "Optimizing your brand for every answer engine",
}: {
  heading?: string;
}) {
  return (
    <section className="border-y border-line bg-mist py-12">
      <p className="mx-auto max-w-6xl px-6 text-center text-xs font-semibold uppercase tracking-wide text-slate">
        {heading}
      </p>
      <div className="relative mt-6">
        <Marquee pauseOnHover className="[--duration:32s]">
          {platforms.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap text-lg font-bold tracking-tight text-navy/70 transition hover:text-orange"
            >
              {name}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mist to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mist to-transparent" />
      </div>
    </section>
  );
}
