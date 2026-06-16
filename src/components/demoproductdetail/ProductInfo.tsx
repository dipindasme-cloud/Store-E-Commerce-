"use client";

import { useState } from "react";
import type { Product } from "@/types/products";
import Button from "../ui/Button";
import QuantitySelector from "./QuantitySelector";
import { Heart } from "lucide-react";

import PrimaryButton from "../ui/PrimaryButton";

type ProductInfoProps = {
  product: Product;
  onAddToCart: (quantity: number) => void;
  onBuyNow: (quantity: number) => void;
};

export default function ProductInfo({
  product,
  onAddToCart,
  onBuyNow,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        (1 - product.price / product.compareAtPrice!) * 100
      )
    : 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Title + Wishlist */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-h2 font-semibold tracking-tight">
          {product.title}
        </h1>
        <button
          type="button"
          onClick={() => setWishlisted(!wishlisted)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`shrink-0 mt-1 transition ${
            wishlisted
              ? "text-red-500"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart size={22} fill={wishlisted ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Rating */}
      {product.rating > 0 && (
        <div className="flex items-center gap-2">
          <div className="flex" aria-label={`${product.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.round(product.rating)
                    ? "text-foreground"
                    : "text-border"
                }`}
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M7 0L9.05 4.05L13 4.9L10.5 7.7L11.18 12L7 10.05L2.82 12L3.5 7.7L1 4.9L4.95 4.05L7 0Z" />
              </svg>
            ))}
          </div>
          <span className="text-body-sm text-muted-foreground">
            {product.rating.toFixed(1)} ({product.reviewCount} reviews)
          </span>
        </div>
      )}

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-h3 font-semibold">${product.price.toFixed(2)}</span>
        {hasDiscount && (
          <>
            <span className="text-body-md text-muted-foreground line-through">
              ${product.compareAtPrice!.toFixed(2)}
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-caption font-medium text-primary">
              SAVE {discountPercent}%
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-body-md text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      
      

      {/* Quantity + Buttons */}
      
      <div className="flex flex-wrap gap-3">
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <PrimaryButton variant="secondary" size="lg" className="flex-1" onClick={() => onAddToCart(quantity)}>
            Add to Cart
          </PrimaryButton>
        </div>
        <div className="flex flex-wrap gap-3">
           
          
          <Button href="./cart" variant="primary" size="lg" className="flex-1">
            Buy It Now
          </Button>
        </div>
      </div>
  
  );
}