"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type HeroSlide = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
};

const slides: HeroSlide[] = [
  {
    title: "Air Velocity Runner",
    subtitle: "Engineered for speed. Designed for comfort. Built for you.",
    cta: "Shop Now",
    href: "/products/air-velocity-runner",
    image: "/images/Hero (1).jpg",
  },
  {
    title: "New Arrivals Are Here",
    subtitle: "Fresh drops. Peak performance. Upgrade your rotation.",
    cta: "Explore",
    href: "/collections/new-arrivals",
    image: "/images/Hero (2).jpg",
  },
  {
    title: "Trail Blazer GTX",
    subtitle: "Conquer any terrain with Gore-Tex protection and rugged grip.",
    cta: "Discover",
    href: "/products/trail-blazer-gtx",
    image: "/images/Hero (3).jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[70dvh] overflow-hidden md:h-[80dvh] lg:h-[90dvh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/20" />

          <div className="relative flex h-full items-center">
            <div className="container-custom">
              <div className="max-w-xl">
                <h1 className="text-display-xl font-bold leading-tight tracking-tight text-white">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-md text-body-lg text-white/80 md:mt-6">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.href}
                  className="mt-6 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-body-sm font-medium text-black transition-all duration-300 hover:opacity-80 md:mt-8"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
