import { cn } from "@/lib/utils";

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
}) {
  const format = (n: number) =>
    prefix +
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(n.toFixed(decimalPlaces))) +
    suffix;

  return (
    <span
      className={cn("inline-block tabular-nums", className)}
      data-direction={direction}
      data-delay={delay}
    >
      {format(value)}
    </span>
  );
}
