"use client";

import React, { useRef } from "react";
import Container from "@/components/ui/Container";
import { CategoryCard } from "../ui/CategoryCard";

interface CarouselItem {
  href: string;
  imgSrc: string;
  label: string;
}

export default function ProductHero() {
  // Corrected: Placed unique image URLs into 'imgSrc' and set semantic internal path routes for 'href'
  const products: CarouselItem[] = [
    { href: "/collections/monk-strap", label: "Monk Strap", imgSrc: "https://images.unsplash.com/photo-1651255122187-d49ae6f41736?q=80&w=765&auto=format&fit=crop" },
    { href: "/collections/mules", label: "Mules", imgSrc: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=687&auto=format&fit=crop" },
    { href: "/collections/clogs", label: "Clogs", imgSrc: "https://images.unsplash.com/photo-1619646176605-b7417fb53b1e?q=80&w=687&auto=format&fit=crop" },
    { href: "/collections/platform", label: "Platform", imgSrc: "https://images.unsplash.com/photo-1659785568869-aa061a0f8e87?q=80&w=880&auto=format&fit=crop" },
    { href: "/collections/chelsea", label: "Chelsea", imgSrc: "https://images.unsplash.com/photo-1602596532816-a5a81fd92c84?q=80&w=737&auto=format&fit=crop" },
    { href: "/collections/hiking", label: "Hiking", imgSrc: "https://images.unsplash.com/photo-1656335219028-dcd6c0759162?q=80&w=694&auto=format&fit=crop" },
    { href: "/collections/golf", label: "Golf", imgSrc: "https://images.unsplash.com/photo-1710553455491-482fa1751dc4?q=80&w=600&auto=format&fit=crop" },
    { href: "/collections/sandals", label: "Sandals", imgSrc: "https://images.unsplash.com/photo-1547586877-0351a7143cbe?w=600&auto=format&fit=crop" },
    { href: "/collections/flip-flops", label: "Flip-Flops", imgSrc: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop" },
    { href: "/collections/slippers", label: "Slippers", imgSrc: "https://images.unsplash.com/photo-1704900264036-26bb66daa464?w=600&auto=format&fit=crop" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const gap = 20; 
    const containerWidth = container.clientWidth;
    
    let cardsVisible = 1;
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 640 && window.innerWidth < 768) cardsVisible = 2;
      if (window.innerWidth >= 768) cardsVisible = 4;
    }

    const totalGapsWidth = gap * (cardsVisible - 1);
    const estimatedCardWidth = (containerWidth - totalGapsWidth) / cardsVisible;
    const moveAmount = estimatedCardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -moveAmount : moveAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white overflow-hidden py-12 md:py-20 border-b border-[color:var(--color-border)]">
      <Container>
        {/* Section Header */}
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <span className="text-[0.75rem] font-bold uppercase tracking-widest text-neutral-500 block mb-2">
            Categories
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Shop By Style
          </h2>
        </header>

        {/* Carousel Framework */}
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-[0.625rem]">
          
          {/* Desktop Left Button */}
          <button
            type="button"
            onClick={() => handleNavClick("left")}
            aria-label="Scroll left"
            className="relative z-30 hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-50 active:scale-95 custom-touch-target"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>

          {/* Scrollable Viewport Wrapper */}
          <div className="min-w-0 flex-1 overflow-hidden relative z-10">
            <div
              ref={scrollRef}
              className="no-scrollbar flex overflow-x-auto gap-5 scroll-smooth snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {products.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-3.75rem)/4)]"
                >
                  <CategoryCard
                    href={item.href}
                    imgSrc={item.imgSrc}
                    label={item.label}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Right Button */}
          <button
            type="button"
            onClick={() => handleNavClick("right")}
            aria-label="Scroll right"
            className="relative z-30 hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-50 active:scale-95 custom-touch-target"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center justify-center gap-4 md:hidden relative z-30">
            <button
              type="button"
              onClick={() => handleNavClick("left")}
              aria-label="Scroll left mobile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("right")}
              aria-label="Scroll right mobile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>

        </div>
      </Container>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </section>
  );
}