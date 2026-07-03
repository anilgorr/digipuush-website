import { JsonLd } from "./JsonLd";
import type { Faq } from "@/lib/content";

export function FAQSection({ faqs }: { faqs: Faq[] }) {
  if (!faqs || faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="mt-16">
      <JsonLd data={jsonLd} />
      <h2 className="text-2xl font-bold tracking-tight text-navy">
        Frequently asked questions
      </h2>
      <div className="mt-6 divide-y divide-line rounded-2xl border border-line">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-5 open:bg-mist">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-navy">
              {faq.question}
              <span className="shrink-0 text-orange transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
