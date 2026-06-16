import type { Product } from "@/types/products";
import type { FilterState, SortOption } from "@/types/filters";

export function filterProducts(
  products: Product[],
  filters: FilterState
): Product[] {
  return products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    if (product.price < filters.priceMin || product.price > filters.priceMax) {
      return false;
    }

    if (filters.colors.length > 0) {
      const productColors = product.variants
        .map((v) => v.color)
        .filter((c): c is string => Boolean(c));
      const hasColor = filters.colors.some((c) => productColors.includes(c));
      if (!hasColor) return false;
    }

    if (filters.tags.length > 0) {
      const hasTag = filters.tags.some((t) => product.tags.includes(t));
      if (!hasTag) return false;
    }

    return true;
  });
}

export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const sorted = [...products];
  switch (sortBy) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      sorted.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
  }
  return sorted;
}

export function paginateProducts(
  products: Product[],
  page: number,
  itemsPerPage: number
): { items: Product[]; totalPages: number; totalItems: number } {
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const items = products.slice(start, start + itemsPerPage);
  return { items, totalPages, totalItems };
}

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
  { value: "rating", label: "Best Rating" },
  { value: "newest", label: "Newest First" },
];

export function extractCategories(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.category))].sort();
}

export function extractColors(products: Product[]): { name: string; hex: string }[] {
  const colorMap = new Map<string, string>();
  products.forEach((p) =>
    p.variants.forEach((v) => {
      if (v.color && v.colorHex) colorMap.set(v.color, v.colorHex);
    })
  );
  return Array.from(colorMap.entries()).map(([name, hex]) => ({ name, hex }));
}

export function extractTags(products: Product[]): string[] {
  return [...new Set(products.flatMap((p) => p.tags))].sort();
}

export function getCategoryLabel(category: string): string {
  return category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
