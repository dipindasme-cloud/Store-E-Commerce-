import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function BrandStory() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="aspect-4/5 overflow-hidden rounded-xl bg-muted">
            <img
              src="/images/brand-story.jpg"
              alt="Keiton brand story"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <span className="text-caption font-medium uppercase tracking-widest text-muted-foreground">
              Our Story
            </span>
            <h2 className="mt-4 text-h2 font-semibold tracking-tight">
              Built by Athletes, for Athletes
            </h2>
            <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
              Keiton was born on the track. Frustrated by gear that couldn&apos;t
              keep up, our founders set out to engineer performance footwear and
              apparel that bridges the gap between elite competition and everyday
              training.
            </p>
            <p className="mt-4 text-body-md leading-relaxed text-muted-foreground">
              Every product is tested by real runners, refined through data, and
              built to outlast the miles. No hype. Just honest performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about" variant="primary" size="md">
                Read More
              </Button>
              <Button href="/shop" variant="outline" size="md">
                Shop Collection
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
