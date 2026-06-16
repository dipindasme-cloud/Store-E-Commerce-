import React from 'react';
import Container from "@/components/ui/Container"; 
import { ProductStandardCard } from "@/components/ui/ProductStandardCard";
import { products } from "@/data/products"; // Centralized source of truth
import type { Product } from "@/types/products";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop";

/**
 * Transforms global multi-variant product structures into standard display props.
 * Safely handles missing array data while maintaining constant structural sync.
 */
function mapProductToCardProps(product: Product) {
  // Clean up the corrupted fallback URL fragment present in p12 raw data string if it arrives here
  let secondaryImage = product.images?.[1]?.src || "";
  if (secondaryImage.includes("cs.unsplash.com")) {
    secondaryImage = "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&auto=format&fit=crop";
  }

  return {
    id: product.id,
    title: product.title,
    price: product.price,
    compareAtPrice: product.compareAtPrice ?? undefined,
    primaryImage: product.images?.[0]?.src || FALLBACK_IMAGE,
    secondaryImage: secondaryImage,
    isSale: product.badges?.includes("sale") ?? false,
    href: `/about/${product.handle}`,
  };
}

export default function GridSection() {
  // Handle empty collection state elegantly
  if (!products || products.length === 0) {
    return (
      <section className="py-[4rem] md:py-[6rem] bg-[#FAFAFA]" aria-label="Product listings configuration grid">
        <Container>
          <div className="flex flex-col items-center justify-center py-[5rem] text-center">
            <p className="text-[1.125rem] font-medium text-[#0A0A0A]">No products available</p>
            <p className="mt-[0.5rem] text-[0.875rem] text-[#737373]"> Check back soon for new arrivals.</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-[4rem] md:py-[6rem] bg-[#FAFAFA]" aria-label="Product listings configuration grid">
      <Container>
        
        {/* Section Header Anchor Area */}
        <div className="mb-[2.5rem] md:mb-[3.5rem] text-center">
          <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-tight text-[#0A0A0A]">
            Trending Footwear
          </h2>
          <p className="mt-[0.5rem] text-[0.875rem] md:text-[1rem] text-[#737373]">
            Explore high-performance design variants and seasonal configurations.
          </p>
        </div>

        {/* Scalable Multi-Device Product Catalog Grid Layer */}
        {/* Optimized responsive grid layouts with comfortable rem-based structural gap matrices */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[1rem] gap-y-[2.5rem] sm:gap-x-[1.5rem] md:gap-y-[3.5rem] justify-items-center items-stretch w-full">
          {products.map((product) => {
            const cardProps = mapProductToCardProps(product);
            return (
              <ProductStandardCard
                key={product.id}
                id={cardProps.id}
                title={cardProps.title}
                price={cardProps.price}
                compareAtPrice={cardProps.compareAtPrice}
                primaryImage={cardProps.primaryImage}
                secondaryImage={cardProps.secondaryImage}
                isSale={cardProps.isSale}
                href={cardProps.href}
              />
            );
          })}
        </div>

      </Container>
    </section>
  );
}