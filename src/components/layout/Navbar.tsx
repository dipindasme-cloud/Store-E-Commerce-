"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop" },
      { label: "Running Shoes", href: "/collections/running-shoes" },
      { label: "Training Shoes", href: "/collections/training-shoes" },
      { label: "Trail & Hiking", href: "/collections/trail-shoes" },
      { label: "Apparel", href: "/collections/apparel" },
      { label: "Accessories", href: "/collections/accessories" },
    ],
  },
  { label: "Sale", href: "/collections/sale" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type MegaNavLink = (typeof navLinks)[number];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function toggleDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.2em] md:text-xl"
          >
            KEITON
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="flex items-center gap-1 rounded-full px-4 py-2 text-body-sm font-medium transition-colors hover:bg-muted"
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <svg
                        className={`h-3 w-3 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div
                        className="absolute left-0 top-full mt-1 w-56 rounded-xl border border-border bg-background p-2 shadow-lg"
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-4 py-2.5 text-body-sm transition-colors hover:bg-muted"
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
                    className="rounded-full px-4 py-2 text-body-sm font-medium transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              aria-label="Search"
              className="rounded-full p-2.5 transition-colors hover:bg-muted"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13.5 13.5L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button
              aria-label="Account"
              className="rounded-full p-2.5 transition-colors hover:bg-muted"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 18C3 14.6863 6.13401 12 10 12C13.866 12 17 14.6863 17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button
              aria-label="Cart"
              className="relative rounded-full p-2.5 transition-colors hover:bg-muted"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                <path d="M3 4H4.5L6.5 13H16L18 6H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="17" r="1" fill="currentColor" />
                <circle cx="15" cy="17" r="1" fill="currentColor" />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[0.625rem] font-medium text-primary-foreground">
                0
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex flex-col gap-1 p-2 md:hidden"
          >
            <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </Container>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-body-sm font-medium transition-colors hover:bg-muted"
                      >
                        {link.label}
                        <svg
                          className={`h-3 w-3 transition-transform duration-200 ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 flex flex-col gap-1 pb-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-4 py-2.5 text-body-sm transition-colors hover:bg-muted"
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
                      className="block rounded-lg px-4 py-3 text-body-sm font-medium transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile actions */}
            <div className="flex items-center gap-4 border-t border-border py-4">
              <Button href="/shop" variant="primary" size="md" className="flex-1">
                Shop Now
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
