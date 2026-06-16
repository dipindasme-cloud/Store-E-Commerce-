"use client";

import { useState, useMemo } from "react";
import type { Product } from "@/types/products";
import type { FilterState, SortOption } from "@/types/filters";
import { filterProducts, sortProducts, paginateProducts } from "@/lib/filter";

const DEFAULT_FILTERS: FilterState = {
  categories: [],
  priceMin: 0,
  priceMax: Infinity,
  colors: [],
  tags: [],
  sortBy: "newest",
  currentPage: 1,
  itemsPerPage: 12,
};

export function useShopFilters(products: Product[]) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filtered = useMemo(
    () => filterProducts(products, filters),
    [products, filters]
  );

  const sorted = useMemo(
    () => sortProducts(filtered, filters.sortBy),
    [filtered, filters.sortBy]
  );

  const paginated = useMemo(
    () => paginateProducts(sorted, filters.currentPage, filters.itemsPerPage),
    [sorted, filters.currentPage, filters.itemsPerPage]
  );

  function setCategories(categories: string[]) {
    setFilters((prev) => ({ ...prev, categories, currentPage: 1 }));
  }

  function setPriceRange(min: number, max: number) {
    setFilters((prev) => ({ ...prev, priceMin: min, priceMax: max, currentPage: 1 }));
  }

  function setColors(colors: string[]) {
    setFilters((prev) => ({ ...prev, colors, currentPage: 1 }));
  }

  function setTags(tags: string[]) {
    setFilters((prev) => ({ ...prev, tags, currentPage: 1 }));
  }

  function setSortBy(sortBy: SortOption) {
    setFilters((prev) => ({ ...prev, sortBy, currentPage: 1 }));
  }

  function setPage(page: number) {
    setFilters((prev) => ({ ...prev, currentPage: page }));
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.colors.length > 0 ||
    filters.tags.length > 0 ||
    filters.priceMin > 0 ||
    filters.priceMax < Infinity;

  return {
    filters,
    setCategories,
    setPriceRange,
    setColors,
    setTags,
    setSortBy,
    setPage,
    resetFilters,
    filteredProducts: paginated.items,
    totalPages: paginated.totalPages,
    totalItems: paginated.totalItems,
    totalFiltered: filtered.length,
    hasActiveFilters,
  };
}
