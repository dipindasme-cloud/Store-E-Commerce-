"use client";

import { useState, useEffect, useCallback } from "react";
import SlideUpButton from "@/components/ui/SlideUpButton";

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
    href: "/shoes",
    image: "/images/1.jpg",
  },
  {
    title: "Limited Release Collection",
    subtitle: "Fresh drops. Peak performance. Upgrade your rotation.",
    cta: "Explore",
    href: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: "/images/2.jpg",
  },
  {
    title: "Nike-Trail Blazer GTX",
    subtitle: "Conquer any terrain with Gore-Tex protection and rugged grip.",
    cta: "Discover",
    href: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: "/images/3.jpg",
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
    <section className="relative h-[70dvh] w-full overflow-hidden md:h-[80dvh] lg:h-[90dvh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Slide Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Subtle Dark Gradient Overlay for Typography Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />

          {/* Slide Content Layout Frame */}
          <div className="relative flex h-full items-center px-[1.5rem] md:px-[4rem]">
            <div className="mx-auto w-full max-w-[75rem]">
              <div className="max-w-[36rem]">
                <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[3.5rem] md:text-[4.5rem]">
                  {slide.title}
                </h1>
                <p className="mt-[1.25rem] max-w-[28rem] text-[1rem] leading-relaxed text-white/80 sm:text-[1.125rem]">
                  {slide.subtitle}
                </p>
                <div className="mt-[2rem] inline-block md:mt-[2.5rem]">
                  {/* Dynamic SlideUpButton Implementation */}
                  <SlideUpButton 
                    href={slide.href} 
                    text={slide.cta} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Symmetrical Navigation Dots */}
      <div className="absolute bottom-[1.5rem] left-1/2 z-20 flex -translate-x-1/2 gap-[0.5rem] md:bottom-[2rem]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[0.375rem] rounded-full transition-all duration-300 ease-out ${
              index === current
                ? "w-[2rem] bg-white"
                : "w-[0.375rem] bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}