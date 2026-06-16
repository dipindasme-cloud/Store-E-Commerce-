"use client";

import { useMemo, useState, useEffect } from "react";
import type { Product } from "@/types/products";
import {
  extractCategories,
  extractColors,
  extractTags,
  getCategoryLabel,
} from "@/lib/filter";

type FilterSidebarProps = {
  products: Product[];
  selectedCategories: string[];
  selectedColors: string[];
  selectedTags: string[];
  priceMin: number;
  priceMax: number;
  onCategoriesChange: (categories: string[]) => void;
  onColorsChange: (colors: string[]) => void;
  onTagsChange: (tags: string[]) => void;
  onPriceRangeChange: (min: number, max: number) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
  renderMobileTriggerInline?: boolean; // New architectural layout flag
};

export default function FilterSidebar({
  products,
  selectedCategories,
  selectedColors,
  selectedTags,
  priceMin,
  priceMax,
  onCategoriesChange,
  onColorsChange,
  onTagsChange,
  onPriceRangeChange,
  onReset,
  hasActiveFilters,
  renderMobileTriggerInline = false,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = useMemo(() => extractCategories(products), [products]);
  const colors = useMemo(() => extractColors(products), [products]);
  const tags = useMemo(() => extractTags(products), [products]);

  const globalMaxPrice = useMemo(
    () => Math.max(...products.map((p) => p.price), 0),
    [products]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function toggleCategory(cat: string) {
    const next = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    onCategoriesChange(next);
  }

  function toggleColor(color: string) {
    const next = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    onColorsChange(next);
  }

  function toggleTag(tag: string) {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagsChange(next);
  }

  return (
    <>
      {/* Functional Filter Trigger Button (Rendered exactly when layout requests it inline on mobile) */}
      {renderMobileTriggerInline && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 rounded-xl border border-neutral-900 bg-white px-[1.5rem] py-[0.625rem] text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-50 active:scale-[0.98] lg:hidden"
        >
          <svg className="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          Filter
          {hasActiveFilters && <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-neutral-900" />}
        </button>
      )}

      {/* Persistent Side Panel Drawer Frame */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-xs transform flex-col bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:w-64 lg:max-w-none lg:transform-none lg:bg-transparent lg:p-0 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Drawer Mobile Close Header Row */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h2 className="text-lg font-bold text-neutral-900">Filters</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Filters List */}
        <div className="flex-1 overflow-y-auto pr-1 lg:overflow-visible lg:pr-0 space-y-6">
          <div className="hidden lg:flex lg:items-center lg:justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Filters</h3>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onReset}
                className="text-xs font-semibold text-neutral-500 underline underline-offset-4 hover:text-neutral-900 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Categories */}
          <fieldset className="border-none p-0 m-4">
            <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-400">Categories</legend>
            <div className="space-y-2">
              {categories.map((cat) => {
                const isChecked = selectedCategories.includes(cat);
                return (
                  <label key={cat} className="group flex cursor-pointer items-center gap-3 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleCategory(cat)}
                      className="h-4 w-4 rounded border-neutral-300 accent-neutral-900 text-neutral-900 focus:ring-neutral-900 transition-transform group-hover:scale-105"
                    />
                    <span className={isChecked ? "text-neutral-900 font-semibold" : ""}>{getCategoryLabel(cat)}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <hr className="border-neutral-200" />

          {/* Price Range */}
          <fieldset className="border-none p-0 m-4">
            <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-400">Price Range</legend>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-neutral-400 text-xs">$</span>
                  </div>
                  <input
                    type="number"
                    min={0}
                    max={priceMax}
                    value={priceMin}
                    onChange={(e) => onPriceRangeChange(Number(e.target.value), priceMax)}
                    className="w-full rounded-md border border-neutral-300 pl-6 pr-3 py-1.5 text-xs transition-colors focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    placeholder="0"
                  />
                </div>
              </div>
              <span className="text-neutral-400 font-light">—</span>
              <div className="flex-1">
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-neutral-400 text-xs">$</span>
                  </div>
                  <input
                    type="number"
                    min={priceMin}
                    max={globalMaxPrice}
                    value={priceMax >= globalMaxPrice ? "" : priceMax}
                    onChange={(e) => onPriceRangeChange(priceMin, e.target.value ? Number(e.target.value) : globalMaxPrice)}
                    className="w-full rounded-md border border-neutral-300 pl-6 pr-3 py-1.5 text-xs transition-colors focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    placeholder={`${globalMaxPrice}`}
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <hr className="border-neutral-200" />

          {/* Colors */}
          <fieldset className="border-none p-0 m-4">
            <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-400">Color Swatches</legend>
            <div className="flex flex-wrap gap-2.5">
              {colors.map(({ name, hex }) => {
                const isSelected = selectedColors.includes(name);
                return (
                  <button
                    key={name}
                    type="button"
                    title={name}
                    onClick={() => toggleColor(name)}
                    className={`h-6 w-6 rounded-full border transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 ${
                      isSelected ? "border-neutral-900 scale-110 ring-2 ring-neutral-900 ring-offset-2" : "border-neutral-300 hover:border-neutral-600"
                    }`}
                    style={{ backgroundColor: hex }}
                  />
                );
              })}
            </div>
          </fieldset>

          <hr className="border-neutral-200" />

          {/* Tags */}
          <fieldset className="border-none p-0 m-4">
            <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-400">Tags</legend>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      isSelected ? "bg-neutral-900 text-white shadow-sm" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Mobile Reset Action Anchor */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-neutral-200 lg:hidden">
            <button
              type="button"
              onClick={() => {
                onReset();
                setIsOpen(false);
              }}
              className="w-full text-center rounded-lg bg-neutral-100 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-900"
            >
              Clear Filters
            </button>
          </div>
        )}
      </aside>

      {/* Dimmed backdrop background layer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-900/20 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}