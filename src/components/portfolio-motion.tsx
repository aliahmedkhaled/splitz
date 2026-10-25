"use client";

import {useEffect} from "react";

/**
 * Progressive enhancement: the page is visible without JavaScript.
 * We only hide an element when IntersectionObserver is available,
 * motion is allowed, and the element starts below the viewport.
 */
const REVEAL_SELECTOR = [
  ".programs-section .section-heading",
  ".program-grid > .training-card",
  "#platform-preview > .section-container",
  ".how-section .section-heading",
  ".steps-grid > article",
  ".about-panel"
].join(", ");

export default function PortfolioMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    let observer: IntersectionObserver | null = null;

    const showAll = () => {
      for (const target of targets) target.dataset.coachMotion = "visible";
    };

    const setup = () => {
      observer?.disconnect();
      observer = null;

      if (preference.matches || !("IntersectionObserver" in window)) {
        showAll();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            (entry.target as HTMLElement).dataset.coachMotion = "visible";
            observer?.unobserve(entry.target);
          }
        },
        {rootMargin: "0px 0px -6% 0px", threshold: 0.04}
      );

      for (const target of targets) {
        const box = target.getBoundingClientRect();
        // Never hide initially visible content, including on mobile screens.
        if (box.top < window.innerHeight * 0.93 || box.height === 0) {
          target.dataset.coachMotion = "visible";
        } else {
          target.dataset.coachMotion = "pending";
          observer.observe(target);
        }
      }
    };

    setup();
    preference.addEventListener("change", setup);

    return () => {
      preference.removeEventListener("change", setup);
      observer?.disconnect();
      for (const target of targets) delete target.dataset.coachMotion;
    };
  }, []);

  return null;
}
