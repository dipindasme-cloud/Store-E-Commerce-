"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Product } from "@/types/products";
import { useCart } from "@/context/CartContext";
import ProductMediaGallery from "@/components/demoproductdetail/ProductMediaGallery";
import ProductInfo from "@/components/demoproductdetail/ProductInfo";
import ShippingInfo from "@/components/demoproductdetail/ShippingInfo";

type ProductDetailsModalProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addItem } = useCart();
  const router = useRouter();

  // Prevent background scrolling while the quick view overlay is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Central Addition Function Logic with Safe Fallbacks
  const executeCartInjection = (quantity: number) => {
    // Attempt to locate variants safely if your product scheme provides them
    const variant = product.variants?.find((v) => v.available) ?? product.variants?.[0];

    const cartPayload = {
      productId: product.id,
      variantId: variant?.id ?? product.id, // Fallback safely to base ID like the reference card
      title: product.title,
      price: product.price,
      image: product.images?.[0]?.src ?? "",
      size: variant?.size ?? "",
      color: variant?.color ?? "",
      quantity,
    };

    addItem(cartPayload);
    return cartPayload;
  };

  // Standard Add to Cart (Keeps customer on the same screen context)
  const handleAddToCart = (quantity: number) => {
    executeCartInjection(quantity);
  };

  // Buy It Now: Adds variant configuration and forces transition to src/app/cart
  const handleBuyNow = (quantity: number) => {
    executeCartInjection(quantity);

    // Reset document overflow layout parameters prior to routing transition
    document.body.style.overflow = "unset";
    
    // Direct routing jump directly to the shopping cart architecture page
    router.push("/cart");
  };

  // Generate dynamic path structure based on standard e-commerce slug mechanics
  const productSlug = product.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "product";
  const fallbackDetailsUrl = `/products/${product.id || productSlug}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-[1rem] sm:p-[2rem] md:p-[2.5rem] animate-fade-in">
      
      {/* Click outside backdrop hook */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Overlay Card Frame - Strict Containment Layout */}
      <div className="relative bg-background w-full max-w-[72rem] max-h-[90vh] md:max-h-[85vh] rounded-lg border border-border shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-y-auto overflow-x-hidden focus-ring-custom flex flex-col">
        
        {/* Absolute Top-Right Close Button */}
        <div className="absolute top-[1.25rem] right-[1.25rem] z-50">
          <button
            onClick={onClose}
            aria-label="Close product quick view"
            className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-background/90 backdrop-blur-xs border border-border shadow-md text-foreground transition-all duration-200 hover:bg-neutral-900 hover:text-white focus-ring-custom"
          >
            <svg className="w-[1.25rem] h-[1.25rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L12 12m0 0l6-6M12 12l6 6M12 12L6 6" />
            </svg>
          </button>
        </div>

        {/* Content Section Container Frame */}
        <div className="p-[1.5rem] sm:p-[2.5rem] md:p-[3rem] w-full">
          <div className="flex flex-col lg:flex-row items-start gap-[2rem] lg:gap-[3.5rem] w-full">
            
            {/* Left Auto Layout Column: Unified Media Gallery */}
            <div className="w-full lg:w-[55%] shrink-0 overflow-hidden rounded-md bg-muted">
              <ProductMediaGallery
                images={product.images || []}
                activeIndex={activeIndex}
                onIndexChange={setActiveIndex}
              />
            </div>

            {/* Right Auto Layout Column: Details, Shipping, and Footer Controls */}
            <div className="w-full lg:w-[45%] flex flex-col justify-between self-stretch">
              
              {/* Stacked Details Core Wrapper */}
              <div className="flex flex-col gap-[1.5rem] w-full mb-[2rem]">
                <ProductInfo
                  product={product}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow} // This links to the updated handler above
                />
                
                <div className="border-t border-border pt-[1.5rem]">
                  <ShippingInfo />
                </div>
              </div>

              {/* Action Button: View Full Details */}
              <div className="w-full border-t border-border pt-[1.25rem] mt-auto">
                <Link
                  href={fallbackDetailsUrl}
                  onClick={() => {
                    document.body.style.overflow = "unset";
                  }}
                  className="flex items-center justify-center w-full h-[3rem] border border-primary bg-transparent text-primary text-body-sm font-bold tracking-wide uppercase rounded-md transition-colors duration-200 hover:bg-neutral-50 focus-ring-custom text-center"
                >
                  View Full Details
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}