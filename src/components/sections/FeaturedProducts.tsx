import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="section bg-muted">
      <Container>
        <div className="mb-10 flex items-end justify-between md:mb-12">
          <div>
            <h2 className="text-h2 font-semibold tracking-tight">
              Featured
            </h2>
            <p className="mt-3 text-body-sm text-muted-foreground">
              Our top-performing picks this season.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={i < 2}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
