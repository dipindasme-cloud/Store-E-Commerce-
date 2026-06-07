"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type UseInViewOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

export function useStagger(
  count: number,
  { baseDelay = 0, staggerDelay = 0.08, enabled = true } = {}
) {
  return useCallback(
    (index: number) => {
      if (!enabled) return 0;
      return baseDelay + index * staggerDelay;
    },
    [baseDelay, staggerDelay, enabled]
  );
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export const transitions = {
  fast: "duration-200 ease-out",
  base: "duration-300 ease-out",
  slow: "duration-500 ease-out",
  spring: "duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
} as const;

export const easings = {
  out: [0.16, 1, 0.3, 1] as const,
  in: [0.4, 0, 0.6, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
};

export const animationClasses = {
  fadeIn: "opacity-0 animate-fade-in",
  slideUp: "opacity-0 translate-y-5 animate-slide-up",
  slideDown: "opacity-0 -translate-y-3 animate-slide-down",
} as const;

export function staggerDelay(index: number, base = 0.06): string {
  return `${index * base}s`;
}
