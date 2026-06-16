"use client";

interface WishlistHeaderProps {
  totalItems: number;
  onClearWishlist: () => void;
}

export default function WishlistHeader({
  totalItems,
  onClearWishlist,
}: WishlistHeaderProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-semibold">
          Wishlist
        </h1>

        <p className="text-sm text-neutral-500 mt-1">
          {totalItems} saved item{totalItems !== 1 ? "s" : ""}
        </p>
      </div>

      <button
        onClick={onClearWishlist}
        className="h-11 px-5 rounded-lg border border-neutral-300 text-sm font-medium"
      >
        Clear Wishlist
      </button>
    </div>
  );
}