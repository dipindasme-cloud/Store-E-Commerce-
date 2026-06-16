"use client";

import ProductCard from "@/components/ui/ProductCard";

interface RecommendedProductsProps {
  products: any[];
}

export default function RecommendedProducts({
  products,
}: RecommendedProductsProps) {
  return (
    <section className="pt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">
          You May Also Like
        </h2>

        <p className="mt-2 text-neutral-500">
          Recommended products based on your interests.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}