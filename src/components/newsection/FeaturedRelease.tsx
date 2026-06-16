"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const FeaturedReleaseFluid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[color:var(--color-border)]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Visual Container with Responsive Aspect Ratios */}
          <div className="group relative w-full aspect-square lg:aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=765&auto=format&fit=crop"
              alt="Air Max Apex Premium Release Variant Showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center block transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Copywritten/Metadata Information Layer */}
          <div className="flex flex-col items-start">
            <span className="text-[0.75rem] uppercase font-bold tracking-widest text-[color:var(--color-highlights)] mb-3">
              Featured Drop
            </span>
            <h2 className="text-[length:var(--text-h1)] font-bold tracking-tight text-black mb-4 sm:text-4xl">
              Air Max Apex Pro
            </h2>
            <p className="text-[length:var(--text-body-lg)] text-[color:var(--color-muted-foreground)] leading-relaxed mb-6 max-w-xl">
              Engineed with advanced dual-density cushioning and a raw structured ripstop matrix mesh upper. This hyper-limited silhouette delivers unparalleled performance output balanced alongside progressive industrial streetwear aesthetic codes.
            </p>
            <div className="text-[1.25rem] font-bold text-black mb-6">
              $180.00
            </div>
            <Link
              href="/products/air-max-apex-pro"
              className="inline-flex h-[3rem] px-8 items-center justify-center bg-black text-white font-medium text-[0.875rem] tracking-wide hover:bg-white hover:text-black border border-black transition-colors duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-md"
            >
              Explore Release
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};