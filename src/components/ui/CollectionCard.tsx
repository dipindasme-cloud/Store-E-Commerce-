// src/components/ui/CollectionCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useReducedMotion } from "@/lib/animations";
import type { CollectionCardData } from "@/types/collections";

type CollectionCardProps = {
  collection: CollectionCardData;
  priority?: boolean;
};

export default function CollectionCard({
  collection,
  priority = false,
}: CollectionCardProps) {
  const { handle, title, description, image, productCount, accentBgColor, accentTextColor } = collection;
  const shouldReduceMotion = useReducedMotion();

  const textInverseStyle = accentTextColor ? { color: accentTextColor } : {};

  return (
    <Link
      href={`/collections/${handle}`}
      className="group relative flex flex-col w-full overflow-hidden rounded-md border border-neutral-200/50 bg-neutral-50 transition-all focus-ring-custom"
      style={{ 
        backgroundColor: accentBgColor || "var(--color-muted)",
        borderRadius: "var(--radius-md)"
      }}
    >
      {/* Visual Asset Container Box */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-100">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            loading={priority ? "eager" : "lazy"}
            className={`h-full w-full object-cover transition-transform duration-500`}
            style={{
              transform: shouldReduceMotion ? "none" : "scale(1)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            // Tailwind group-hover configuration handled cleanly without inline listeners
            onMouseEnter={(e) => !shouldReduceMotion && (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => !shouldReduceMotion && (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          /* High contrast luxury graphic layout context used for text-only conditions */
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <span className="text-overline font-bold tracking-widest uppercase opacity-20 select-none">
              {title} Catalog
            </span>
          </div>
        )}

        {/* Graduated Linear Contrast Overlay Layer */}
        {image && (
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Structured Text Info Layout Box */}
      <div 
        className={`flex flex-col gap-1.5 p-5 md:p-6 w-full ${
          image ? "absolute bottom-0 left-0 right-0 text-white" : "text-neutral-900"
        }`}
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 
            className="text-h3 font-bold tracking-tight leading-tight"
            style={!image ? textInverseStyle : {}}
          >
            {title}
          </h3>
          <span 
            className={`text-caption tracking-wider shrink-0 px-2.5 py-0.5 rounded-full border ${
              image 
                ? "bg-white/10 border-white/20 text-white/90 backdrop-blur-xs" 
                : "bg-neutral-900/5 border-neutral-900/10 text-neutral-500"
            }`}
          >
            {productCount} {productCount === 1 ? "Item" : "Items"}
          </span>
        </div>

        {description && (
          <p 
            className={`text-body-sm line-clamp-2 max-w-[90%] leading-relaxed ${
              image ? "text-white/80" : "text-neutral-500"
            }`}
            style={(!image && accentTextColor) ? { color: `${accentTextColor}cc` } : {}}
          >
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}