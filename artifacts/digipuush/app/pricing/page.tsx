import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingTable } from "@/components/PricingTable";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Digipuush pricing: AEO + GEO packages start at ₹25,000/month, and combined SEO + AEO + GEO packages start at ₹40,000/month.",
  alternates: { canonical: "/pricing" },
};

const faqs = [
  {
    question: "What's the difference between the two packages?",
    answer: "The AEO + GEO package focuses purely on AI visibility — content structuring, schema, and citation building. The SEO + AEO + GEO package adds full technical SEO, on-page optimization, and backlink building on top, for businesses that want both Google rankings and AI visibility from one team.",
  },
  {
    question: "Are there setup fees?",
    answer: "Most engagements include an initial audit and setup phase covered within the first month's fee. Larger websites or complex technical migrations may involve a separate one-time setup quote, which we'll always confirm before starting.",
  },
  {
    question: "Can I upgrade from AEO + GEO to the full package later?",
    answer: "Yes — many clients start with AEO + GEO and add full SEO once they see results. We can transition your package at the start of any billing cycle.",
  },
  {
    question: "Do you offer custom packages for larger businesses?",
    answer: "Yes, for larger websites, multiple locations, or e-commerce catalogs, we scope a custom proposal based on your specific needs. Contact us for a tailored quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }]} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">Pricing</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Simple, transparent monthly packages
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate">
          No hidden fees, no long lock-ins. Choose the package that matches whether you need
          AI visibility alone, or AI visibility combined with full technical SEO.
        </p>
        <div className="mt-10">
          <PricingTable />
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <FAQSection faqs={faqs} />
      </section>
      <LeadForm source="Pricing page" />
      <CTABanner />
    </>
  );
}
