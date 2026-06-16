"use client";

import Image from "next/image";

interface WishlistCardProps {
  product: any;
  onRemove: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export default function WishlistCard({
  product,
  onRemove,
  onAddToCart,
}: WishlistCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-sm text-neutral-500">
          {product.brand}
        </p>

        <h3 className="mt-1 font-medium">
          {product.name}
        </h3>

        <p className="mt-3 text-lg font-semibold">
          ${product.price}
        </p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onAddToCart(product.id)}
            className="flex-1 h-11 rounded-lg bg-black text-white text-sm font-medium"
          >
            Add To Cart
          </button>

          <button
            onClick={() => onRemove(product.id)}
            className="h-11 px-4 rounded-lg border border-neutral-300 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}