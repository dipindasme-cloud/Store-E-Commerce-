"use client";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Strava", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Newsletter */}
      <div className="bg-muted py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-xl text-center">
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
                className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-body-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
              />
              <Button type="submit" variant="primary" size="md">
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
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-[0.2em]">
              KEITON
            </Link>
            <p className="mt-4 max-w-xs text-body-sm text-muted-foreground">
              Performance footwear and apparel engineered for athletes who demand more from every stride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-body-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="mb-4 text-body-sm font-semibold uppercase tracking-wider">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {customerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h4 className="mb-4 text-body-sm font-semibold uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1 text-body-sm text-muted-foreground">
              <p>hello@keiton.com</p>
              <p>+1 (888) 555-0199</p>
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
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
