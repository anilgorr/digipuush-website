import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="text-lg font-extrabold tracking-tight">
              Digi<span className="text-orange">puush</span>
            </span>
            <p className="mt-3 max-w-xs text-sm" style={{ color: "#a3adc2" }}>
              The AI-first digital marketing agency helping Indian brands get found on Google
              and cited by AI.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-orange-light" style={{ color: "#a3adc2" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-orange-light" style={{ color: "#a3adc2" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold text-white">Local Pages</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerLocationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-orange-light" style={{ color: "#a3adc2" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: "#a3adc2" }}>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <a href={siteConfig.contact.phoneHref} className="hover:text-orange-light">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-orange-light break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row" style={{ borderColor: "#1c2740", color: "#7d879c" }}>
          <p>&copy; {new Date().getFullYear()} Digipuush. All rights reserved.</p>
          <p>Bangalore, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
