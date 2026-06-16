import type { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: "p1",
    handle: "apex-quantum-overdrive",
    title: "Apex Quantum Overdrive",
    description:
      "A premium, hyper-responsive road racing shoe engineered with an accelerated carbon-fiber propulsion plate and ultra-lightweight mesh for continuous speed breaks.",
    price: 245,
    compareAtPrice: 295,
    images: [
      { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop", alt: "Apex Quantum Overdrive – profile red view" },
      { src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop", alt: "Apex Quantum Overdrive – alternative studio lighting" },
    ],
    variants: [
      { id: "p1-m-red", title: "M / Red", sku: "AQO-M-RED", price: 245, compareAtPrice: 295, available: true, size: "M", color: "Red", colorHex: "#dc2626" },
      { id: "p1-l-red", title: "L / Red", sku: "AQO-L-RED", price: 245, compareAtPrice: 295, available: true, size: "L", color: "Red", colorHex: "#dc2626" },
      { id: "p1-xl-red", title: "XL / Red", sku: "AQO-XL-RED", price: 245, compareAtPrice: 295, available: false, size: "XL", color: "Red", colorHex: "#dc2626" },
    ],
    badges: ["sale"],
    tags: ["running", "performance", "carbon-plate"],
    category: "running-shoes",
    collection: "featured",
    rating: 4.9,
    reviewCount: 142,
    reviews: [
      { id: "r1", author: "Marcus V.", rating: 5, title: "Pure speed propulsion", body: "The kinetic return off the forefoot plate is instantly noticeable.", date: "2026-05-12" }
    ],
    createdAt: "2026-04-10"
  },
  {
    id: "p2",
    handle: "monolith-all-weather-scout",
    title: "Monolith All-Weather Scout",
    description:
      "A rugged utility boot disguised as a minimalist technical sneaker. Water-resistant nylon construction, tactical speed lacing, and multi-surface engineered lug traction.",
    price: 185,
    compareAtPrice: null,
    images: [
      { src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop", alt: "Monolith All-Weather Scout – industrial core style" },
      { src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop", alt: "Monolith All-Weather Scout – alternate lifestyle angle" },
    ],
    variants: [
      { id: "p2-s-blk", title: "S / Black", sku: "MAW-S-BLK", price: 185, compareAtPrice: null, available: true, size: "S", color: "Black", colorHex: "#000000" },
      { id: "p2-m-blk", title: "M / Black", sku: "MAW-M-BLK", price: 185, compareAtPrice: null, available: true, size: "M", color: "Black", colorHex: "#000000" },
      { id: "p2-l-blk", title: "L / Black", sku: "MAW-L-BLK", price: 185, compareAtPrice: null, available: true, size: "L", color: "Black", colorHex: "#000000" }
    ],
    badges: ["new"],
    tags: ["utility", "lifestyle", "water-resistant"],
    category: "lifestyle-shoes",
    collection: "featured",
    rating: 4.7,
    reviewCount: 68,
    reviews: [
      { id: "r2", author: "Devon K.", rating: 5, title: "Perfect utility minimalism", body: "Extremely clean profile but stands up beautifully to unexpected wet weather.", date: "2026-05-24" }
    ],
    createdAt: "2026-05-01"
  },
  {
    id: "p3",
    handle: "stratus-knit-cruiser",
    title: "Stratus Knit Cruiser",
    description:
      "A premium casual sneaker woven entirely from upcycled marine plastic yarn. Sock-fit silhouette designed for ultimate thermal comfort and effortless everyday transitions.",
    price: 135,
    compareAtPrice: 165,
    images: [
      { src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop", alt: "Stratus Knit Cruiser – premium studio shot" },
      { src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop", alt: "Stratus Knit Cruiser – clean white aesthetic" },
    ],
    variants: [
      { id: "p3-m-wht", title: "M / White", sku: "SKC-M-WHT", price: 135, compareAtPrice: 165, available: true, size: "M", color: "White", colorHex: "#ffffff" },
      { id: "p3-l-wht", title: "L / White", sku: "SKC-L-WHT", price: 135, compareAtPrice: 165, available: true, size: "L", color: "White", colorHex: "#ffffff" }
    ],
    badges: ["sale"],
    tags: ["lifestyle", "knit", "sustainable"],
    category: "lifestyle-shoes",
    collection: "featured",
    rating: 4.5,
    reviewCount: 114,
    reviews: [
      { id: "r3", author: "Sarah L.", rating: 4, title: "Like walking on clouds", body: "Super light weight and visually immaculate. Dirt cleans off easier than expected.", date: "2026-04-18" }
    ],
    createdAt: "2026-03-15"
  },
  {
    id: "p4",
    handle: "kinetic-pulse-trainer",
    title: "Kinetic Pulse Trainer",
    description:
      "Engineered for high-intensity, multi-directional cross-training. Features an ultra-stable wide flat heel base, lock-down lace wraps, and internal side-wall support frameworks.",
    price: 160,
    compareAtPrice: null,
    images: [
      { src: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop", alt: "Kinetic Pulse Trainer – performance dynamic view" },
      { src: "https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?q=80&w=1200&auto=format&fit=crop", alt: "Kinetic Pulse Trainer – structural grip look" },
    ],
    variants: [
      { id: "p4-m-org", title: "M / Amber", sku: "KPT-M-ORG", price: 160, compareAtPrice: null, available: true, size: "M", color: "Amber", colorHex: "#f97316" },
      { id: "p4-l-org", title: "L / Amber", sku: "KPT-L-ORG", price: 160, compareAtPrice: null, available: true, size: "L", color: "Amber", colorHex: "#f97316" }
    ],
    badges: ["new"],
    tags: ["training", "gym", "stability"],
    category: "training-shoes",
    collection: "featured",
    rating: 4.8,
    reviewCount: 92,
    reviews: [
      { id: "r4", author: "Tyler P.", rating: 5, title: "Rock solid base", body: "Exceptional lateral lock. Perfect execution for deep squats and box jumps.", date: "2026-05-29" }
    ],
    createdAt: "2026-05-10"
  }
];

/* ==========================================
    DATA ACCESS SELECTORS & UTILITIES
   ========================================== */

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getProductsByCollection(collectionId: string): Product[] {
  return products.filter((p) => p.collection === collectionId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.collection === "featured");
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.collection === "new-arrivals");
}

export function getSaleProducts(): Product[] {
  return products.filter((p) => p.badges.includes("sale"));
}