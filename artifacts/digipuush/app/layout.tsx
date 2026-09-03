import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    images: [
      {
        url: "/opengraph.jpg",
        width: 1024,
        height: 576,
        alt: "Digipuush — rank on Google and get cited by AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI-First Digital Marketing Agency in India`,
    description: siteConfig.description,
    images: ["/opengraph.jpg"],
  },
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      logo: `${siteConfig.url}/logo/digipuush-logo-orange.png`,
      image: `${siteConfig.url}/opengraph.jpg`,
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.founder.linkedin,
        siteConfig.founder.instagram,
      ],
      founder: {
        "@id": `${siteConfig.url}/#anil-gorraladaku`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      logo: `${siteConfig.url}/logo/digipuush-logo-orange.png`,
      image: `${siteConfig.url}/opengraph.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address.street,
        addressLocality: siteConfig.contact.address.locality,
        addressRegion: siteConfig.contact.address.region,
        postalCode: siteConfig.contact.address.postalCode,
        addressCountry: "IN",
      },
      founder: {
        "@id": `${siteConfig.url}/#anil-gorraladaku`,
      },
      parentOrganization: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: "IN",
      priceRange: "₹₹",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: siteConfig.rating.value,
        reviewCount: siteConfig.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteConfig.url}/#anil-gorraladaku`,
      name: siteConfig.founder.name,
      jobTitle: "Founder, Digipuush",
      description: siteConfig.founder.bio,
      url: `${siteConfig.url}/about`,
      sameAs: [siteConfig.founder.linkedin, siteConfig.founder.instagram],
      worksFor: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ];

  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="font-sans antialiased">
        <JsonLd data={jsonLd} />
        <Script id="openai-pixel" strategy="beforeInteractive">
          {`!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"Qhwd1PzLMuQTtYxexmy3qA",debug:false});`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
