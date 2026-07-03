"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/social";

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((p) => (p + 1) % testimonials.length),
    [testimonials.length],
  );
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [autoplay, next]);

  if (!testimonials.length) return null;
  const current = testimonials[active];

  return (
    <div className="mx-auto max-w-3xl">
      <Quote className="mx-auto h-9 w-9 text-orange" />
      <div className="relative mt-6 min-h-[11rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-center text-xl font-medium leading-relaxed text-navy sm:text-2xl"
          >
            &ldquo;{current.quote}&rdquo;
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-orange hover:text-orange"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="min-w-[12rem] text-center"
          >
            <div className="font-bold text-navy">{current.name}</div>
            <div className="text-sm text-slate">{current.role}</div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-orange hover:text-orange"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-orange" : "w-2 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
