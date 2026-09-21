import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

const reportPath = "/research/ai-search-readiness-benchmark-2026";
const reportUrl = `${siteConfig.url}${reportPath}`;
const publicationDate = "2026-09-21";

const categoryScores = [
  { name: "Accounting & ERP Software", score: 47.5 },
  { name: "Logistics & Fulfilment Software", score: 40.0 },
  { name: "HRMS & Payroll Software", score: 39.8 },
  { name: "Customer Support / Helpdesk Software", score: 31.8 },
  { name: "CRM Software", score: 30.5 },
];

const dimensions = [
  ["Entity Clarity", "How clearly the website explains who the company is and what it does."],
  ["Product & Service Clarity", "How explicitly products, services and capabilities are described."],
  ["Target Audience Clarity", "Whether industries, roles, company types and use cases are clearly identified."],
  ["Answer-Ready Content", "Whether the site provides direct, concise answers to buyer questions."],
  ["FAQ Coverage", "The depth and usefulness of question-and-answer content."],
  ["Original Data & Research", "Presence of first-party studies, benchmarks, surveys or proprietary data."],
  ["Citation Quality", "Use of authoritative external sources within substantive informational content."],
  ["Author & Expert Signals", "Clear authorship, expert attribution, biographies and relevant credentials."],
  ["First-Party Proof", "Case studies, customer evidence and measurable outcomes."],
  ["Comparison & Alternative Content", "Useful buyer-oriented comparison, alternative and selection content."],
  ["Topical Depth", "Breadth and depth of meaningful coverage around the company's primary category."],
  ["Internal Linking", "Contextual connections between informational, research and commercial content."],
  ["Structured Extractability", "Clear headings, concise explanations, lists, tables and structured sections."],
  ["Entity Consistency", "Consistency in company, product and positioning information throughout the site."],
  ["Content Freshness", "Evidence that substantive content and information are actively maintained."],
];

const limitations = [
  "The benchmark evaluates publicly accessible website characteristics only.",
  "It does not measure actual ranking or recommendation frequency within ChatGPT, Gemini, Perplexity, Google AI Mode or other AI platforms.",
  "Search results and websites change over time.",
  "Crawl coverage can vary between websites.",
  "The study covers a defined 50-company B2B technology sample and is not representative of every company in India.",
  "Readiness criteria involve structured evaluation and quality judgments despite predefined scoring rules and QA controls.",
  "Results describe the research period and should not be treated as permanent company ratings.",
];

export const metadata: Metadata = {
  title: { absolute: "AI Search Readiness Benchmark 2026 | Digipuush Research" },
  description:
    "Digipuush analyzed 50 Google-visible B2B websites across 15 AI search readiness factors. 78% scored Weak or Very Weak in the 2026 benchmark.",
  alternates: { canonical: reportPath },
  openGraph: {
    type: "article",
    title: "78% of B2B Websites Analyzed Show Weak AI Search Readiness",
    description:
      "Digipuush analyzed 50 Google-visible B2B websites across 15 AI Search Readiness dimensions. Explore the 2026 benchmark.",
    url: reportPath,
    images: [{ url: `${reportPath}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "78% of B2B Websites Analyzed Show Weak AI Search Readiness",
    description:
      "Digipuush analyzed 50 Google-visible B2B websites across 15 AI Search Readiness dimensions.",
    images: [`${reportPath}/opengraph-image`],
  },
};

function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-line py-14 sm:py-16 ${className}`}>
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h2>
      <div className="mt-6 space-y-5 text-[1.02rem] leading-8 text-slate">{children}</div>
    </section>
  );
}

export default function BenchmarkPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Report",
      headline: "Digipuush AI Search Readiness Benchmark 2026",
      description:
        "An aggregate benchmark of 50 Google-visible B2B websites across 15 AI Search Readiness dimensions.",
      datePublished: publicationDate,
      dateModified: publicationDate,
      author: {
        "@type": "Person",
        "@id": `${siteConfig.url}/#anil-gorraladaku`,
        name: siteConfig.founder.name,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntityOfPage: reportUrl,
      image: `${reportUrl}/opengraph-image`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Digipuush AI Search Readiness Benchmark 2026",
      description:
        "Aggregate AI Search Readiness findings from 50 B2B technology websites evaluated across 15 dimensions.",
      creator: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
      },
      url: reportUrl,
      temporalCoverage: "2026",
      spatialCoverage: { "@type": "Place", name: "India" },
      keywords: [
        "AI Search Readiness",
        "Answer Engine Optimization",
        "AEO",
        "AI search",
        "AI visibility",
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "AI Search Readiness Benchmark 2026", href: reportPath },
        ]}
      />

      <header className="bg-navy">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-light">
            Original Research · 2026
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Digipuush AI Search Readiness Benchmark 2026
          </h1>
          <h2 className="mt-8 max-w-4xl text-2xl font-bold leading-tight text-orange sm:text-4xl">
            78% of B2B websites analyzed showed Weak or Very Weak AI Search Readiness
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed" style={{ color: "#b7bfce" }}>
            Digipuush analyzed 50 Google-visible B2B companies across five technology categories
            to assess how effectively their websites support AI discovery, extraction,
            understanding and citation.
          </p>
          <p className="mt-5 text-sm" style={{ color: "#8e98aa" }}>
            Published September 21, 2026 · Research conducted: September 2026 · Aggregate findings only
          </p>
        </div>
      </header>

      <div>
        <section aria-labelledby="benchmark-overview" className="border-b border-line bg-mist">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 id="benchmark-overview" className="sr-only">
              Benchmark overview
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["50", "B2B websites analyzed"],
                ["5", "Technology categories"],
                ["15", "AI Search Readiness dimensions"],
                ["37.9", "Average readiness score / 100"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-line bg-white p-6">
                  <div className="text-4xl font-extrabold tracking-tight text-orange">{value}</div>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-navy">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate">
              Source: Digipuush AI Search Readiness Benchmark 2026
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6">
          <Section id="executive-summary" title="Executive Summary">
            <p>
              The Digipuush AI Search Readiness Benchmark 2026 examines whether websites already
              visible in traditional Google Search are also structured in ways that make their
              information easier for AI-driven answer systems to discover, interpret, extract and
              attribute.
            </p>
            <p>
              Across the 50 websites analyzed, 39 — or 78% — were classified as Weak or Very Weak
              under the benchmark&apos;s predefined readiness framework. The average AI Search
              Readiness Score was 37.9 out of 100, with a median of 40.9.
            </p>
            <p>
              The results suggest that conventional search visibility and readiness for
              answer-engine retrieval should be evaluated as related but distinct areas of search
              strategy.
            </p>
          </Section>

          <Section id="key-findings" title="Key Findings">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["78%", "Weak or Very Weak", "39 of the 50 websites analyzed fell into the Weak or Very Weak readiness classifications."],
                ["37.9 / 100", "Average readiness score", "The mean AI Search Readiness Score across the benchmark."],
                ["40.9 / 100", "Median readiness score", "Half of the analyzed websites scored below approximately this level and half above."],
                ["0", "Strong or Very Strong", "None of the 50 websites reached the benchmark's Strong or Very Strong classification threshold in this publication snapshot."],
              ].map(([value, label, copy]) => (
                <div key={label} className="rounded-2xl border border-line bg-mist p-6">
                  <div className="text-3xl font-extrabold text-orange-dark">{value}</div>
                  <h3 className="mt-2 text-lg font-bold text-navy">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{copy}</p>
                </div>
              ))}
            </div>
            <p className="rounded-xl border-l-4 border-orange bg-orange/5 px-5 py-4 text-sm font-medium text-navy">
              These results describe this defined 50-company sample and should not be generalized
              to all businesses or websites.
            </p>
          </Section>

          <Section id="distribution" title="Readiness Distribution">
            <p>
              Under the Digipuush readiness framework, 78% of the defined sample fell into the
              combined Weak or Very Weak classifications.
            </p>
            <div
              role="img"
              aria-label="Weak and Very Weak classifications account for 78 percent; other classifications account for 22 percent."
              className="overflow-hidden rounded-full border border-line bg-white"
            >
              <div className="flex h-12 w-full text-sm font-bold text-white">
                <div className="flex items-center justify-center bg-orange" style={{ width: "78%" }}>
                  78%
                </div>
                <div className="flex items-center justify-center bg-navy" style={{ width: "22%" }}>
                  22%
                </div>
              </div>
            </div>
            <dl className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-line p-4">
                <dt className="font-semibold text-navy">Weak + Very Weak</dt>
                <dd className="mt-1 text-2xl font-extrabold text-orange-dark">78%</dd>
              </div>
              <div className="rounded-xl border border-line p-4">
                <dt className="font-semibold text-navy">Other classifications</dt>
                <dd className="mt-1 text-2xl font-extrabold text-navy">22%</dd>
              </div>
            </dl>
          </Section>

          <Section id="category-comparison" title="AI Search Readiness by Category">
            <p>
              The benchmark covered five B2B software and technology categories. Average readiness
              varied substantially across the sectors analyzed.
            </p>
            <div className="space-y-4" aria-label="Category average readiness scores">
              {categoryScores.map((category) => (
                <div key={category.name}>
                  <div className="mb-1.5 flex items-center justify-between gap-4 text-sm">
                    <span className="font-semibold text-navy">{category.name}</span>
                    <span className="tabular-nums text-slate">{category.score.toFixed(1)}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-mist">
                    <div
                      className="h-full rounded-full bg-orange"
                      style={{ width: `${category.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                <caption className="sr-only">Average AI Search Readiness Score by category</caption>
                <thead className="bg-mist text-navy">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">Category</th>
                    <th scope="col" className="px-5 py-3 text-right font-semibold">Average Score</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryScores.map((category) => (
                    <tr key={category.name} className="border-t border-line">
                      <td className="px-5 py-3 text-slate">{category.name}</td>
                      <td className="px-5 py-3 text-right font-semibold tabular-nums text-navy">
                        {category.score.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="meaning" title="What Does AI Search Readiness Mean?">
            <p>
              AI Search Readiness describes how clearly a website presents the entities, facts,
              answers, evidence and structure that automated search and answer systems can retrieve
              and interpret.
            </p>
            <p>
              It is not the same as an AI-platform ranking. The benchmark evaluates the website
              itself rather than measuring whether a company is recommended by a particular AI
              assistant.
            </p>
            <h3 className="pt-3 text-lg font-bold text-navy">The benchmark evaluates signals such as:</h3>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {dimensions.map(([name]) => (
                <li key={name} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="dimensions" title="The 15 AI Search Readiness Dimensions">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dimensions.map(([name, description], index) => (
                <div key={name} className="rounded-2xl border border-line bg-white p-5">
                  <div className="text-xs font-bold tracking-widest text-orange-dark">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-base font-bold leading-snug text-navy">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="google-visibility"
            title="Google Visibility and AI Search Readiness Are Different Measurements"
          >
            <p>
              Companies included in the benchmark were identified through predefined commercial
              Google searches. The subsequent readiness analysis examined different website
              characteristics: how clearly company information, answers, expertise, evidence and
              content structure could be extracted and understood.
            </p>
            <p>
              A strong traditional search presence should therefore not be interpreted as
              automatically producing a strong AI Search Readiness Score, and the benchmark does
              not claim that one directly causes the other.
            </p>
          </Section>

          <Section id="aeo-implications" title="What This Means for Answer Engine Optimization">
            <p>
              The benchmark highlights why Answer Engine Optimization (AEO) involves more than
              adding schema markup or publishing FAQs. Websites need clear entities, extractable
              answers, supporting evidence, first-party expertise and consistent information if
              they want their content to be easier for answer systems to interpret and attribute.
            </p>
            <p>
              Digipuush provides{" "}
              <Link href="/services/aeo-services" className="font-semibold text-orange-dark underline underline-offset-4">
                AEO services in India
              </Link>{" "}
              for companies that want to improve these signals across their websites and content
              programs.
            </p>
            <Link
              href="/services/aeo-services"
              className="inline-flex items-center gap-2 font-semibold text-orange-dark hover:underline"
            >
              Explore Digipuush AEO Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Section>

          <Section id="methodology" title="Methodology">
            <p>
              <strong className="text-navy">Research conducted:</strong> September 2026.
            </p>
            <div>
              <h3 className="text-lg font-bold text-navy">Company Selection</h3>
              <p className="mt-2">
                Digipuush analyzed 50 B2B companies across five software and business-technology
                categories: CRM, HRMS and payroll, accounting and ERP, customer support and
                helpdesk, and logistics and fulfilment. Companies were identified using predefined
                commercial Google searches targeted to India and selected according to the
                benchmark&apos;s documented organic-visibility methodology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">Website Collection</h3>
              <p className="mt-2">
                Publicly accessible website pages were collected and classified into relevant page
                types including company, product, solution, informational, research, case-study,
                FAQ and comparison content. Low-value and non-substantive pages were excluded from
                readiness evidence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">Scoring</h3>
              <p className="mt-2">
                Each company was evaluated across 15 predefined readiness dimensions. Each
                dimension used a 0–4 evidence-based scale, with higher scores requiring stronger
                and more consistently demonstrated evidence across relevant website content. The
                15 dimension scores were converted into a 100-point AI Search Readiness Score.
              </p>
              <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    AI Search Readiness Score classification thresholds
                  </caption>
                  <thead className="bg-mist text-navy">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">Score</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Classification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["80–100", "Very Strong"],
                      ["65–79.9", "Strong"],
                      ["50–64.9", "Moderate"],
                      ["35–49.9", "Weak"],
                      ["Below 35", "Very Weak"],
                    ].map(([score, classification]) => (
                      <tr key={score} className="border-t border-line">
                        <td className="px-5 py-3 font-semibold tabular-nums text-navy">{score}</td>
                        <td className="px-5 py-3 text-slate">{classification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5">
                The headline 78% figure represents the 39 websites whose final scores fell below
                50, placing them in the Weak or Very Weak classifications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">Quality Controls</h3>
              <p className="mt-2">
                The methodology includes crawl-coverage validation, evidence requirements and
                manual quality-assurance review for incomplete or ambiguous observations.
              </p>
            </div>
            <div className="rounded-2xl border border-orange/30 bg-orange/5 p-5">
              <h3 className="font-bold text-navy">Publication snapshot</h3>
              <p className="mt-2 text-sm leading-7">
                The figures on this page reflect the aggregate benchmark dataset selected for the
                initial 2026 publication. Company-level quality assurance may continue after
                publication without altering the aggregate snapshot quoted in this report unless
                Digipuush publishes a clearly dated revision.
              </p>
            </div>
          </Section>

          <Section id="limitations" title="Important Limitations">
            <div className="rounded-2xl border border-orange/30 bg-orange/5 p-6">
              <ul className="space-y-3">
                {limitations.map((limitation) => (
                  <li key={limitation} className="flex items-start gap-3">
                    <Info className="mt-1 h-4 w-4 shrink-0 text-orange-dark" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="about-research" title="About the Research">
            <AuthorBox />
          </Section>

          <Section id="about-digipuush" title="About Digipuush">
            <p>
              Digipuush is an AI-first digital marketing agency based in Bangalore, India,
              specializing in{" "}
              <Link href="/services/aeo-services" className="font-semibold text-orange-dark underline underline-offset-4">
                Answer Engine Optimization
              </Link>
              , Generative Engine Optimization, AI SEO and traditional search strategy.
            </p>
          </Section>
        </article>

        <section className="bg-navy">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Is Your Website Ready for AI Search?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed" style={{ color: "#a3adc2" }}>
              See how your website performs across the same types of signals examined in the
              Digipuush AI Search Readiness Benchmark.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-dark"
              >
                Get a Free AI Visibility Audit
              </Link>
              <Link
                href="/services/aeo-services"
                className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore AEO Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}