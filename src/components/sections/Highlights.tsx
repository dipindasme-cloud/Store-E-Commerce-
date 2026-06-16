import React from 'react';
import Container from "@/components/ui/Container";
import { ProductBannerCard } from "@/components/ui/ProductBannerCard";
import SlideUpButton from "@/components/ui/SlideUpButton";

export default function Highlights() {
  return (
    <section className="py-[5rem] md:py-[6rem] bg-muted">
      <Container>
        <div className="grid grid-cols-1 gap-[1.25rem] sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          
          {/* Card 1: Premium Forest Green Radial-Style Linear Gradient */}
          <ProductBannerCard
            subtitle="Up To 30%"
            title="Men's Shoes"
            imageSrc="/images/highlights/1 (2).png" 
            imageAlt="White Reebok Classic"
            buttonLink="/collections/mens-shoes"
            buttonText="Shop Now"
            // Smooth gradient that goes from a lighter green in the center-top to your deep dark green
            background= "linear-gradient(0deg, #E00A0A 0%, #750000 100%);" 
            ButtonComponent={SlideUpButton}
          />

          {/* Card 2: Modern Dark Sunset Gradient */}
          <ProductBannerCard
            subtitle="New Arrival"
            title="Women's Shoes"
            imageSrc="/images/highlights/4.png" 
            imageAlt="Women's running sneaker"
            buttonLink="/collections/womens-shoes"
            buttonText="Explore"
            // High-end premium sunset glow mix (Deep blue bleeding into muted purple)
            background="linear-gradient(135deg, #1E1B4B 0%, #4C1D95 50%, #701A75 100%)" 
            ButtonComponent={SlideUpButton}
          />

          {/* Card 3: Minimalist Charcoal Metallic Gradient */}
          <ProductBannerCard
            subtitle="Limited Edition"
            title="Running Gear"
            imageSrc="/images/highlights/1 (3).png" 
            imageAlt="Performance sports shoe"
            buttonLink="/collections/running"
            buttonText="Buy Now"
            // Sleek, minimal dark luxury tech aesthetic
            background="linear-gradient(225deg, #0F172A 0%, #334155 100%)" 
            ButtonComponent={SlideUpButton}
          />

        </div>
      </Container>
    </section>
  );
}