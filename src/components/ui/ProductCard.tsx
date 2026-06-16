import Link from "next/link";
import type { ProductCardData } from "@/types/products";

type ProductCardProps = {
  product: ProductCardData;
  priority?: boolean;
};

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  const { handle, title, price, compareAtPrice, images, badges, rating, reviewCount } =
    product;

  const primaryImage = images[0];
  const secondaryImage = images[1];
  const hasDiscount = compareAtPrice && compareAtPrice > price;

  return (
    <Link
      href={`/products/${handle}`}
      className="group flex flex-col"
    >
      {/* Image container */}
      <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-muted">
        {primaryImage ? (
          <>
            <img
              src={primaryImage.src}
              alt={primaryImage.alt}
              loading={priority ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {secondaryImage && (
              <img
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="text-caption text-muted-foreground">No image</span>
          </div>
        )}

        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className={`rounded-full px-3 py-1 text-caption font-medium uppercase tracking-wider ${
                  badge === "sale"
                    ? "bg-primary text-primary-foreground"
                    : badge === "new"
                      ? "bg-white text-foreground"
                      : "bg-white/80 text-foreground"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Quick-add button on hover (desktop) */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-all duration-300 group-hover:opacity-100 max-md:hidden">
          <span className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-body-sm font-medium text-primary-foreground">
            Quick Add
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-body-sm font-medium">{title}</h3>

        <div className="flex items-center gap-2">
          <span className="text-body-sm font-semibold">
            ${price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-body-sm text-muted-foreground line-through">
              ${compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-1.5">
            <div className="flex" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < Math.round(rating)
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
            <span className="text-caption text-muted-foreground">
              ({reviewCount})
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
