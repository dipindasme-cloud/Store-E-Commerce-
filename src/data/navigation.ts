import type { Navigation, NavItem } from "@/types/navigation";

const main: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
    megaMenu: {
      label: "Shop",
      href: "/shop",
      columns: [
        {
          heading: "Footwear",
          links: [
            { label: "Running Shoes", href: "/collections/running-shoes" },
            { label: "Training Shoes", href: "/collections/training-shoes" },
            { label: "Trail & Hiking", href: "/collections/trail-shoes" },
            { label: "Racing", href: "/collections/racing-shoes" },
            { label: "Slides & Sandals", href: "/collections/slides" },
          ],
        },
        {
          heading: "Apparel",
          links: [
            { label: "Tops & Tees", href: "/collections/tops" },
            { label: "Bottoms", href: "/collections/bottoms" },
            { label: "Outerwear", href: "/collections/outerwear" },
            { label: "Compression", href: "/collections/compression" },
          ],
        },
        {
          heading: "Accessories",
          links: [
            { label: "Hydration", href: "/collections/hydration" },
            { label: "Bags & Packs", href: "/collections/bags" },
            { label: "Recovery", href: "/collections/recovery" },
            { label: "Socks", href: "/collections/socks" },
          ],
        },
      ],
      imageBlocks: [
        {
          src: "/images/mega-runner.jpg",
          alt: "New Air Velocity Runner",
          href: "/products/air-velocity-runner",
          caption: "Air Velocity Runner — Now Available",
        },
        {
          src: "/images/mega-apparel.jpg",
          alt: "Performance apparel collection",
          href: "/collections/apparel",
          caption: "Shop Performance Apparel",
        },
      ],
    },
  },
  {
    label: "New Arrivals",
    href: "/collections/new-arrivals",
  },
  {
    label: "Sale",
    href: "/collections/sale",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const secondary: NavItem[] = [
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Shipping",
    href: "/shipping",
  },
  {
    label: "Returns",
    href: "/returns",
  },
];

export const navigation: Navigation = {
  main,
  secondary,
};

export function getNavItemByLabel(label: string): NavItem | undefined {
  return [...main, ...secondary].find((item) => item.label === label);
}
