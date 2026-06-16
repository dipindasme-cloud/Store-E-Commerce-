import type { Product } from "@/types/products";

export const demoProduct: Product = {
  id: "demo-1",
  handle: "air-velocity-runner",
  title: "Air Velocity Runner",
  description:
    "Engineered for speed with a breathable mesh upper and responsive cushioning. The Air Velocity Runner delivers a lightweight, propulsive feel for daily training and race day alike. Features a carbon-rubber outsole for durable traction on any surface.",
  price: 189,
  compareAtPrice: 249,
  images: [
    {
      src: "/images/details/2.jpg",
      alt: "Air Velocity Runner – front angle",
    },
    {
      src: "/images/details/1.png",
      alt: "Air Velocity Runner – side profile",
    },
    {
      src: "/images/details/3.png",
      alt: "Air Velocity Runner – back view",
    },
    {
      src: "/images/details/4.png",
      alt: "Air Velocity Runner – detail",
    },
    {
      src: "/images/details/5.png",
      alt: "Air Velocity Runner – lifestyle",
    },
  ],
  variants: [
    { id: "d1-s-blk", title: "S / Black", sku: "AVR-S-BLK", price: 189, compareAtPrice: 249, available: true, size: "S", color: "Black", colorHex: "#000000" },
    { id: "d1-m-blk", title: "M / Black", sku: "AVR-M-BLK", price: 189, compareAtPrice: 249, available: true, size: "M", color: "Black", colorHex: "#000000" },
    { id: "d1-l-blk", title: "L / Black", sku: "AVR-L-BLK", price: 189, compareAtPrice: 249, available: true, size: "L", color: "Black", colorHex: "#000000" },
    { id: "d1-xl-blk", title: "XL / Black", sku: "AVR-XL-BLK", price: 189, compareAtPrice: 249, available: false, size: "XL", color: "Black", colorHex: "#000000" },
    { id: "d1-s-wht", title: "S / White", sku: "AVR-S-WHT", price: 189, compareAtPrice: 249, available: true, size: "S", color: "White", colorHex: "#ffffff" },
    { id: "d1-m-wht", title: "M / White", sku: "AVR-M-WHT", price: 189, compareAtPrice: 249, available: true, size: "M", color: "White", colorHex: "#ffffff" },
  ],
  badges: ["sale"],
  tags: ["running", "men", "women", "performance"],
  category: "running-shoes",
  collection: "featured",
  rating: 4.6,
  reviewCount: 128,
  reviews: [
    { id: "r1", author: "Alex M.", rating: 5, title: "Best running shoes I've owned", body: "Incredibly lightweight and responsive.", date: "2026-03-15" },
    { id: "r2", author: "Jordan K.", rating: 4, title: "Great but runs slightly small", body: "Comfortable and stylish. Go half a size up.", date: "2026-02-28" },
  ],
  createdAt: "2026-01-10",
};
