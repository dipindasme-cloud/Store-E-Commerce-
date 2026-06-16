"use client";

import WishlistCard from "./WishlistCard";

interface WishlistGridProps {
  products: any[];
  onRemove: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export default function WishlistGrid({
  products,
  onRemove,
  onAddToCart,
}: WishlistGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <WishlistCard
          key={product.id}
          product={product}
          onRemove={onRemove}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}