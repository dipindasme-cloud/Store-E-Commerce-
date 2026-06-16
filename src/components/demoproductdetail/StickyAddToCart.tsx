"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/types/products";
import QuantitySelector from "./QuantitySelector";
import Button from "../ui/Button";


type StickyAddToCartProps = {
  product: Product;
  onAddToCart: (quantity: number) => void;
};

export default function StickyAddToCart({
  product,
  onAddToCart,
}: StickyAddToCartProps) {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const sentinel = document.getElementById("product-details-sentinel");
    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white shadow-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container-custom flex items-center gap-4 py-3">
        <img
          src={product.images[0]?.src}
          alt={product.images[0]?.alt}
          className="h-14 w-14 rounded-lg object-cover bg-muted shrink-0 max-md:hidden"
        />

        <div className="flex-1 min-w-0 max-md:hidden">
          <p className="text-body-sm font-medium truncate">{product.title}</p>
          <div className="flex items-center gap-2">
            <span className="text-body-sm font-semibold">
              ${product.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-body-sm text-muted-foreground line-through">
                ${product.compareAtPrice!.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <QuantitySelector value={quantity} onChange={setQuantity} />
          <Button
            variant="secondary"
            size="md"
            onClick={() => onAddToCart(quantity)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
