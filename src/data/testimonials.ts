export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    avatar: "/images/avatar-1.jpg",
    quote:
      "The Air Velocity Runner completely changed my training. Lightweight, responsive, and incredibly comfortable — I've already recommended them to my entire running club.",
    rating: 5,
  },
  {
    id: "t2",
    name: "James Cortez",
    role: "Triathlete",
    avatar: "/images/avatar-2.jpg",
    quote:
      "I've worn every major brand, and Keiton's SpeedLite Elite is the first shoe that genuinely felt different. The carbon plate propulsion is something you have to experience.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Emily Zhao",
    role: "Fitness Coach",
    avatar: "/images/avatar-3.jpg",
    quote:
      "The quality-to-price ratio is unmatched. My clients are always asking where I get my gear. The Aero Tee is a staple in every workout I do.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Marcus Allen",
    role: "Trail Runner",
    avatar: "/images/avatar-4.jpg",
    quote:
      "Trail Blazer GTX handled everything from muddy singletrack to rocky descents without missing a beat. Dry feet, solid grip, zero complaints.",
    rating: 4,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.rating >= 4);
}
