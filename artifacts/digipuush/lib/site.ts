export const siteConfig = {
  name: "Digipuush",
  domain: "digipuush.com",
  url: "https://digipuush.com",
  tagline: "AI-First Digital Marketing Agency in India",
  description:
    "Digipuush is an AI-first digital marketing agency in Bangalore helping brands across India rank on Google and get cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  founder: {
    name: "Anil Gorraladaku",
    role: "Founder, Digipuush",
    bio: "Anil Gorraladaku is the founder of Digipuush, an AI-first digital marketing agency based in Bangalore. He has spent over a decade helping Indian brands grow through search and, more recently, pioneering Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) strategies that get businesses cited by AI systems like ChatGPT, Perplexity, and Google AI Overviews.",
    linkedin: "https://www.linkedin.com/in/anilgorraladaku",
    instagram: "https://www.instagram.com/anil_gorraladaku",
  },
  contact: {
    phone: "+91 9663445445",
    phoneHref: "tel:+919663445445",
    email: "anil.gorraladaku@digipuush.com",
    address: {
      locality: "Bangalore",
      region: "Karnataka",
      country: "India",
      full: "Bangalore, Karnataka, India",
    },
  },
  pricing: {
    aeoGeo: {
      name: "AEO + GEO",
      price: "₹25,000",
      period: "/month",
      description:
        "Content structuring, schema markup, AI citation building, and AI visibility monitoring.",
      features: [
        "Content structuring for AI answer extraction",
        "Schema markup (Organization, FAQPage, Article)",
        "AI citation & mention building across ChatGPT, Perplexity, Gemini",
        "AI visibility monitoring & reporting",
        "FAQ and comparison content development",
        "Monthly AI citation audit",
      ],
    },
    seoAeoGeo: {
      name: "SEO + AEO + GEO",
      price: "₹40,000",
      period: "/month",
      description:
        "Everything in AEO + GEO, plus technical SEO, on-page optimization, and backlink building.",
      features: [
        "Everything in AEO + GEO",
        "Technical SEO audits & fixes",
        "On-page optimization across the site",
        "High-authority backlink building",
        "Keyword research & tracking",
        "Monthly performance reporting",
      ],
      highlighted: true,
    },
  },
  nav: {
    services: [
      { label: "AEO Services", href: "/services/aeo-services" },
      { label: "GEO Services", href: "/services/geo-services" },
      { label: "AI SEO", href: "/services/ai-seo" },
      { label: "Traditional SEO", href: "/services/seo" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Branding & Creative", href: "/services/branding-creative" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Paid Marketing", href: "/services/paid-marketing" },
    ],
    primary: [
      { label: "Services", href: "/services" },
      { label: "AEO vs SEO", href: "/aeo-vs-seo" },
      { label: "Pricing", href: "/pricing" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ],
  },
  footerServiceLinks: [
    { label: "AEO Services", href: "/services/aeo-services" },
    { label: "GEO Services", href: "/services/geo-services" },
    { label: "AI SEO", href: "/services/ai-seo" },
    { label: "Traditional SEO", href: "/services/seo" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Branding & Creative", href: "/services/branding-creative" },
    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    { label: "Paid Marketing", href: "/services/paid-marketing" },
  ],
  footerLocationLinks: [
    { label: "SEO Company in Bangalore", href: "/seo-company-in-bangalore" },
    { label: "eCommerce SEO Services", href: "/ecommerce-seo-services" },
  ],
} as const;
