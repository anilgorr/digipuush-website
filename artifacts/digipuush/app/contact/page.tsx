import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Digipuush",
  description:
    "Get in touch with Digipuush for a free AI visibility audit covering Google search and AI answer engines like ChatGPT and Perplexity.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">Contact</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">
              Let&apos;s talk about your AI visibility
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-slate">
              Tell us about your business and goals. We&apos;ll follow up with a free audit of
              your current visibility across Google and AI answer engines.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <a href={siteConfig.contact.phoneHref} className="text-navy hover:text-orange-dark">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-navy hover:text-orange-dark break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span className="text-navy">{siteConfig.contact.address.full}</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-white p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
