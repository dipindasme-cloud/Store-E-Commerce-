import Container from "@/components/ui/Container";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    title: "Free Shipping",
    description: "Free shipping on all orders over $100. Delivered within 3–5 business days.",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C12 22 4 16 4 10C4 6 8 2 12 2C16 2 20 6 20 10C20 16 12 22 12 22Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    title: "30-Day Returns",
    description: "Not satisfied? Return any unused item within 30 days for a full refund.",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    ),
    title: "2-Year Warranty",
    description: "Every pair of Keiton shoes is backed by our two-year manufacturing warranty.",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="M3 21C3 16.5 7 13 12 13C17 13 21 16.5 21 21" />
      </svg>
    ),
    title: "Expert Support",
    description: "Real athletes answering your questions. Live chat 7 days a week.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-h4 font-semibold">{feature.title}</h3>
              <p className="mt-2 max-w-xs text-body-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
