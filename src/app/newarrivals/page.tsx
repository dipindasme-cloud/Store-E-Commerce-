"use client";

import React from "react";
import { HeroBanner } from "@/components/newsection/HeroBanner";
import { FeaturedReleaseFluid } from "@/components/newsection/FeaturedRelease";
import { LatestProductsGrid } from "@/components/newsection/LatestProductsGrid";
import { ShopByCategory } from "@/components/newsection/ShopByCategory";
import { TrendingThisWeek } from "@/components/newsection/TrendingThisWeek";
import { LimitedEditionShowcase } from "@/components/newsection/LimitedEditionShowcase";
import { BrandHighlights } from "@/components/newsection/BrandHighlights";

export default function NewArrivalsPage() {
  return (
    <main className="animate-fade-in bg-[color:var(--color-background)] min-h-screen">
      <HeroBanner />
      <FeaturedReleaseFluid />
      <LatestProductsGrid />
      <ShopByCategory />
      <TrendingThisWeek />
      <LimitedEditionShowcase />
      <BrandHighlights />
    </main>
  );
}