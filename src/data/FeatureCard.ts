// src/data/featureCards.ts

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
  imageXPos?: string;
  imageYPos?: string;
};

export const featureCards: FeatureCardItem[] = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1625211074534-ee00ecbe6f09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "White men's shoes",
    subtitle: "Up To 30%",
    title: "Men's Shoes",
    href: "/collections/mens-shoes",
    ctaText: "Shop Now",
    bgColor: "#3f6b43",
    subtitleColor: "#d8922d",
    imageRatio: 0.95,
    imageXPos: "50%",
    imageYPos: "100%",
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1625211074534-ee00ecbe6f09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Men's jacket",
    subtitle: "New Arrival",
    title: "Men's Jackets",
    href: "/collections/mens-jackets",
    ctaText: "Explore",
    bgColor: "#6b4d3f",
    subtitleColor: "#f0c36b",
    imageRatio: 0.95,
    imageXPos: "50%",
    imageYPos: "100%",
  },
  {
    id: 3,
    imageSrc: "/images/banner/watch-1.png",
    altText: "Luxury watch",
    subtitle: "Trending Now",
    title: "Men's Watches",
    href: "/collections/mens-watches",
    ctaText: "Discover",
    bgColor: "#2f3f57",
    subtitleColor: "#f2b84b",
    imageRatio: 0.95,
    imageXPos: "50%",
    imageYPos: "100%",
  },
];