"use client";

import React from "react";
// Pointing to your correct data path and importing the raw products array
import { products } from "@/data/products";
import { ProductStandardCard } from "../ui/ProductStandardCard";

export const LatestProductsGrid: React.FC = () => {
  // Take exactly the first 4 products from your 12-item data array
  const displayedProducts = products.slice(0, 4);

  return (
    <section id="latest-drops" className="bg-white py-16 md:py-24 border-b border-[color:var(--color-border)]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Architecture block */}
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <span className="text-[0.75rem] uppercase tracking-widest text-[color:var(--color-muted-foreground)] font-bold block mb-1">
              Curated Performance
            </span>
            <h2 className="text-[length:var(--text-h2)] font-bold tracking-tight text-black sm:text-3xl">
              Latest Products
            </h2>
          </div>
          <div className="text-[0.875rem] font-medium text-[color:var(--color-muted-foreground)]">
            Showing <span className="text-black font-semibold">{displayedProducts.length}</span> New Drops
          </div>
        </header>

        {/* Dynamic Fluid Grid Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-12 w-full">
          {displayedProducts.map((product) => {
            // Safe architecture mapping for ProductStandardCard props
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
              <ProductStandardCard key={product.id} {...cardProps} />
            );
          })}
        </div>
      </div>
    </section>
  );
};