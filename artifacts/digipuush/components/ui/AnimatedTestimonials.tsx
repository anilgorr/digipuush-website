"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(false);
  const [canAutoplay, setCanAutoplay] = useState(false);

  const next = useCallback(
    () => setActive((p) => (p + 1) % testimonials.length),
    [testimonials.length],
  );
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !autoplay) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        setCanAutoplay(entry.isIntersecting && document.visibilityState === "visible");
      },
      { rootMargin: "120px 0px", threshold: 0.15 },
    );
    const onVisibilityChange = () =>
      setCanAutoplay(inViewRef.current && document.visibilityState === "visible");
    observer.observe(node);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [autoplay]);

  useEffect(() => {
    if (!canAutoplay) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [canAutoplay, next]);

  if (!testimonials.length) return null;
  const current = testimonials[active];

  return (
    <div ref={containerRef} className="mx-auto max-w-3xl">
      <Quote className="mx-auto h-9 w-9 text-orange" />
      <div className="relative mt-6 min-h-[11rem]">
        <blockquote
          key={`quote-${active}`}
          className="testimonial-enter text-center text-xl font-medium leading-relaxed text-navy sm:text-2xl"
        >
          &ldquo;{current.quote}&rdquo;
        </blockquote>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-orange hover:text-orange"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div key={`author-${active}`} className="testimonial-enter min-w-[12rem] text-center">
          <div className="font-bold text-navy">{current.name}</div>
          <div className="text-sm text-slate">{current.role}</div>
        </div>

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
