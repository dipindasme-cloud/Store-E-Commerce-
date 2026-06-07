import type { Product } from "./products";

export type CollectionImage = {
  src: string;
  alt: string;
};

export type CollectionLayout = "grid" | "list" | "carousel";

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: CollectionImage | null;
  productCount: number;
  productIds: string[];
  products?: Product[];
  layout: CollectionLayout;
};

export type CollectionCardData = Pick<
  Collection,
  "id" | "handle" | "title" | "description" | "image" | "productCount"
>;

export type CollectionGroup = {
  id: string;
  title: string;
  collections: CollectionCardData[];
};
