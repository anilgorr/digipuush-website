import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  description: string;
  href?: string;
  cta?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  background?: ReactNode;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn("grid w-full auto-rows-[16rem] grid-cols-3 gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  description,
  href,
  cta = "Learn more",
  Icon,
  background,
  className,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white transition hover:shadow-lg hover:shadow-orange-light/10",
        className,
      )}
      {...props}
    >
      {background && <div className="absolute inset-0">{background}</div>}
      <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-8">
        {Icon && (
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <h3 className="text-lg font-bold text-navy">{name}</h3>
        <p className="max-w-xs text-sm leading-relaxed text-slate">{description}</p>
      </div>
      {href && (
        <div className="pointer-events-none absolute bottom-0 z-10 flex w-full translate-y-8 transform-gpu items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={href}
            className="pointer-events-auto inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark"
          >
            {cta}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-mist/30" />
    </div>
  );
}
