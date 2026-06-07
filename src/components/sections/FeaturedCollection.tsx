import Container from "@/components/ui/Container";
import CollectionCard from "@/components/ui/CollectionCard";
import { collectionCards } from "@/data/collections";

export default function FeaturedCollection() {
  const featured = collectionCards.filter((c) =>
    ["featured", "new-arrivals", "apparel"].includes(c.id)
  );

  return (
    <section className="section">
      <Container>
        <div className="mb-10 md:mb-12">
          <h2 className="text-h2 font-semibold tracking-tight">
            Shop by Collection
          </h2>
          <p className="mt-3 text-body-sm text-muted-foreground">
            Curated categories built for every stride.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((collection, i) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              priority={i < 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
