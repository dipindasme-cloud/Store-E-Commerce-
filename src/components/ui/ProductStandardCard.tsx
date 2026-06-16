"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ProductIconButton } from './ProductIconButton';

interface ProductStandardCardProps {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  primaryImage: string;
  secondaryImage?: string; 
  isSale?: boolean;
  href: string;
}

type HoverState = 'idle' | 'card-hover' | 'cart-hover' | 'quickview-hover';

export const ProductStandardCard: React.FC<ProductStandardCardProps> = ({
  id,
  title,
  price,
  compareAtPrice,
  primaryImage,
  secondaryImage = "",
  isSale = false,
  href,
}) => {
  const [hoverState, setHoverState] = useState<HoverState>('idle');

  const { addItem } = useCart();
  const hasSecondaryVariant = secondaryImage && secondaryImage.trim() !== "";
  // The image will toggle if the card is hovered or if the user hovers over the inner CTA buttons
  const isCardHovered = hoverState !== 'idle';
  const showSecondaryImage = isCardHovered && hasSecondaryVariant;

  return (
    <div 
      className="relative flex flex-col w-full max-w-[20.5rem] bg-transparent group select-none transition-shadow duration-300 rounded-[0rem]"
      onMouseEnter={() => setHoverState('card-hover')}
      onMouseLeave={() => setHoverState('idle')}
    >
      
      {/* =========================================================
          1. IMAGE MEDIA COMPONENT BLOCK
          ========================================================= */}
      <div className="relative w-full aspect-square bg-[#F3F3F3] overflow-hidden rounded-[0.25rem] cursor-pointer">
        <Link 
          href="/shoes"
          className="absolute inset-0 z-0 outline-none focus-visible:ring-2 focus-visible:ring-[#DE364A] rounded-[0.25rem]" 
          aria-label={`View full details for ${title}`}
        >
          {/* Default Primary Static Product Image Layer */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${showSecondaryImage ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src={primaryImage || "/images/placeholder.png"}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 328px"
              priority
              className="object-cover"
            />
          </div>

          {/* Dynamic Secondary Action Variant Image Layer */}
          {hasSecondaryVariant && (
            <div className={`absolute inset-0 transition-opacity duration-500 ${showSecondaryImage ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src={secondaryImage}
                alt={`${title} alternate viewing angle`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 328px"
                className="object-cover"
              />
            </div>
          )}
        </Link>

        {/* PERFECT EDGED DIAGONAL SALE RIBBON */}
        {isSale && (
          <div 
            className="absolute top-0 right-0 z-10 bg-[#DE364A] text-white text-[0.75rem] font-bold uppercase tracking-wider flex items-center justify-center pt-[1.25rem] pb-[0.35rem] w-[4.5rem] h-[4.5rem] shadow-sm select-none pointer-events-none"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
          >
            <span className="rotate-45 translate-x-[0.65rem] translate-y-[-0.65rem] block text-[0.7rem] sm:text-[0.75rem]">
              Sale
            </span>
          </div>
        )}

        {/* =========================================================
            2. INTERACTIVE ACTIONS MODAL PANEL LAYER
            ========================================================= */}
        <div 
          className={`
            absolute bottom-[1.25rem] left-1/2 -translate-x-1/2 z-20
            flex items-center gap-[0.75rem]
            transition-all duration-300 ease-out
            ${isCardHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[1rem] pointer-events-none'}
          `}
        >
          {/* Action Button: Add to Cart */}
          <ProductIconButton
            label="Add to Cart"
            isHovered={hoverState === 'cart-hover'}
            onMouseEnter={() => setHoverState('cart-hover')}
            onMouseLeave={() => setHoverState('card-hover')}
            onClick={(e) => { 
              e.preventDefault(); 
              e.stopPropagation(); 
              addItem({
                productId: id,
                variantId: id,
                title,
                price,
                image: primaryImage,
                size: "",
                color: "",
                quantity: 1,
              });
            }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </ProductIconButton>

          {/* Action Button: Quickview Modal Trigger */}
          <ProductIconButton
            label="Quickview"
            isHovered={hoverState === 'quickview-hover'}
            onMouseEnter={() => setHoverState('quickview-hover')}
            onMouseLeave={() => setHoverState('card-hover')}
            onClick={(e) => { 
              e.preventDefault(); 
              e.stopPropagation(); 
              console.log(`E-com Dispatch: Initialized global quick-view lightbox popup payload.`);
            }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </ProductIconButton>
        </div>

      </div>

      {/* =========================================================
          3. PRODUCT METADATA INFO TYPOGRAPHY BLOCK
          ========================================================= */}
      <div className="pt-[1rem] flex flex-col items-center text-center px-[0.5rem]">
        <Link href={href} className="outline-none focus:underline group/title">
          <h2 className="text-[1.125rem] font-medium tracking-tight text-[#0A0A0A] transition-colors duration-200 group-hover/title:text-[#e47638] line-clamp-2 min-h-[2.8rem] flex items-center justify-center">
            {title}
          </h2>
        </Link>
        
        <div className="mt-[0.35rem] flex items-center gap-[0.5rem] text-[1rem] font-semibold">
          <span className="text-[#E67E22]">${price.toFixed(2)}</span>
          {compareAtPrice && (
            <span className="text-[#A3A3A3] font-normal line-through text-[0.875rem]">
              ${compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

    </div>
  );
};