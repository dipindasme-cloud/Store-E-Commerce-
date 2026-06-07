import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section bg-muted">
      <Container>
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-h2 font-semibold tracking-tight">
            Trusted by Athletes
          </h2>
          <p className="mt-3 text-body-sm text-muted-foreground">
            Real stories from the running community.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
