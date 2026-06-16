import type { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: "p1",
    handle: "air-velocity-runner",
    title: "Air Velocity Runner",
    description:
      "Engineered for speed with a breathable mesh upper and responsive cushioning. The Air Velocity Runner delivers a lightweight, propulsive feel for daily training and race day alike.",
    price: 189,
    compareAtPrice: 249,
    images: [
      { src: "https://images.unsplash.com/photo-1710553455491-482fa1751dc4?q=80&w=1171&auto=format&fit=crop", alt: "Air Velocity Runner – side view" },
      { src: "https://images.unsplash.com/photo-1625515921520-ca6f70457641?w=600&auto=format&fit=crop", alt: "Air Velocity Runner – angle view" },
    ],
    variants: [
      { id: "p1-s-blk", title: "S / Black", sku: "AVR-S-BLK", price: 189, compareAtPrice: 249, available: true, size: "S", color: "Black", colorHex: "#000000" },
      { id: "p1-m-blk", title: "M / Black", sku: "AVR-M-BLK", price: 189, compareAtPrice: 249, available: true, size: "M", color: "Black", colorHex: "#000000" },
      { id: "p1-l-blk", title: "L / Black", sku: "AVR-L-BLK", price: 189, compareAtPrice: 249, available: true, size: "L", color: "Black", colorHex: "#000000" },
      { id: "p1-xl-blk", title: "XL / Black", sku: "AVR-XL-BLK", price: 189, compareAtPrice: 249, available: false, size: "XL", color: "Black", colorHex: "#000000" },
      { id: "p1-s-wht", title: "S / White", sku: "AVR-S-WHT", price: 189, compareAtPrice: 249, available: true, size: "S", color: "White", colorHex: "#ffffff" },
      { id: "p1-m-wht", title: "M / White", sku: "AVR-M-WHT", price: 189, compareAtPrice: 249, available: true, size: "M", color: "White", colorHex: "#ffffff" },
      { id: "p1-l-wht", title: "L / White", sku: "AVR-L-WHT", price: 189, compareAtPrice: 249, available: true, size: "L", color: "White", colorHex: "#ffffff" },
    ],
    badges: ["sale"],
    tags: ["running", "men", "women", "performance"],
    category: "running-shoes",
    collection: "featured",
    rating: 4.6,
    reviewCount: 128,
    reviews: [
      { id: "r1", author: "Alex M.", rating: 5, title: "Best running shoes I've owned", body: "Incredibly lightweight and responsive. My 5K time dropped instantly.", date: "2026-03-15" },
      { id: "r2", author: "Jordan K.", rating: 4, title: "Great but runs slightly small", body: "Comfortable and stylish. Go half a size up.", date: "2026-02-28" },
    ],
    createdAt: "2026-01-10",
  },
  {
    id: "p2",
    handle: "stride-pro-max",
    title: "Stride Pro Max",
    description:
      "Maximum cushioning meets premium comfort. The Stride Pro Max features a plush midsole and engineered knit upper for long-distance runs on any surface.",
    price: 219,
    compareAtPrice: null,
    images: [
      { src: "https://images.unsplash.com/photo-1606890542131-31d8d6681f2f?w=600&auto=format&fit=crop", alt: "Stride Pro Max – front view" },
      { src: "https://images.unsplash.com/photo-1657801566558-23dcdee5a7b5?w=600&auto=format&fit=crop", alt: "Stride Pro Max – side view" },
    ],
    variants: [
      { id: "p2-m-gry", title: "M / Grey", sku: "SPM-M-GRY", price: 219, compareAtPrice: null, available: true, size: "M", color: "Grey", colorHex: "#6b7280" },
      { id: "p2-l-gry", title: "L / Grey", sku: "SPM-L-GRY", price: 219, compareAtPrice: null, available: true, size: "L", color: "Grey", colorHex: "#6b7280" },
      { id: "p2-xl-gry", title: "XL / Grey", sku: "SPM-XL-GRY", price: 219, compareAtPrice: null, available: true, size: "XL", color: "Grey", colorHex: "#6b7280" },
      { id: "p2-m-nvy", title: "M / Navy", sku: "SPM-M-NVY", price: 219, compareAtPrice: null, available: true, size: "M", color: "Navy", colorHex: "#1e3a5f" },
      { id: "p2-l-nvy", title: "L / Navy", sku: "SPM-L-NVY", price: 219, compareAtPrice: null, available: true, size: "L", color: "Navy", colorHex: "#1e3a5f" },
    ],
    badges: ["new"],
    tags: ["running", "men", "women", "trail", "long-distance"],
    category: "running-shoes",
    collection: "featured",
    rating: 4.8,
    reviewCount: 94,
    reviews: [
      { id: "r3", author: "Sam T.", rating: 5, title: "Marathon ready", body: "Wore these for my first marathon. Zero blisters, pure comfort.", date: "2026-04-02" },
    ],
    createdAt: "2026-02-20",
  },
  {
    id: "p3",
    handle: "flex-knit-trainer",
    title: "Flex Knit Trainer",
    description:
      "A versatile training shoe built for the gym and the track. The Flex Knit Trainer combines a sock-like fit with durable rubber outsole traction.",
    price: 149,
    compareAtPrice: 179,
    images: [
      { src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1025&auto=format&fit=crop", alt: "Flex Knit Trainer – angle view" },
      { src: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1025&auto=format&fit=crop", alt: "Flex Knit Trainer – side view" },
    ],
    variants: [
      { id: "p3-m-blk", title: "M / Black", sku: "FKT-M-BLK", price: 149, compareAtPrice: 179, available: true, size: "M", color: "Black", colorHex: "#000000" },
      { id: "p3-l-blk", title: "L / Black", sku: "FKT-L-BLK", price: 149, compareAtPrice: 179, available: true, size: "L", color: "Black", colorHex: "#000000" },
      { id: "p3-m-red", title: "M / Red", sku: "FKT-M-RED", price: 149, compareAtPrice: 179, available: true, size: "M", color: "Red", colorHex: "#dc2626" },
      { id: "p3-l-red", title: "L / Red", sku: "FKT-L-RED", price: 149, compareAtPrice: 179, available: false, size: "L", color: "Red", colorHex: "#dc2626" },
    ],
    badges: ["sale"],
    tags: ["training", "men", "women", "gym"],
    category: "training-shoes",
    collection: "featured",
    rating: 4.3,
    reviewCount: 67,
    reviews: [
      { id: "r4", author: "Casey L.", rating: 5, title: "Perfect gym shoe", body: "Great stability for lifting and comfortable enough for cardio.", date: "2026-03-01" },
    ],
    createdAt: "2026-01-05",
  },
  {
    id: "p4",
    handle: "trail-blazer-gtx",
    title: "Trail Blazer GTX",
    description:
      "Conquer any terrain with the Trail Blazer GTX. A Gore-Tex membrane keeps feet dry while the multi-directional lug pattern provides grip on loose soil and rock.",
    price: 259,
    compareAtPrice: null,
    images: [
      { src: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=2080&auto=format&fit=crop", alt: "Trail Blazer GTX – front view" },
      { src: "https://images.unsplash.com/photo-1608666634759-4376010f863d?q=80&w=2080&auto=format&fit=crop", alt: "Trail Blazer GTX – side view" },
    ],
    variants: [
      { id: "p4-m-brn", title: "M / Brown", sku: "TBG-M-BRN", price: 259, compareAtPrice: null, available: true, size: "M", color: "Brown", colorHex: "#7c3f1d" },
      { id: "p4-l-brn", title: "L / Brown", sku: "TBG-L-BRN", price: 259, compareAtPrice: null, available: true, size: "L", color: "Brown", colorHex: "#7c3f1d" },
      { id: "p4-xl-brn", title: "XL / Brown", sku: "TBG-XL-BRN", price: 259, compareAtPrice: null, available: true, size: "XL", color: "Brown", colorHex: "#7c3f1d" },
      { id: "p4-m-blk", title: "M / Black", sku: "TBG-M-BLK", price: 259, compareAtPrice: null, available: true, size: "M", color: "Black", colorHex: "#000000" },
      { id: "p4-l-blk", title: "L / Black", sku: "TBG-L-BLK", price: 259, compareAtPrice: null, available: false, size: "L", color: "Black", colorHex: "#000000" },
    ],
    badges: ["new"],
    tags: ["trail", "men", "waterproof", "hiking", "gore-tex"],
    category: "trail-shoes",
    collection: "new-arrivals",
    rating: 4.9,
    reviewCount: 42,
    reviews: [
      { id: "r5", author: "Morgan P.", rating: 5, title: "Built for the backcountry", body: "Took these through mud, stream crossings, and scree. Flawless.", date: "2026-04-10" },
    ],
    createdAt: "2026-03-01",
  },
  {
    id: "p5",
    handle: "speedlite-elite",
    title: "SpeedLite Elite",
    description:
      "Carbon-plated racing shoe designed for personal bests. The SpeedLite Elite combines a supercritical foam midsole with an integrated carbon fiber plate for maximum energy return.",
    price: 299,
    compareAtPrice: 349,
    images: [
      { src: "https://images.unsplash.com/photo-1606890542166-00bad9f493ee?q=80&w=764&auto=format&fit=crop", alt: "SpeedLite Elite – profile view" },
      { src: "https://images.unsplash.com/photo-1603787081437-4545da1c094f?w=600&auto=format&fit=crop", alt: "SpeedLite Elite – sole detail" },
    ],
    variants: [
      { id: "p5-m-wht", title: "M / White", sku: "SLE-M-WHT", price: 299, compareAtPrice: 349, available: true, size: "M", color: "White", colorHex: "#ffffff" },
      { id: "p5-l-wht", title: "L / White", sku: "SLE-L-WHT", price: 299, compareAtPrice: 349, available: true, size: "L", color: "White", colorHex: "#ffffff" },
      { id: "p5-xl-wht", title: "XL / White", sku: "SLE-XL-WHT", price: 299, compareAtPrice: 349, available: false, size: "XL", color: "White", colorHex: "#ffffff" },
      { id: "p5-m-lime", title: "M / Lime", sku: "SLE-M-LIME", price: 299, compareAtPrice: 349, available: true, size: "M", color: "Lime", colorHex: "#84cc16" },
      { id: "p5-l-lime", title: "L / Lime", sku: "SLE-L-LIME", price: 299, compareAtPrice: 349, available: true, size: "L", color: "Lime", colorHex: "#84cc16" },
    ],
    badges: ["sale", "new"],
    tags: ["racing", "men", "women", "carbon-plate", "competition"],
    category: "racing-shoes",
    collection: "new-arrivals",
    rating: 4.7,
    reviewCount: 56,
    reviews: [
      { id: "r6", author: "Taylor R.", rating: 5, title: "Felt like cheating", body: "The energy return is unreal. Shaved 45 seconds off my 10K.", date: "2026-03-22" },
    ],
    createdAt: "2026-02-15",
  },
  {
    id: "p6",
    handle: "core-jogger-sweatpant",
    title: "Core Jogger Sweatpant",
    description:
      "Premium cotton-blend fleece joggers with an tapered fit, elastic cuffs, and a drawstring waist. Built for recovery days and everyday comfort.",
    price: 79,
    compareAtPrice: null,
    images: [
      { src: "https://images.unsplash.com/photo-1704900264036-26bb66daa464?w=600&auto=format&fit=crop", alt: "Core Jogger Sweatpant – front view" },
      { src: "https://images.unsplash.com/photo-1704900264242-717c2eab3cbd?w=600&auto=format&fit=crop", alt: "Core Jogger Sweatpant – detail view" },
    ],
    variants: [
      { id: "p6-s-blk", title: "S / Black", sku: "CJS-S-BLK", price: 79, compareAtPrice: null, available: true, size: "S", color: "Black", colorHex: "#000000" },
      { id: "p6-m-blk", title: "M / Black", sku: "CJS-M-BLK", price: 79, compareAtPrice: null, available: true, size: "M", color: "Black", colorHex: "#000000" },
      { id: "p6-l-blk", title: "L / Black", sku: "CJS-L-BLK", price: 79, compareAtPrice: null, available: true, size: "L", color: "Black", colorHex: "#000000" },
      { id: "p6-s-gry", title: "S / Grey", sku: "CJS-S-GRY", price: 79, compareAtPrice: null, available: true, size: "S", color: "Grey", colorHex: "#6b7280" },
      { id: "p6-m-gry", title: "M / Grey", sku: "CJS-M-GRY", price: 79, compareAtPrice: null, available: true, size: "M", color: "Grey", colorHex: "#6b7280" },
    ],
    badges: [],
    tags: ["apparel", "men", "women", "lifestyle", "cotton"],
    category: "apparel",
    collection: "apparel",
    rating: 4.4,
    reviewCount: 33,
    reviews: [
      { id: "r7", author: "Riley D.", rating: 4, title: "Super comfortable", body: "Perfect fit and the fabric feels premium. Would buy again.", date: "2026-02-10" },
    ],
    createdAt: "2026-01-20",
  },
  {
    id: "p7",
    handle: "aero-tee",
    title: "Aero Dri-Fit Tee",
    description:
      "Moisture-wicking performance tee built for high-intensity workouts. Lightweight, breathable, and designed to keep you cool and dry.",
    price: 49,
    compareAtPrice: 59,
    images: [
      { src: "https://images.unsplash.com/photo-1687444365871-a2e06ff2295a?w=600&auto=format&fit=crop", alt: "Aero Dri-Fit Tee – front view" },
      { src: "https://images.unsplash.com/photo-1687444275881-b5ec0e34163d?w=600&auto=format&fit=crop", alt: "Aero Dri-Fit Tee – back view" },
    ],
    variants: [
      { id: "p7-s-wht", title: "S / White", sku: "ADT-S-WHT", price: 49, compareAtPrice: 59, available: true, size: "S", color: "White", colorHex: "#ffffff" },
      { id: "p7-m-wht", title: "M / White", sku: "ADT-M-WHT", price: 49, compareAtPrice: 59, available: true, size: "M", color: "White", colorHex: "#ffffff" },
      { id: "p7-l-wht", title: "L / White", sku: "ADT-L-WHT", price: 49, compareAtPrice: 59, available: true, size: "L", color: "White", colorHex: "#ffffff" },
      { id: "p7-s-blk", title: "S / Black", sku: "ADT-S-BLK", price: 49, compareAtPrice: 59, available: true, size: "S", color: "Black", colorHex: "#000000" },
      { id: "p7-m-blk", title: "M / Black", sku: "ADT-M-BLK", price: 49, compareAtPrice: 59, available: false, size: "M", color: "Black", colorHex: "#000000" },
    ],
    badges: ["sale"],
    tags: ["apparel", "men", "women", "training", "performance"],
    category: "apparel",
    collection: "apparel",
    rating: 4.2,
    reviewCount: 89,
    reviews: [
      { id: "r8", author: "Avery N.", rating: 5, title: "Staple training tee", body: "Lightweight, dries fast, and fits true to size.", date: "2026-01-30" },
    ],
    createdAt: "2026-01-01",
  },
  {
    id: "p8",
    handle: "stride-short-2in1",
    title: "Stride 2-in-1 Short",
    description:
      "A dual-layer running short with a lightweight outer shell and compressive inner brief. Built-in phone pocket and reflective details for early morning runs.",
    price: 69,
    compareAtPrice: null,
    images: [
      { src: "https://images.unsplash.com/photo-1594101173594-b4dc450c64b8?w=600&auto=format&fit=crop", alt: "Stride 2-in-1 Short – front view" },
      { src: "https://images.unsplash.com/photo-1594101226350-4793a5b5e048?q=80&w=687&auto=format&fit=crop", alt: "Stride 2-in-1 Short – pocket detail" },
    ],
    variants: [
      { id: "p8-s-blk", title: "S / Black", sku: "S2S-S-BLK", price: 69, compareAtPrice: null, available: true, size: "S", color: "Black", colorHex: "#000000" },
      { id: "p8-m-blk", title: "M / Black", sku: "S2S-M-BLK", price: 69, compareAtPrice: null, available: true, size: "M", color: "Black", colorHex: "#000000" },
      { id: "p8-l-blk", title: "L / Black", sku: "S2S-L-BLK", price: 69, compareAtPrice: null, available: true, size: "L", color: "Black", colorHex: "#000000" },
      { id: "p8-m-nvy", title: "M / Navy", sku: "S2S-M-NVY", price: 69, compareAtPrice: null, available: true, size: "M", color: "Navy", colorHex: "#1e3a5f" },
    ],
    badges: [],
    tags: ["apparel", "men", "running", "training"],
    category: "apparel",
    collection: "apparel",
    rating: 4.5,
    reviewCount: 47,
    reviews: [
      { id: "r9", author: "Drew S.", rating: 5, title: "Best running shorts", body: "The phone pocket is a game-changer. No more armband.", date: "2026-03-05" },
    ],
    createdAt: "2026-02-01",
  },
  {
    id: "p9",
    handle: "recovery-slide-sandal",
    title: "Recovery Slide Sandal",
    description:
      "Post-run recovery starts here. Our Recovery Slide features a contoured footbed with massaging nubs and a shock-absorbing EVA midsole.",
    price: 59,
    compareAtPrice: null,
    images: [
      { src: "https://images.unsplash.com/photo-1547586877-0351a7143cbe?w=600&auto=format&fit=crop", alt: "Recovery Slide Sandal – top view" },
      { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1170&auto=format&fit=crop", alt: "Recovery Slide Sandal – side view" },
    ],
    variants: [
      { id: "p9-m-blk", title: "M / Black", sku: "RSS-M-BLK", price: 59, compareAtPrice: null, available: true, size: "M", color: "Black", colorHex: "#000000" },
      { id: "p9-l-blk", title: "L / Black", sku: "RSS-L-BLK", price: 59, compareAtPrice: null, available: true, size: "L", color: "Black", colorHex: "#000000" },
      { id: "p9-xl-blk", title: "XL / Black", sku: "RSS-XL-BLK", price: 59, compareAtPrice: null, available: true, size: "XL", color: "Black", colorHex: "#000000" },
    ],
    badges: [],
    tags: ["footwear", "men", "women", "recovery", "lifestyle"],
    category: "accessories",
    collection: "accessories",
    rating: 4.1,
    reviewCount: 28,
    reviews: [
      { id: "r10", author: "Quinn B.", rating: 4, title: "Great for recovery days", body: "Really helps my feet relax after long runs.", date: "2026-03-18" },
    ],
    createdAt: "2026-02-10",
  },
  {
    id: "p10",
    handle: "hydro-fast-water-bottle",
    title: "HydroFast 750ml Bottle",
    description:
      "Insulated stainless steel water bottle with a sport cap and measurement markings. Keeps drinks cold for 24 hours or hot for 12.",
    price: 39,
    compareAtPrice: 45,
    images: [
      { src: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "HydroFast 750ml Bottle – front view" },
      { src: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8", alt: "HydroFast 750ml Bottle – alternative view" },
    ],
    variants: [
      { id: "p10-one-blk", title: "One Size / Black", sku: "HFB-OS-BLK", price: 39, compareAtPrice: 45, available: true, size: "One Size", color: "Black", colorHex: "#000000" },
      { id: "p10-one-wht", title: "One Size / White", sku: "HFB-OS-WHT", price: 39, compareAtPrice: 45, available: true, size: "One Size", color: "White", colorHex: "#ffffff" },
      { id: "p10-one-lime", title: "One Size / Lime", sku: "HFB-OS-LIME", price: 39, compareAtPrice: 45, available: true, size: "One Size", color: "Lime", colorHex: "#84cc16" },
    ],
    badges: ["sale"],
    tags: ["accessories", "hydration", "training"],
    category: "accessories",
    collection: "accessories",
    rating: 4.6,
    reviewCount: 115,
    reviews: [
      { id: "r11", author: "Jamie W.", rating: 5, title: "Keeps ice cold all day", body: "Took this on a 20-mile run and the water was still cold.", date: "2026-04-01" },
    ],
    createdAt: "2026-01-15",
  },
  {
    id: "p11",
    handle: "new-balance-fresh-foam-x-1080v14",
    title: "Fresh Foam X 1080v14",
    description:
      "The latest evolution of New Balance's flagship running shoe, featuring Fresh Foam X cushioning for exceptional comfort, engineered mesh for breathability, and a redesigned outsole for smoother transitions during every run.",
    price: 189,
    compareAtPrice: 219,
    images: [
      { src: "https://images.unsplash.com/photo-1685273407542-85c1a354850b?q=80&w=764&auto=format&fit=crop", alt: "Fresh Foam X 1080v14 – side view" },
      { src: "https://images.unsplash.com/photo-1723740220352-b9a6e7552149?w=600&auto=format&fit=crop", alt: "Fresh Foam X 1080v14 – top view" },
    ],
    variants: [
      { id: "p11-8-gry", title: "US 8 / Grey", sku: "NB1080-8-GRY", price: 189, compareAtPrice: 219, available: true, size: "US 8", color: "Grey", colorHex: "#6b7280" },
      { id: "p11-9-gry", title: "US 9 / Grey", sku: "NB1080-9-GRY", price: 189, compareAtPrice: 219, available: true, size: "US 9", color: "Grey", colorHex: "#6b7280" },
      { id: "p11-10-nvy", title: "US 10 / Navy", sku: "NB1080-10-NVY", price: 189, compareAtPrice: 219, available: true, size: "US 10", color: "Navy", colorHex: "#1e3a5f" },
      { id: "p11-11-blk", title: "US 11 / Black", sku: "NB1080-11-BLK", price: 189, compareAtPrice: 219, available: true, size: "US 11", color: "Black", colorHex: "#000000" },
    ],
    badges: ["new"],
    tags: ["footwear", "running", "men", "new-balance"],
    category: "footwear",
    collection: "running",
    rating: 4.8,
    reviewCount: 326,
    reviews: [
      { id: "r21", author: "Daniel P.", rating: 5, title: "Super comfortable", body: "Perfect for daily training and long runs. Cushioning feels amazing.", date: "2026-04-15" },
    ],
    createdAt: "2026-01-18",
  },
  {
    id: "p12",
    handle: "woodland-trekker-pro",
    title: "Woodland Trekker Pro",
    description:
      "A rugged outdoor shoe built for hiking and everyday adventure. Features premium leather construction, deep-grip rubber outsole, water-resistant protection, and all-day comfort on challenging terrain.",
    price: 129,
    compareAtPrice: 159,
    images: [
      { src: "https://images.unsplash.com/photo-1667314614474-79460e9eef88?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dh", alt: "Woodland Trekker Pro – side view" },
      { src: "https://images.unsplash.com/photo-1667314614949-e7e45c8074fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Woodland Trekker Pro – alternative field view" },
    ],
    variants: [
      { id: "p12-8-brn", title: "US 8 / Brown", sku: "WTP-8-BRN", price: 129, compareAtPrice: 159, available: true, size: "US 8", color: "Brown", colorHex: "#7c4a21" },
      { id: "p12-9-brn", title: "US 9 / Brown", sku: "WTP-9-BRN", price: 129, compareAtPrice: 159, available: true, size: "US 9", color: "Brown", colorHex: "#7c4a21" },
      { id: "p12-10-olv", title: "US 10 / Olive", sku: "WTP-10-OLV", price: 129, compareAtPrice: 159, available: true, size: "US 10", color: "Olive", colorHex: "#556b2f" },
      { id: "p12-11-blk", title: "US 11 / Black", sku: "WTP-11-BLK", price: 129, compareAtPrice: 159, available: true, size: "US 11", color: "Black", colorHex: "#000000" },
    ],
    badges: ["new"],
    tags: ["footwear", "hiking", "outdoor", "woodland"],
    category: "footwear",
    collection: "outdoor",
    rating: 4.6,
    reviewCount: 184,
    reviews: [
      { id: "r22", author: "Rahul K.", rating: 5, title: "Built like a tank", body: "Excellent grip and durability for trekking and rough terrain.", date: "2026-05-10" },
    ],
    createdAt: "2026-02-12",
  },
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