import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const { name, role, avatar, quote, rating } = testimonial;

  return (
    <figure className="flex flex-col gap-5 rounded-xl border border-border p-6 md:p-8">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-foreground" : "text-border"
            }`}
            viewBox="0 0 14 14"
            fill="currentColor"
          >
            <path d="M7 0L9.05 4.05L13 4.9L10.5 7.7L11.18 12L7 10.05L2.82 12L3.5 7.7L1 4.9L4.95 4.05L7 0Z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-body-md leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <figcaption className="mt-auto flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-body-sm font-medium text-muted-foreground">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <span className="block text-body-sm font-medium">{name}</span>
          <span className="block text-caption text-muted-foreground">
            {role}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
