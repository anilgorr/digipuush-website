import Link from "next/link";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function PricingTable() {
  const plans = [siteConfig.pricing.aeoGeo, siteConfig.pricing.seoAeoGeo];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-2xl border p-8 ${
            "highlighted" in plan && plan.highlighted
              ? "border-orange bg-navy text-white"
              : "border-line bg-white"
          }`}
        >
          <h3
            className={`text-lg font-bold ${
              "highlighted" in plan && plan.highlighted ? "text-white" : "text-navy"
            }`}
          >
            {plan.name}
          </h3>
          <p
            className={`mt-2 text-sm ${
              "highlighted" in plan && plan.highlighted ? "" : "text-slate"
            }`}
            style={"highlighted" in plan && plan.highlighted ? { color: "#a3adc2" } : undefined}
          >
            {plan.description}
          </p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold">{plan.price}</span>
            <span
              className={"highlighted" in plan && plan.highlighted ? "" : "text-slate"}
              style={"highlighted" in plan && plan.highlighted ? { color: "#a3adc2" } : undefined}
            >
              {plan.period}
            </span>
          </div>
          <ul className="mt-6 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span
                  className={"highlighted" in plan && plan.highlighted ? "" : "text-slate"}
                  style={"highlighted" in plan && plan.highlighted ? { color: "#d3d9e6" } : undefined}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
              "highlighted" in plan && plan.highlighted
                ? "bg-orange text-white hover:bg-orange-dark"
                : "bg-navy text-white hover:bg-navy-light"
            }`}
          >
            Talk to us
          </Link>
        </div>
      ))}
    </div>
  );
}
