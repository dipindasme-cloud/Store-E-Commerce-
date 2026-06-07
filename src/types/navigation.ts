export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export type MegaMenuImageBlock = {
  src: string;
  alt: string;
  href: string;
  caption?: string;
};

export type MegaMenuBlogBlock = {
  title: string;
  excerpt: string;
  href: string;
  image?: string;
};

export type MegaMenuItem = {
  label: string;
  href: string;
  columns?: {
    heading?: string;
    links: NavLink[];
  }[];
  imageBlocks?: MegaMenuImageBlock[];
  blogBlocks?: MegaMenuBlogBlock[];
};

export type NavItem = {
  label: string;
  href: string;
  megaMenu?: MegaMenuItem;
  children?: NavLink[];
};

export type MobileMenu = {
  isOpen: boolean;
  activeIndex: number | null;
};

export type Navigation = {
  main: NavItem[];
  secondary: NavLink[];
};
