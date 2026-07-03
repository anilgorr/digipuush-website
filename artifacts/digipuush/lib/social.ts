export const platforms = [
  "ChatGPT",
  "Perplexity",
  "Gemini",
  "Google AI Overviews",
  "Claude",
  "Microsoft Copilot",
  "Google Search",
  "Bing",
];

export const statCounters = [
  { value: 40, prefix: "", suffix: "+", label: "AI citations landed for a single client" },
  { value: 3, prefix: "", suffix: "x", label: "Organic revenue growth in 8 months" },
  { value: 62, prefix: "", suffix: "%", label: "Average lift in organic signup traffic" },
  { value: 10, prefix: "", suffix: "+", label: "Years in Indian digital marketing" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Within a few months we went from being invisible in ChatGPT to being named as a recommended option. Digipuush understood AI answer engines in a way no other agency we spoke to did.",
    name: "Founder",
    role: "B2B SaaS · Bangalore",
  },
  {
    quote:
      "They rebuilt our category and product pages around how AI actually reads content. Our organic revenue tripled and we now show up in Perplexity answers for our key buying questions.",
    name: "Growth Lead",
    role: "D2C E-commerce · Mumbai",
  },
  {
    quote:
      "The AI Visibility Audit alone was worth it — it showed exactly where we were being skipped. The monthly reporting makes it easy to see citations and rankings both moving up.",
    name: "Marketing Head",
    role: "Fintech · Bengaluru",
  },
  {
    quote:
      "What sets Digipuush apart is that SEO, AEO, and GEO are treated as one strategy. We rank on Google and get quoted by AI at the same time, instead of paying two vendors.",
    name: "Co-founder",
    role: "Healthtech · Hyderabad",
  },
];
