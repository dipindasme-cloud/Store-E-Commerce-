// src/data/FeatureCard.ts

export type FeatureCardItem = {
  id: number;
  imageSrc: string;
  altText: string;
  subtitle: string;
  title: string;
  href: string;
  ctaText: string;
  bgColor: string;
  subtitleColor: string;
  imageRatio?: number;
  // NEW: Explicit system keys replacing fragile canvas coordinate configurations
  cardOrientation?: "vertical" | "horizontal";
  contentAlignment?: "left" | "center" | "right";
  isDarkOverlay?: boolean;
};

export const featureCards: FeatureCardItem[] = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1625211074534-ee00ecbe6f09?q=80&w=687&auto=format&fit=crop",
    altText: "White premium men's footwear running profile line",
    subtitle: "Up To 30% Off",
    title: "Men's Footwear",
    href: "/collections/mens-shoes",
    ctaText: "Shop Now",
    bgColor: "#171717",
    subtitleColor: "#d8922d",
    imageRatio: 1.0,
    cardOrientation: "vertical",
    contentAlignment: "center",
    isDarkOverlay: true,
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=687&auto=format&fit=crop",
    altText: "Minimal studio athletic apparel layering",
    subtitle: "New Release",
    title: "Aero Compression Essentials",
    href: "/collections/apparel",
    ctaText: "Explore Collection",
    bgColor: "#0f172a",
    subtitleColor: "#38bdf8",
    imageRatio: 0.85,
    cardOrientation: "horizontal",
    contentAlignment: "left",
    isDarkOverlay: false,
  }
];