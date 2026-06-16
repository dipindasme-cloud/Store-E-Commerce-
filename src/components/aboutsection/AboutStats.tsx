import Container from "@/components/ui/Container";

const stats = [
  { value: "15+", label: "Years in Sport" },
  { value: "50K+", label: "Athletes" },
  { value: "200+", label: "Products" },
  { value: "4.8", label: "Avg Rating" },
];

export default function AboutStats() {
  return (
    <section className="section bg-neutral-900 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-display-lg font-bold tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-body-sm font-medium uppercase tracking-widest text-neutral-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
