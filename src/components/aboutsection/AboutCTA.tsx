import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-20 md:py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1600&auto=format&fit=crop"
          alt="Runners on a coastal trail at sunrise"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 font-bold tracking-tight text-white">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-body-lg leading-relaxed text-neutral-300">
            Join thousands of athletes who trust Keiton for their training,
            recovery, and race day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/shop" variant="primary" size="lg">
              Shop Now
            </PrimaryButton>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white hover:text-neutral-900"
            >
              Contact Us
            </Button>
          </div>
        </div>
        
      </Container>
    </section>
  );
}
