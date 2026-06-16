"use client";

import React, { useRef } from "react";
import Container from "@/components/ui/Container";

interface TestimonialItem {
  id: string;
  rating: number;
  review: string;
  author: string;
  verified: boolean;
  purchasedItem: string;
  date: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    rating: 5,
    review: "The Vaporfly Flux feels like walking on clouds. I was skeptical about the responsive sizing, but it fits perfectly true to size. The premium knit upper breathes incredibly well during long mileage runs.",
    author: "Marcus K.",
    verified: true,
    purchasedItem: "Vaporfly Flux Kinetic",
    date: "2 days ago"
  },
  {
    id: "t2",
    rating: 5,
    review: "Absolutely stunning architecture on these shoes. They manage to hold a sleek, high-fashion profile while offering genuine athletic arch support. Shipping was flawless.",
    author: "Arjun M.",
    verified: true,
    purchasedItem: "Forum Mod Mid Lux",
    date: "1 week ago"
  },
  {
    id: "t3",
    rating: 5,
    review: "Incredible cushioning on the heel strike zone. I wore them straight out of the box for an entire weekend shift and experienced zero friction or blisters. Will definitely be picking up another colorway soon.",
    author: "Sarah L.",
    verified: true,
    purchasedItem: "Air Max Pulse",
    date: "2 weeks ago"
  }
];

export const TestimonialDeck: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const offset = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section className="section bg-muted overflow-hidden border-b border-border">
      <Container>
        
        {/* Header Block Setup — Auto Layout Frame */}
        <header className="flex items-end justify-between mb-[2.5rem] md:mb-[3rem]">
          <div className="flex flex-col gap-[0.25rem]">
            <span className="text-overline uppercase font-bold tracking-widest text-muted-foreground">
              Community Feedback
            </span>
            <h2 className="text-h2 font-bold tracking-tight text-foreground lowercase first-letter:uppercase">
              What our runners say
            </h2>
          </div>
          
          {/* Slider Layout Controls — Hidden on desktop when items fit container dimensions */}
          <div className="flex items-center gap-[0.5rem] sm:hidden lg:flex">
            <button 
              onClick={() => scroll("left")}
              aria-label="Scroll testimonials left"
              className="w-[2.5rem] h-[2.5rem] border border-border bg-background rounded-full flex items-center justify-center text-body-md text-foreground hover:bg-foreground hover:text-background transition-colors duration-200 focus-ring-custom focus-visible:outline-hidden"
            >
              ←
            </button>
            <button 
              onClick={() => scroll("right")}
              aria-label="Scroll testimonials right"
              className="w-[2.5rem] h-[2.5rem] border border-border bg-background rounded-full flex items-center justify-center text-body-md text-foreground hover:bg-foreground hover:text-background transition-colors duration-200 focus-ring-custom focus-visible:outline-hidden"
            >
              →
            </button>
          </div>
        </header>

        {/* Horizontal Scroll Deck Framework to Wrapped Flow Vector Layout */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-row overflow-x-auto sm:flex-wrap justify-start items-stretch gap-[1.25rem] w-full pb-[1.5rem] sm:pb-0 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS_DATA.map((item) => (
            <div 
              key={item.id} 
              className="w-[18.5rem] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)] flex-shrink-0 snap-start bg-background border border-border rounded-lg p-[1.5rem] md:p-[2rem] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
            >
              <div>
                {/* Star Metric Row & Historical Date */}
                <div className="flex items-center justify-between mb-[1rem]">
                  <div className="flex items-center gap-[0.125rem] text-highlights">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <svg key={i} className="h-[1rem] w-[1rem]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-caption text-muted-foreground font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Body Content Block */}
                <p className="text-body-sm leading-relaxed text-muted-foreground font-medium mb-[1.5rem] italic">
                  "{item.review}"
                </p>
              </div>

              {/* Shoe Variant Meta Footer Info */}
              <div className="border-t border-border pt-[1rem] mt-auto flex flex-col gap-[0.25rem]">
                <div className="flex items-center gap-[0.5rem]">
                  <span className="text-body-sm font-bold text-foreground">
                    {item.author}
                  </span>
                  {item.verified && (
                    <span className="inline-flex items-center gap-[0.25rem] text-[0.625rem] font-bold tracking-wide uppercase px-[0.5rem] py-[0.125rem] rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <svg className="h-[0.625rem] w-[0.625rem]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
                
                {/* Specific Purchased Shoe Style Subtext Mapping */}
                <div className="text-caption text-muted-foreground font-medium">
                  Style: <span className="text-foreground font-semibold">{item.purchasedItem}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialDeck;