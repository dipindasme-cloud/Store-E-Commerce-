import type { Collection, CollectionCardData, CollectionGroup } from "@/types/collections";
import { products } from "./products";

export const collections: Collection[] = [
  {
    id: "featured",
    handle: "featured",
    title: "Featured",
    description: "Our hand-picked selection of the season's best performers.",
    image: { src: "/images/collection-featured.jpg", alt: "Featured collection" },
    productCount: products.filter((p) => p.collection === "featured").length,
    productIds: products.filter((p) => p.collection === "featured").map((p) => p.id),
    layout: "carousel",
  },
  {
    id: "new-arrivals",
    handle: "new-arrivals",
    title: "New Arrivals",
    description: "Fresh off the line — the latest drops you won't want to miss.",
    image: { src: "/images/collection-new.jpg", alt: "New arrivals collection" },
    productCount: products.filter((p) => p.collection === "new-arrivals").length,
    productIds: products.filter((p) => p.collection === "new-arrivals").map((p) => p.id),
    layout: "grid",
  },
  {
    id: "apparel",
    handle: "apparel",
    title: "Apparel",
    description: "Performance-driven clothing engineered for every workout.",
    image: { src: "/images/collection-apparel.jpg", alt: "Apparel collection" },
    productCount: products.filter((p) => p.collection === "apparel").length,
    productIds: products.filter((p) => p.collection === "apparel").map((p) => p.id),
    layout: "grid",
  },
  {
    id: "accessories",
    handle: "accessories",
    title: "Accessories",
    description: "The finishing touches that elevate your training.",
    image: { src: "/images/collection-accessories.jpg", alt: "Accessories collection" },
    productCount: products.filter((p) => p.collection === "accessories").length,
    productIds: products.filter((p) => p.collection === "accessories").map((p) => p.id),
    layout: "grid",
  },
  {
    id: "sale",
    handle: "sale",
    title: "Sale",
    description: "Last chance to grab your favorites at a reduced price.",
    image: null,
    productCount: products.filter((p) => p.badges.includes("sale")).length,
    productIds: products.filter((p) => p.badges.includes("sale")).map((p) => p.id),
    layout: "grid",
  },
];

export function getCollectionByHandle(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}

export const collectionCards: CollectionCardData[] = collections.map(
  ({ id, handle, title, description, image, productCount }) => ({
    id,
    handle,
    title,
    description,
    image,
    productCount,
  })
);

export const collectionGroups: CollectionGroup[] = [
  {
    id: "shop-by-category",
    title: "Shop by Category",
    collections: collectionCards.filter((c) =>
      ["featured", "new-arrivals", "sale"].includes(c.id)
    ),
  },
];
