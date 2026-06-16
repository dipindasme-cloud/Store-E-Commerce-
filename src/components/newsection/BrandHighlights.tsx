"use client";

import React from "react";
import Link from "next/link";

const BRANDS = [
  { name: "Nike", label: "Air Max & Zoom Tracks", href: "/brands/nike" },
  { name: "Adidas", label: "Ultraboost & Originals", href: "/brands/adidas" },
  { name: "Puma", label: "Nitro Speed & Classics", href: "/brands/puma" },
  { name: "New Balance", label: "990 Heritage & FuelCell", href: "/brands/new-balance" }
];

export const BrandHighlights: React.FC = () => {
  return (
    <section className="section bg-white border-t border-[color:var(--color-border)]">
      <div className="container-custom">
        <div className="text-center max-w-[28rem] mx-auto mb-12">
          <span className="text-caption font-bold uppercase text-[color:var(--color-muted-foreground)] tracking-widest block">
            Partner Ecologies
          </span>
          <h2 className="text-[length:var(--text-h2)] font-bold tracking-tight text-black mt-1">
            Brand Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRANDS.map((brand) => (
            <Link 
              key={brand.name}
              href={brand.href}
              className="group flex flex-col items-center justify-center text-center p-8 border border-[color:var(--color-border)] rounded-sm bg-white hover:border-black transition-all duration-300 focus-visible:ring-2 focus-visible:ring-black outline-none"
            >
              <h3 className="text-[1.5rem] font-black tracking-tighter text-neutral-300 group-hover:text-black transition-colors duration-300 uppercase">
                {brand.name}
              </h3>
              <span className="text-[0.75rem] text-[color:var(--color-muted-foreground)] font-medium mt-1 tracking-tight">
                {brand.label}
              </span>
              <span className="text-[0.6875rem] text-black font-bold uppercase tracking-wider opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 mt-4">
                Shop Collection →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};