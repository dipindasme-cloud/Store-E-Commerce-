"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/newarrivals" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop?page=1" },
      { label: "Running Shoes", href: "/shop?page=1" },
      { label: "Training Shoes", href: "/shop?page=1" },
      { label: "Trail & Hiking", href: "/shop?page=1" },
      { label: "Apparel", href: "/shop?page=1" },
      { label: "Accessories", href: "/shop?page=1" },
    ],
  },
  {
    label: "More",
    href: "/More",
    children: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Navbar() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.05] bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-[4rem] items-center justify-between gap-30 md:h-[5rem]">
          
          {/* 1. Brand Identity */}
          <Link
            href="/"
            className="text-[1.125rem] font-bold tracking-[0.18em] text-[#000000] focus:outline-hidden sm:text-[1.25rem] shrink-0"
          >
            KEITON
          </Link>

          {/* 2. Desktop Nav Architecture */}
          <nav className="hidden items-center gap-[0.25rem] lg:gap-[0.5rem] md:flex">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                onMouseLeave={() => link.children && handleMouseLeave()}
              >
                {link.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className={`
                        flex items-center gap-[0.375rem] rounded-full px-[0.75rem] lg:px-[1rem] py-[0.5rem] 
                        text-[0.875rem] font-medium tracking-wide text-[#111111] transition-all duration-200
                        ${openDropdown === link.label ? "bg-[#f5f5f5] text-[#e47638]" : "hover:bg-[#f5f5f5]"}
                      `}
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <svg
                        className={`h-[0.75rem] w-[0.75rem] transition-transform duration-300 ease-out ${
                          openDropdown === link.label ? "rotate-180 text-[#e47638]" : "text-[#777777]"
                        }`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      className={`
                        absolute left-0 top-[100%] mt-[0.25rem] w-[15rem] rounded-xl 
                        border border-[#f0f0f0] bg-white p-[0.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${openDropdown === link.label 
                          ? "opacity-100 visible translate-y-0" 
                          : "opacity-0 invisible -translate-y-[0.5rem] pointer-events-none"
                        }
                      `}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-[1rem] py-[0.625rem] text-[0.875rem] font-medium text-[#444444] transition-colors hover:bg-[#f5f5f5] hover:text-[#e47638]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="relative block rounded-full px-[0.75rem] lg:px-[1rem] py-[0.5rem] text-[0.875rem] font-medium tracking-wide text-[#111111] transition-colors hover:bg-[#f5f5f5] hover:text-[#e47638]"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* 3. Refactored Desktop Persistent Field Search & Action Strip */}
          <div className="hidden items-center gap-[0.5rem] md:flex flex-1 max-w-full justify-end ml-auto">
            
            {/* Persistent Field Search Input Method */}
            <form action="/shop" className="relative w-full group">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-[2.5rem] pl-[2.5rem] pr-[1rem] rounded-full bg-[#f5f5f5] border border-transparent text-[0.875rem] text-neutral-900 placeholder-neutral-400 focus:outline-hidden focus:bg-white focus:border-neutral-300 transition-all"
              />
              <span className="absolute left-[1rem] top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#e47638] transition-colors">
                <svg className="h-[1.1rem] w-[1.1rem]" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M13.5 13.5L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </form>

            {/* Profile Action Link Button */}
            <Link
              href="/profile"
              aria-label="View Account Profile"
              className="rounded-full p-[0.625rem] text-[#111111] transition-colors hover:bg-[#f5f5f5] hover:text-[#e47638] focus:outline-hidden shrink-0"
            >
              <svg className="h-[1.25rem] w-[1.25rem]" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.75" />
                <path d="M3 18C3 14.6863 6.13401 12 10 12C13.866 12 17 14.6863 17 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </Link>

            {/* Shopping Cart Action Link Button */}
            <Link
              href="/wishlist"
              aria-label="View Wishlist"
              className="relative rounded-full p-[0.625rem] text-[#111111] transition-colors hover:bg-[#f5f5f5] hover:text-[#e47638] focus:outline-hidden shrink-0"
            >
              <svg className="h-[1.25rem] w-[1.25rem]" viewBox="0 0 20 20" fill="none">
                <path d="M10 17.25l-.95-.85C5.4 13.14 3 10.96 3 8.35 3 6.22 4.62 4.5 6.75 4.5c1.21 0 2.37.56 3.25 1.44.88-.88 2.04-1.44 3.25-1.44 2.13 0 3.75 1.72 3.75 3.85 0 2.61-2.4 4.79-6.05 8.06l-.95.89z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              
              
            </Link>

            {/* Shopping Cart Action Link Button */}
            <Link
              href="/cart"
              aria-label="View Shopping Cart"
              className="relative rounded-full p-[0.625rem] text-[#111111] transition-colors hover:bg-[#f5f5f5] hover:text-[#e47638] focus:outline-hidden shrink-0"
            >
              <svg className="h-[1.25rem] w-[1.25rem]" viewBox="0 0 20 20" fill="none">
                <path d="M3 4H4.5L6.5 13H16L18 6H5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="17" r="1" fill="currentColor" />
                <circle cx="15" cy="17" r="1" fill="currentColor" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute right-[0.125rem] top-[0.125rem] flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-[#e47638] text-[0.625rem] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* 4. Mobile Mode Controls Grid Header Layer */}
          <div className="flex items-center gap-[0.25rem] md:hidden ml-auto">
            
            {/* Standalone Route Search Icon Button for Separated Page Flow */}
            <Link
              href="/search"
              aria-label="Open search interface page"
              className="rounded-full p-[0.625rem] text-[#111111] transition-colors active:bg-[#f5f5f5]"
            >
              <svg className="h-[1.35rem] w-[1.35rem]" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                <path d="M13.5 13.5L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>

            {/* Mobile Header Cart Icon fallback for immediate purchase flow */}
            <Link
              href="/cart"
              aria-label="View Shopping Cart"
              className="relative rounded-full p-[0.625rem] text-[#111111] active:bg-[#f5f5f5]"
            >
              <svg className="h-[1.35rem] w-[1.35rem]" viewBox="0 0 20 20" fill="none">
                <path d="M3 4H4.5L6.5 13H16L18 6H5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute right-[0.125rem] top-[0.125rem] flex h-[0.95rem] w-[0.95rem] items-center justify-center rounded-full bg-[#e47638] text-[0.55rem] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Hamburger Toggle Action Button */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex flex-col justify-center items-center gap-[0.25rem] h-[2.5rem] w-[2.5rem] rounded-full transition-colors active:bg-[#f5f5f5]"
            >
              <span className={`block h-[1.5px] w-[1.25rem] bg-black transition-all duration-300 ${mobileOpen ? "translate-y-[5.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-[1.25rem] bg-black transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-[1.25rem] bg-black transition-all duration-300 ${mobileOpen ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
            </button>
          </div>

        </div>
      </Container>

      {/* 5. Mobile Accordion Overlay Drawer with Internal Profile & Cart Tabs */}
      {mobileOpen && (
        <div className="border-t border-[#f0f0f0] bg-white md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <Container>
            <nav className="flex flex-col gap-[0.25rem] py-[1rem]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="flex w-full items-center justify-between rounded-lg px-[1rem] py-[0.75rem] text-[0.937rem] font-medium text-[#111111]"
                      >
                        {link.label}
                        <svg
                          className={`h-[0.75rem] w-[0.75rem] text-[#777777] transition-transform duration-200 ${
                            openDropdown === link.label ? "rotate-180 text-[#e47638]" : ""
                          }`}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      
                      {openDropdown === link.label && (
                        <div className="ml-[1rem] mt-[0.125rem] flex flex-col gap-[0.125rem] border-l-2 border-[#f0f0f0] pl-[0.5rem] pb-[0.5rem]">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-[1rem] py-[0.625rem] text-[0.875rem] font-medium text-[#555555] active:bg-[#f5f5f5]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-[1rem] py-[0.75rem] text-[0.937rem] font-medium text-[#111111] active:bg-[#f5f5f5]"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Utility Profile & Cart Tabs inside Hamburger Drawer Menu */}
              <div className="mt-4 pt-4 border-t border-[#f5f5f5] flex flex-col gap-[0.25rem]">
                <Link
                  href="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-[1rem] py-[0.75rem] text-[0.937rem] font-medium text-[#111111] active:bg-[#f5f5f5]"
                >
                  <svg className="h-[1.25rem] w-[1.25rem] text-neutral-500" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.75" />
                    <path d="M3 18C3 14.6863 6.13401 12 10 12C13.866 12 17 14.6863 17 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                  My Profile Account
                </Link>

                <Link
                  href="/wishlist"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-lg px-[1rem] py-[0.75rem] text-[0.937rem] font-medium text-[#111111] active:bg-[#f5f5f5]"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-[1.25rem] w-[1.25rem] text-neutral-500" viewBox="0 0 20 20" fill="none">
  <path 
    d="M10 17.25l-.95-.85C5.4 13.14 3 10.96 3 8.35 3 6.22 4.62 4.5 6.75 4.5c1.21 0 2.37.56 3.25 1.44.88-.88 2.04-1.44 3.25-1.44 2.13 0 3.75 1.72 3.75 3.85 0 2.61-2.4 4.79-6.05 8.06l-.95.89z" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  />
</svg>
                    <span>Wishlist</span>
                  </div>
                  {itemCount > 0 && (
                    <span className="flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded-full bg-[#e47638] text-[0.6875rem] font-bold text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </nav>

            <div className="flex flex-col gap-[1rem] border-t border-[#f0f0f0] py-[1.25rem]">
              <Button href="/shop" variant="primary" size="md" className="w-full justify-center py-[0.75rem] font-semibold text-[0.875rem]">
                Shop Now
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}