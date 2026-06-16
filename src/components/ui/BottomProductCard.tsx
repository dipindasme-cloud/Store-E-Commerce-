"use client";

import React from 'react';
import Image from 'next/image';
import type { Product } from "@/types/products";

interface BottomProductCardProps {
  product: Product;
  onOpenQuickView: (product: Product) => void;
}

export const BottomProductCard: React.FC<BottomProductCardProps> = ({
  product,
  onOpenQuickView,
}) => {
  // Gracefully fallback on image or formatting structures
  const displayImage = product.images[0]?.src ?? "";
  const displayPrice = `$${product.price}`;

  return (
    <article className="flex w-full items-center bg-transparent">
      
      {/* Left Column: Triggers the Modal State instead of navigating page links */}
      <button 
        onClick={() => onOpenQuickView(product)}
        className="group/image relative block aspect-square h-[9.375rem] w-[9.375rem] min-w-[9.375rem] max-w-[9.375rem] overflow-hidden bg-[#eaeaea] text-left focus-ring-custom"
        aria-label={`Open interactive quick view overlay details for ${product.title}`}
      >
        <Image
          src={displayImage}
          alt={product.title}
          fill
          sizes="9.375rem"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0,0,0.3,1)] group-hover/image:scale-105"
          priority={false}
        />
      </button>

      {/* Right Column: Dynamic Text Elements */}
      <div className="flex flex-1 flex-col gap-[0.5rem] pl-[1.5rem] pr-[0.5rem] justify-center">
        <button 
          onClick={() => onOpenQuickView(product)} 
          className="group/title text-left focus:outline-hidden inline-block"
        >
          <h3 className="text-[1rem] font-semibold tracking-tight text-[#000000] transition-colors duration-300 ease-in-out group-hover/title:text-[#e47638] leading-tight">
            {product.title}
          </h3>
        </button>

        {/* Dynamic Price Info */}
        <div className="flex items-baseline gap-[0.75rem] font-medium text-[#333]">
          <span className="text-[1rem]">
            {displayPrice}
          </span>
        </div>
      </div>

    </article>
  );
};