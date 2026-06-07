export type ProductBadge = "sale" | "new" | "sold-out";

export type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProductVariant = {
  id: string;
  title: string;
  sku: string;
  price: number;
  compareAtPrice: number | null;
  available: boolean;
  size?: string;
  color?: string;
  colorHex?: string;
};

export type ProductReview = {
  id: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice: number | null;
  images: ProductImage[];
  variants: ProductVariant[];
  badges: ProductBadge[];
  tags: string[];
  category: string;
  collection: string;
  rating: number;
  reviewCount: number;
  reviews: ProductReview[];
  createdAt: string;
};

export type ProductCardData = Pick<
  Product,
  | "id"
  | "handle"
  | "title"
  | "price"
  | "compareAtPrice"
  | "images"
  | "badges"
  | "rating"
  | "reviewCount"
>;
