"use client";

import { useState } from "react";
import type { Product } from "@/types/products";
import { useCart } from "@/context/CartContext";
import Container from "@/components/ui/Container";
import ProductMediaGallery from "@/components/demoproductdetail/ProductMediaGallery";
import ProductInfo from "@/components/demoproductdetail/ProductInfo";
import ShippingInfo from "@/components/demoproductdetail/ShippingInfo";
import StickyAddToCart from "@/components/demoproductdetail/StickyAddToCart";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addItem } = useCart();

  const handleAddToCart = (quantity: number) => {
    const variant = product.variants.find((v) => v.available) ?? product.variants[0];
    if (!variant) return;
    addItem({
      productId: product.id,
      variantId: variant.id,
      title: product.title,
      price: product.price,
      image: product.images[0]?.src ?? "",
      size: variant.size ?? "",
      color: variant.color ?? "",
      quantity,
    });
  };

  const handleBuyNow = handleAddToCart;

  return (
    <>
      <div id="product-details-sentinel" />

      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Unified Media Gallery — Completely Responsive across all screen sizes */}
            <div className="col-span-1 md:col-span-7">
              <div className="md:sticky md:top-24">
                <ProductMediaGallery
                  images={product.images}
                  activeIndex={activeIndex}
                  onIndexChange={setActiveIndex}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="col-span-1 md:col-span-5">
              <div className="sticky top-24 flex flex-col gap-6">
                <ProductInfo
                  product={product}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                />
                <ShippingInfo />
              </div>
            </div>

          </div>
        </Container>
      </section>

      <StickyAddToCart product={product} onAddToCart={handleAddToCart} />
    </>
  );
}