export type SortOption =
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc"
  | "rating"
  | "newest";

export type FilterState = {
  categories: string[];
  priceMin: number;
  priceMax: number;
  colors: string[];
  tags: string[];
  sortBy: SortOption;
  currentPage: number;
  itemsPerPage: number;
};

export type FilterDefinition = {
  label: string;
  value: string;
  count?: number;
};
