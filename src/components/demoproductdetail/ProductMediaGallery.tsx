"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import type { ProductImage } from "@/types/products";
import ImageZoom from "./ImageZoom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductMediaGalleryProps = {
  images: ProductImage[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
};

export default function ProductMediaGallery({
  images,
  activeIndex,
  onIndexChange,
}: ProductMediaGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle portal mounting safely for SSR / Next.js
  useEffect(() => {
    setMounted(true);
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const prev = () => {
    onIndexChange(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const next = () => {
    onIndexChange(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  if (images.length === 0) {
    return (
      <div className="aspect-[4/3] w-full bg-[#f4f4f4] flex items-center justify-center rounded-[0.5rem]">
        <span className="text-muted-foreground text-[0.875rem]">No images available</span>
      </div>
    );
  }

  const active = images[activeIndex];

  // The Modal rendered via Portal to break out of page positioning contexts
  const modalContent = modalOpen && mounted ? (
    createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-[1rem] sm:p-[2rem] backdrop-blur-sm"
        onClick={() => setModalOpen(false)}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="absolute top-[1rem] right-[1rem] sm:top-[1.5rem] sm:right-[1.5rem] text-white/70 hover:text-white transition focus:outline-none z-50 p-[0.5rem]"
          aria-label="Close gallery overview"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Carousel Navigation Controllers inside Modal */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous view"
          className="absolute left-[0.5rem] sm:left-[1.5rem] top-1/2 -translate-y-1/2 flex h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none z-50"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next view"
          className="absolute right-[0.5rem] sm:right-[1.5rem] top-1/2 -translate-y-1/2 flex h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none z-50"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dynamic Responsive Modal Image Frame */}
        <div 
          className="relative w-full max-w-[90vw] max-h-[80vh] aspect-square md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[40rem] overflow-hidden bg-[#1a1a1a] rounded-[0.5rem] transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={active.src}
            alt={active.alt}
            className="w-full h-full object-contain select-none"
          />
        </div>
      </div>,
      document.body
    )
  ) : null;

  return (
    <div className="w-full flex flex-col gap-[0.5rem]">
      {/* Main Responsive Feature Image Frame */}
      <div className="relative group aspect-square w-full overflow-hidden bg-[#f4f4f4] rounded-[0.5rem]">
        <button
          type="button"
          className="block w-full h-full cursor-zoom-in relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          onClick={() => setModalOpen(true)}
          aria-label="Enlarge product image"
        >
          <ImageZoom src={active.src} alt={active.alt} />
        </button>

        {/* Carousel Navigation Controllers */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-[1rem] top-1/2 -translate-y-1/2 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-white text-foreground shadow-md border border-neutral-100 transition opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-neutral-50 z-10"
            >
              <ChevronLeft size={20} className="stroke-[1.5]" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-[1rem] top-1/2 -translate-y-1/2 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-white text-foreground shadow-md border border-neutral-100 transition opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-neutral-50 z-10"
            >
              <ChevronRight size={20} className="stroke-[1.5]" />
            </button>
          </>
        )}
      </div>

      {/* Seamless Thumbnail Strip Track */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-[0.375rem] w-full">
          {images.map((img, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onIndexChange(idx)}
                aria-current={isActive ? "true" : undefined}
                className={`relative aspect-[4/3] w-full bg-[#f4f4f4] overflow-hidden transition-all duration-200 outline-offset-2 rounded-[0.25rem] ${
                  isActive
                    ? "ring-[1.5px] ring-black ring-offset-0 z-10"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt || `Product thumbnail ${idx + 1}`}
                  className="aspect-[4/3] w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Portal Overlay Output */}
      {modalContent}
    </div>
  );
}