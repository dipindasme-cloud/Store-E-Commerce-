import Link from "next/link";
import type { CollectionCardData } from "@/types/collections";

type CollectionCardProps = {
  collection: CollectionCardData;
  priority?: boolean;
};

export default function CollectionCard({
  collection,
  priority = false,
}: CollectionCardProps) {
  const { handle, title, description, image, productCount } = collection;

  return (
    <Link
      href={`/collections/${handle}`}
      className="group relative block overflow-hidden rounded-xl bg-muted"
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="text-caption text-muted-foreground">{title}</span>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="text-h4 font-semibold text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-body-sm text-white/70 line-clamp-1">
            {description}
          </p>
        )}
        <span className="mt-2 inline-block text-caption text-white/60">
          {productCount} {productCount === 1 ? "product" : "products"}
        </span>
      </div>
    </Link>
  );
}
