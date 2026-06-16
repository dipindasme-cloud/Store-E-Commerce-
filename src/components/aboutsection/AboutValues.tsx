import Container from "@/components/ui/Container";

const values = [
  {
    title: "Innovation",
    description:
      "We push the boundaries of sport science to create gear that adapts to you, not the other way around.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "Every material is chosen with the planet in mind. We're committed to 100% recycled packaging by 2027.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22L12 2l10 20H2z" />
        <path d="M12 18v-4" />
        <circle cx="12" cy="10" r="1" />
      </svg>
    ),
  },
  {
    title: "Performance",
    description:
      "Data-driven design meets real-world testing. If it doesn't improve your run, it doesn't make the cut.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We're more than a brand — we're a crew. From local run clubs to global events, we run together.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function AboutValues() {
  return (
    <section className="section bg-muted">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-medium uppercase tracking-widest text-muted-foreground">
            Our Values
          </span>
          <h2 className="mt-4 text-h2 font-semibold tracking-tight">
            What Drives Us
          </h2>
          <p className="mt-3 text-body-md text-muted-foreground">
            Four principles that guide every decision we make.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-sm">
                {value.icon}
              </div>
              <h3 className="mt-5 text-h4 font-semibold">{value.title}</h3>
              <p className="mt-2 max-w-xs text-body-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
