"use client";

import ProductHero from "@/components/sections/ProductHero";
import GridSection from "../../components/shop/GridSection";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortBar from "@/components/shop/SortBar";
import Pagination from "@/components/shop/Pagination";
import { useShopFilters } from "@/hooks/useShopFilters";
import { products } from "@/data/products";
import Container from "@/components/ui/Container";

export default function ShopPage() {
  const {
    filters,
    setCategories,
    setPriceRange,
    setColors,
    setTags,
    setSortBy,
    setPage,
    resetFilters,
    filteredProducts,
    totalPages,
    totalItems,
    totalFiltered,
    hasActiveFilters,
  } = useShopFilters(products);

  const startIndex = totalFiltered === 0 ? 0 : (filters.currentPage - 1) * filters.itemsPerPage + 1;
  const endIndex = Math.min(filters.currentPage * filters.itemsPerPage, totalFiltered);

  return (
    <>
      <ProductHero />
      <section className="py-[2rem] font-sans antialiased">
        <Container>
          
          {/* MOBILE CONTROL ACTION HEADER 
             Now cleanly shares a single flex container row matching your layout spec 
          */}
          <div className="flex items-center justify-between gap-4 pb-[1.5rem] mb-[1rem] border-b border-neutral-100 lg:hidden">
            {/* The real structural component containing the functional trigger button */}
            <div className="flex-1">
              <FilterSidebar
                products={products}
                selectedCategories={filters.categories}
                selectedColors={filters.colors}
                selectedTags={filters.tags}
                priceMin={filters.priceMin}
                priceMax={filters.priceMax}
                onCategoriesChange={setCategories}
                onColorsChange={setColors}
                onTagsChange={setTags}
                onPriceRangeChange={setPriceRange}
                onReset={resetFilters}
                hasActiveFilters={hasActiveFilters}
                renderMobileTriggerInline={true} 
              />
            </div>

            {/* Sort Dropdown Mounted Directly on Right Track */}
            <div className="shrink-0">
              <SortBar
                sortBy={filters.sortBy}
                onSortChange={setSortBy}
                totalItems={totalFiltered}
                startIndex={startIndex}
                endIndex={endIndex}
                isMobileCompact={true}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Desktop persistent sidebar layout position */}
            <div className="hidden lg:block">
              <FilterSidebar
                products={products}
                selectedCategories={filters.categories}
                selectedColors={filters.colors}
                selectedTags={filters.tags}
                priceMin={filters.priceMin}
                priceMax={filters.priceMax}
                onCategoriesChange={setCategories}
                onColorsChange={setColors}
                onTagsChange={setTags}
                onPriceRangeChange={setPriceRange}
                onReset={resetFilters}
                hasActiveFilters={hasActiveFilters}
                renderMobileTriggerInline={false}
              />
            </div>

            {/* Main Product Display Column */}
            <div className="min-w-0 flex-1">
              {/* Desktop-Only SortBar */}
              <div className="hidden lg:block">
                <SortBar
                  sortBy={filters.sortBy}
                  onSortChange={setSortBy}
                  totalItems={totalFiltered}
                  startIndex={startIndex}
                  endIndex={endIndex}
                />
              </div>

              <GridSection products={filteredProducts} />
              
              <Pagination
                currentPage={filters.currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}