"use client";

import { useEffect } from "react";

export function ViewportAnimations() {
  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-section]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-motion-active"));
      return;
    }

    root.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-motion-active", entry.isIntersecting);
        });
      },
      { rootMargin: "120px 0px -8% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}