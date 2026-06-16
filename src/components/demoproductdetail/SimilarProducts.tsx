"use client";

import React, { useRef } from "react";
// Linking directly to the real data source file matrix
import { products } from "@/data/products";
import { ProductStandardCard } from "@/components/ui/ProductStandardCard";

export const SimilarProducts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Skip the first 4 products (0, 1, 2, 3) and take from index 4 (p5) to index 12 (p12)
  const trendingProducts = products.slice(4, 12);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const offset = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden border-b border-[color:var(--color-border)]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Architecture & Controls Wrapper */}
        <header className="flex items-end justify-between mb-8">
          <div>
            
            <h3 className="text-[length:var(--text-h3)] font-bold tracking-tight text-black sm:text-3xl">
            Similar Products
            </h3>
          </div>
          
          {/* Accessible Auto-Layout Navigation Controls */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll("left")}
              aria-label="Scroll trending deck items left"
              className="w-10 h-10 border border-[color:var(--color-border)] rounded-full flex items-center justify-center text-lg hover:bg-black hover:text-white transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black"
            >
              ←
            </button>
            <button 
              onClick={() => scroll("right")}
              aria-label="Scroll trending deck items right"
              className="w-10 h-10 border border-[color:var(--color-border)] rounded-full flex items-center justify-center text-lg hover:bg-black hover:text-white transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black"
            >
              →
            </button>
          </div>
        </header>

        {/* Horizontal Touch Scroll Overlay Strip */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {trendingProducts.map((product) => {
            // Normalizing attributes safely for the ProductStandardCard props
            const cardProps = {
              id: product.id,
              title: product.title,
              price: product.price,
              compareAtPrice: product.compareAtPrice ?? undefined,
              primaryImage: product.images[0]?.src || "/images/placeholder-a.jpg",
              secondaryImage: product.images[1]?.src || product.images[0]?.src || "/images/placeholder-b.jpg",
              isSale: product.badges.includes("sale"),
              href: `/products/${product.handle}`
            };

            return (
              <div 
                key={product.id} 
                className="min-w-[16.5rem] sm:min-w-[19.5rem] max-w-[20.5rem] flex-shrink-0 snap-start"
              >
                <ProductStandardCard {...cardProps} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};