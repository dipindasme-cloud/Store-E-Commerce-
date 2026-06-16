"use client";

import WishlistHeader from "@/components/wishlist/WishlistHeader";
import WishlistGrid from "@/components/wishlist/WishlistGrid";
import EmptyWishlist from "@/components/wishlist/EmptyWishlist";
import RecommendedProducts from "@/components/wishlist/RecommendedProducts";
import Container from "@/components/ui/Container";
import { useWishlist } from "@/hooks/useWishlist";

export default function WishlistPage() {
  const {
    wishlistItems,
    recommendedProducts,
    removeFromWishlist,
    clearWishlist,
    addToCart,
  } = useWishlist();

  const isEmpty = wishlistItems.length === 0;

  return (
    <>
      

      <section className="py-[2rem] font-sans antialiased">
        <Container>
          {!isEmpty ? (
            <div className="flex flex-col gap-8">
              <WishlistHeader
                totalItems={wishlistItems.length}
                onClearWishlist={clearWishlist}
              />

              <WishlistGrid
                products={wishlistItems}
                onRemove={removeFromWishlist}
                onAddToCart={addToCart}
              />

              <RecommendedProducts
                products={recommendedProducts}
              />
            </div>
          ) : (
            <EmptyWishlist />
          )}
        </Container>
      </section>
    </>
  );
}