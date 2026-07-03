"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/digipuush-logo-orange.png"
            alt="Digipuush"
            width={150}
            height={55}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-navy hover:text-orange-dark">
              Services
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="grid grid-cols-1 gap-1 rounded-xl border border-line bg-white p-2 shadow-xl">
                  {siteConfig.nav.services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm text-slate hover:bg-mist hover:text-navy"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {siteConfig.nav.primary
            .filter((item) => item.label !== "Services")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy hover:text-orange-dark"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
          >
            Get a Free AI Visibility Audit
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <p className="px-1 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-slate">
              Services
            </p>
            {siteConfig.nav.services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm text-navy hover:bg-mist"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-line" />
            {siteConfig.nav.primary
              .filter((item) => item.label !== "Services")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-2 text-sm text-navy hover:bg-mist"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-orange px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free AI Visibility Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
