import HeroSection from "@/components/sections/HeroSection";

import FeaturedProducts from "@/components/sections/ProductSection";
import BottomProductList from "@/components/sections/bottomproductlist";
import Highlights from "@/components/sections/Highlights";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Highlights />
      <FeaturedProducts />
      
      <BottomProductList />

      

    </>
  );
}