import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Search,
  CheckCircle2,
  CalendarCheck,
  LineChart,
  Target
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export const metadata: Metadata = {
  title: "Book an AEO & GEO Strategy Session",
  description:
    "Book an AEO and GEO strategy session with Digipuush founder Anil Gorraladaku to discuss your brand's visibility across ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  alternates: { canonical: "/aeo-geo-consultation" },
};

const calendlyUrl = "https://calendly.com/anilgorraladaku/aeo-geo";

export default function AeoGeoConsultationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy">
        <AuroraBackground />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange-light">
              <Bot className="h-3.5 w-3.5" />
              For brands ready to improve AI visibility
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your buyers are asking AI. <span className="text-orange">Are you the answer?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300" style={{ color: "#a3adc2" }}>
              Traditional SEO remains essential, but AI answer engines evaluate and present
              information differently. AEO and GEO help make your expertise clearer,
              extractable, and easier to attribute across ChatGPT, Perplexity, Gemini, and
              Google AI Overviews.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dark shadow-lg shadow-orange/20"
              >
                Choose a Time on Calendly
                <CalendarCheck className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "#a3adc2" }}>
              <span>Speak directly with the founder</span>
              <span aria-hidden="true" className="hidden text-orange sm:inline">•</span>
              <span>Focused 30-minute session</span>
            </div>
          </div>
          
          {/* Visual Hook */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:p-8">
            <div className="absolute -left-4 -top-4 rounded-xl bg-orange p-3 text-white shadow-xl">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-navy-light p-4 border border-white/5">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2" style={{ color: "#7d879c" }}>User Query</div>
                <div className="text-sm text-white">&quot;What is the best digital marketing agency in Bangalore for B2B?&quot;</div>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-lg relative">
                <div className="absolute left-6 -top-3 w-4 h-4 rotate-45 bg-white border-l border-t border-line hidden" />
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 rounded bg-navy p-1.5 text-white">
                    <SparklesIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Illustrative AI response</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600" style={{ color: "#5b6472" }}>
                      <strong className="text-orange-dark">Digipuush</strong> is an AI-first
                      digital marketing agency in Bangalore offering SEO, AEO, and GEO services
                      for Indian brands.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded bg-mist px-2 py-1 text-xs font-medium text-navy">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Example only
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift Section */}
      <section className="bg-mist border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
                The AI Shift
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Visibility now extends beyond search results.
              </h2>
              <p className="mt-5 text-lg text-slate leading-relaxed">
                Strong Google rankings still matter. AEO and GEO add the clarity, structure,
                and corroboration that can help AI systems understand and cite your brand.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Google AI Overviews can answer queries before traditional results.",
                  "Some high-consideration research now begins in AI assistants.",
                  "Clear, attributable answers create another path to discovery."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <span className="text-navy font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-line bg-white p-8">
                <Search className="h-8 w-8 text-orange-dark mb-5" />
                <h3 className="text-xl font-bold text-navy">Traditional SEO</h3>
                <p className="mt-3 text-slate leading-relaxed">
                  Builds discoverability through technical quality, relevant content, authority,
                  and links. It remains the foundation for search and AI discovery.
                </p>
              </div>
              <div className="rounded-2xl border border-orange bg-white p-8 shadow-lg shadow-orange-light/10">
                <BrainCircuit className="h-8 w-8 text-orange mb-5" />
                <h3 className="text-xl font-bold text-navy">AEO + GEO</h3>
                <p className="mt-3 text-slate leading-relaxed">
                  Adds direct answers, clear entity facts, structured data, and corroboration so
                  AI systems can understand and attribute your expertise accurately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Call & Founder Message */}
      <section id="session" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              What we&apos;ll cover in your 30-minute strategy session
            </h2>
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">Current Visibility Audit</h3>
                  <p className="mt-2 text-slate leading-relaxed">
                    We&apos;ll look at where you currently stand across Google AI Overviews, Perplexity, and ChatGPT for your most important buyer queries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <LineChart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">The Missing Link</h3>
                  <p className="mt-2 text-slate leading-relaxed">
                    Identify exactly why AI isn&apos;t citing you right now—whether it&apos;s a lack of structured data, formatting issues, or citation gaps.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">Actionable Blueprint</h3>
                  <p className="mt-2 text-slate leading-relaxed">
                    Walk away with a clear understanding of how AEO and GEO can be applied to your brand to turn AI tools into your best referral engine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-3xl border border-line bg-mist p-8 sm:p-10 relative">
              <div className="absolute right-8 top-8 opacity-5">
                <SparklesIcon className="h-24 w-24 text-navy" />
              </div>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-sm">
                  <div className="flex h-full w-full items-center justify-center bg-navy text-xl font-bold text-white">
                    AG
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">{siteConfig.founder.name}</h3>
                  <p className="text-sm text-slate">{siteConfig.founder.role}</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg font-medium leading-relaxed text-navy relative z-10">
                &quot;For more than a decade, I&apos;ve helped Indian brands improve their
                visibility in search. Now buyers also ask AI systems for answers and
                recommendations. In this session, we&apos;ll look at what those systems can
                understand about your brand today and where clearer content, structure, and
                authority could help.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Embed Section */}
      <section id="booking" className="bg-navy text-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-28 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Book Your 30-Minute AEO &amp; GEO Strategy Session
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#a3adc2" }}>
            Choose a convenient time to speak directly with Anil Gorraladaku about your
            brand&apos;s AEO and GEO opportunities.
          </p>
          
          <div className="mt-12 overflow-hidden rounded-2xl bg-white p-10 sm:p-14 shadow-2xl relative w-full max-w-2xl mx-auto border border-white/10">
            <div className="flex flex-col items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-orange/10 flex items-center justify-center mb-6">
                <CalendarCheck className="h-10 w-10 text-orange" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Secure your spot</h3>
              <p className="text-slate text-center max-w-md mb-8">
                Skip the back-and-forth and choose an available time directly on Anil&apos;s
                calendar.
              </p>
              
              <a 
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-orange px-8 py-5 text-lg font-bold text-white shadow-xl shadow-orange/30 transition-all hover:scale-105 hover:bg-orange-dark hover:shadow-orange/40 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Available Times
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              
              <p className="mt-8 text-sm font-medium text-slate">
                Calendly will open in a new tab.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
