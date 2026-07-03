import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI-First Digital Marketing Agency in India`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | AI-First Digital Marketing Agency in India`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI-First Digital Marketing Agency in India`,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.contact.address.locality,
        addressRegion: siteConfig.contact.address.region,
        addressCountry: "IN",
      },
      founder: {
        "@type": "Person",
        name: siteConfig.founder.name,
        jobTitle: "Founder",
        url: siteConfig.founder.linkedin,
      },
      areaServed: "IN",
      priceRange: "₹₹",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteConfig.url}/#anil-gorraladaku`,
      name: siteConfig.founder.name,
      jobTitle: "Founder, Digipuush",
      description: siteConfig.founder.bio,
      url: `${siteConfig.url}/about`,
      sameAs: [siteConfig.founder.linkedin],
      worksFor: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ];

  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="font-sans antialiased">
        <JsonLd data={jsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
