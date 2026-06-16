import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AboutStory() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[color:var(--color-border)]">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="group relative w-full aspect-square lg:aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1706550633858-dcf3983fdf86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Keiton product craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <span className="text-caption font-medium uppercase tracking-widest text-muted-foreground">
              Our Story
            </span>
            <h2 className="mt-4 text-h2 font-semibold tracking-tight">
              Engineered for Every Mile
            </h2>
            <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
              Keiton was founded in 2020 by a team of runners and designers who
              believed that performance gear should never compromise on comfort
              or style. What started as a small workshop soon became a movement
              backed by thousands of athletes worldwide.
            </p>
            <p className="mt-4 text-body-md leading-relaxed text-muted-foreground">
              Every product is developed in collaboration with sports scientists
              and tested by real athletes. From the lab to the pavement, we
              obsess over every stitch, sole, and seam so you can focus on the
              finish line.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/shop" variant="primary" size="md">
                Shop Collection
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
