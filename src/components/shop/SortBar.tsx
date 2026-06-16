"use client";

import { useState, useRef, useEffect } from "react";
import type { SortOption } from "@/types/filters";
import { SORT_OPTIONS } from "@/lib/filter";

type SortBarProps = {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  isMobileCompact?: boolean; // New UI Layout Modifier flag
};

export default function SortBar({
  sortBy,
  onSortChange,
  totalItems,
  startIndex,
  endIndex,
  isMobileCompact = false,
}: SortBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = SORT_OPTIONS.find((opt) => opt.value === sortBy);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Adapt structural styles depending on layout positioning rules
  if (isMobileCompact) {
    return (
      <div ref={dropdownRef} className="relative font-sans antialiased">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 bg-transparent py-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 focus:outline-none"
        >
          <span className="text-neutral-600">{currentOption?.label || "Sort"}</span>
          <svg
            className={`h-4 w-4 text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-neutral-900" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {isOpen && (
          <ul role="listbox" className="absolute right-0 top-[125%] z-50 w-[14rem] bg-white border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] animate-in fade-in slide-in-from-top-1 duration-150">
            {SORT_OPTIONS.map((opt) => {
              const isSelected = opt.value === sortBy;
              return (
                <li key={opt.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onSortChange(opt.value as SortOption);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-xs font-medium tracking-wide transition-all ${
                      isSelected ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <span className="h-1 w-1 rounded-full bg-white" />}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  // Persistent Desktop UI Variant Layout Structure
  return (
    <div className="mb-[2rem] flex items-center justify-between gap-4 border-b border-neutral-100 pb-[1.25rem] font-sans antialiased">
      <div className="text-[0.75rem] tracking-[0.05em] text-neutral-400 uppercase font-medium">
        Showing <span className="font-semibold text-neutral-900">{totalItems === 0 ? 0 : startIndex}–{endIndex}</span> of <span className="font-semibold text-neutral-900">{totalItems}</span> items
      </div>

      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group flex w-[15rem] items-center justify-between bg-white px-4 py-2.5 text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-neutral-800 border border-neutral-200 transition-all duration-300 hover:border-neutral-900 focus:outline-none"
        >
          <span>
            <span className="text-neutral-400 font-normal normal-case mr-1.5">Sort:</span>
            {currentOption?.label}
          </span>
          <svg className={`h-3.5 w-3.5 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {isOpen && (
          <ul role="listbox" className="absolute right-0 top-[115%] z-40 w-[15rem] bg-white/95 backdrop-blur-md border border-neutral-200 shadow-[0_12px_30px_rgba(0,0,0,0.04)] animate-in fade-in duration-200">
            {SORT_OPTIONS.map((opt) => {
              const isSelected = opt.value === sortBy;
              return (
                <li key={opt.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onSortChange(opt.value as SortOption);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-[0.725rem] font-medium tracking-[0.04em] uppercase transition-all ${
                      isSelected ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <span className="h-1 w-1 rounded-full bg-white" />}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}