"use client";

import Link from "next/link";

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 text-6xl">
        ♡
      </div>

      <h2 className="text-2xl font-semibold">
        Your Wishlist Is Empty
      </h2>

      <p className="mt-3 max-w-md text-neutral-500">
        Save products you love and easily find them later.
      </p>

      <Link
        href="/shop"
        className="mt-8 h-12 px-6 inline-flex items-center justify-center rounded-lg bg-black text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
}