"use client";

import { useState } from "react";

type Product = {
  id: string;
  [key: string]: any;
};

export function useWishlist() {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const recommendedProducts: Product[] = [];

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev: Product[]) =>
      prev.filter((item: Product) => item.id !== id)
    );
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const addToCart = (id: string) => {
    console.log("Add to cart:", id);
  };

  return {
    wishlistItems,
    recommendedProducts,
    removeFromWishlist,
    clearWishlist,
    addToCart,
  };
}