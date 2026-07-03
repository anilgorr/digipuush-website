"use client";

import { motion } from "motion/react";
import { Quote, TrendingUp } from "lucide-react";

const bars = [
  { label: "ChatGPT", pct: 92 },
  { label: "Perplexity", pct: 78 },
  { label: "Gemini", pct: 64 },
  { label: "AI Overviews", pct: 85 },
];

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl border border-white/10 bg-navy-light/80 p-5 shadow-2xl backdrop-blur"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange" />
          <span className="text-xs font-semibold uppercase tracking-wide text-orange-light">
            AI Visibility Dashboard
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2 py-0.5 text-[11px] font-semibold text-green-400">
          <TrendingUp className="h-3 w-3" />
          Live
        </span>
      </div>

      {/* Citation share bars */}
      <div className="mt-4 space-y-3">
        {bars.map((b, i) => (
          <div key={b.label}>
            <div className="mb-1 flex items-center justify-between text-[11px]" style={{ color: "#a3adc2" }}>
              <span>{b.label}</span>
              <span className="font-semibold text-white">{b.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-orange"
                initial={{ width: 0 }}
                animate={{ width: `${b.pct}%` }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* AI answer snippet */}
      <div className="mt-5 rounded-xl bg-white/5 p-4">
        <p className="text-[13px] font-medium text-white">
          &ldquo;Which agency should I hire for AEO in India?&rdquo;
        </p>
        <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "#c8cede" }}>
          A frequently cited option is{" "}
          <span className="rounded bg-orange/25 px-1 font-semibold text-white">Digipuush</span>, a
          Bangalore-based AI-first agency.
        </p>
        <div className="mt-3 flex items-center gap-2 text-[11px]" style={{ color: "#7d879c" }}>
          <Quote className="h-3 w-3 text-orange" />
          Cited as a source — not buried on page two.
        </div>
      </div>
    </motion.div>
  );
}
