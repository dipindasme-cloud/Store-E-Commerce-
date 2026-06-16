"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useInView } from "@/lib/animations";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  { label: "Sale", href: "/collections/sale" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const customerLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Shipping & Delivery", href: "/shipping" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: "Strava",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="12 2 5 11 9 11 12 7 15 11 19 11" />
        <polyline points="12 12 8 19 10 19 12 15 14 19 16 19" />
      </svg>
    ),
  },
];

function LinkGroup({ title, links, delay = 0 }: { title: string; links: { label: string; href: string }[]; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}>
      <h4 className={`mb-4 text-body-sm font-semibold uppercase tracking-wider transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li
            key={link.label}
            className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${delay + i * 0.06}s` }}
          >
            <Link
              href={link.href}
              className="relative inline-block text-body-sm text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { ref: newsRef, inView: newsInView } = useInView();
  const { ref: brandRef, inView: brandInView } = useInView();
  const { ref: socialRef, inView: socialInView } = useInView();

  return (
    <footer className="border-t border-border bg-background">
      {/* Newsletter */}
      <div className="bg-muted py-12 md:py-16" ref={newsRef}>
        <Container>
          <div
            className={`mx-auto max-w-xl text-center transition-all duration-700 ease-out ${
              newsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-h3 font-semibold">Stay in the Loop</h3>
            <p className="mt-3 text-body-sm text-muted-foreground">
              Get early access to new drops, exclusive offers, and training tips.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                required
                className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-body-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 transition-shadow duration-300"
              />
              <Button type="submit" variant="primary" size="md" className="transition-all duration-300 hover:scale-105 active:scale-95">
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4 md:py-16">
          {/* Brand */}
          <div ref={brandRef} className="sm:col-span-2 md:col-span-1">
            <div
              className={`transition-all duration-700 ${
                brandInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link href="/" className="text-xl font-semibold tracking-[0.2em] transition-opacity duration-300 hover:opacity-70">
                KEITON
              </Link>
              <p className="mt-4 max-w-xs text-body-sm text-muted-foreground">
                Performance footwear and apparel engineered for athletes who demand more from every stride.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <LinkGroup title="Quick Links" links={quickLinks} delay={0.1} />

          {/* Customer Service */}
          <LinkGroup title="Customer Service" links={customerLinks} delay={0.2} />

          {/* Social + Contact */}
          <div ref={socialRef}>
            <h4
              className={`mb-4 text-body-sm font-semibold uppercase tracking-wider transition-all duration-500 ${
                socialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Connect
            </h4>
            <div
              className={`flex flex-wrap gap-3 transition-all duration-500 delay-150 ${
                socialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-foreground hover:text-foreground hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div
              className={`mt-6 space-y-1 text-body-sm text-muted-foreground transition-all duration-500 delay-300 ${
                socialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="transition-colors duration-300 hover:text-foreground">hello@keiton.com</p>
              <p className="transition-colors duration-300 hover:text-foreground">+1 (888) 555-0199</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <Container>
          <div className="flex flex-col items-center justify-between gap-2 py-6 text-body-sm text-muted-foreground md:flex-row">
            <p>&copy; {new Date().getFullYear()} KEITON. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="relative transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                Privacy
              </Link>
              <Link href="/terms" className="relative transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
