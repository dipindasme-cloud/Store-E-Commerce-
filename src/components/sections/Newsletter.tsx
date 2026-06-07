"use client";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-medium uppercase tracking-widest text-muted-foreground">
            Newsletter
          </span>
          <h2 className="mt-4 text-h2 font-semibold tracking-tight">
            Run With Us
          </h2>
          <p className="mt-3 text-body-md text-muted-foreground">
            Get early access to new drops, training tips, and exclusive offers
            delivered to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-body-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 sm:max-w-sm"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-caption text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}
