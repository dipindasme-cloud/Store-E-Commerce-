import React from 'react';
import { ProductStandardCard } from "@/components/ui/ProductStandardCard";
import type { Product } from "@/types/products";

type GridSectionProps = {
  products: Product[];
};

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop";

function toCardProps(product: Product) {
  // Directly pull image resources straight from the synced incoming product data object
  const primaryImage = product.images?.[0]?.src || FALLBACK_IMAGE;
  const secondaryImage = product.images?.[1]?.src || "";

  return {
    id: product.id,
    title: product.title,
    price: product.price,
    compareAtPrice: product.compareAtPrice ?? undefined,
    primaryImage,
    secondaryImage,
    isSale: product.badges?.includes("sale") ?? false,
    href: `/about/${product.handle}`,
  };
}

export default function GridSection({ products }: GridSectionProps) {
  if (products.length === 0) {
    return (
      <section className="py-0" aria-label="No results display">
        <div className="flex flex-col items-center justify-center py-[5rem] text-center">
          <p className="text-[1.125rem] font-medium text-neutral-900">No products found</p>
          <p className="mt-[0.5rem] text-[0.875rem] text-neutral-500">
            Try adjusting your filters to find what you&apos;re looking for.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-0 w-full" aria-label="Product listings selection grid">
      {/* Clean Auto Layout execution using pure modern CSS columns */}
      <div className="grid grid-cols-2 gap-x-[1rem] gap-y-[1.5rem] sm:gap-x-[1.5rem] md:grid-cols-3 lg:grid-cols-4 items-stretch justify-items-center w-full">
        {products.map((product) => (
          <ProductStandardCard
            key={product.id}
            {...toCardProps(product)}
          />
        ))}
      </div>
    </section>
  );
}