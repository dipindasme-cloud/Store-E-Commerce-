"use client";

import React, { useState } from 'react';
import Container from "@/components/ui/Container";
import { BottomProductCard } from '../ui/BottomProductCard';
import OverlayDetails from './OverlayDetails'; // Imported overlay component

// Structural Type definitions updated to match Product shapes for your detailed views
interface ProductItem {
  id: string;
  title: string;
  price: number; // Swapped to number to pass raw values seamlessly down to checkout scripts
  images: { src: string }[];
  variants: { id: string; size: string; color: string; available: boolean }[];
}

interface ListColumn {
  title: string;
  products: ProductItem[];
}

const COLLECTION_DATA: ListColumn[] = [
  {
    title: 'FEATURED PRODUCTS',
    products: [
      { 
        id: 'feat-1', 
        title: 'Chuck Sneaker', 
        price: 80.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=880&auto=format&fit=crop' }],
        variants: [{ id: 'v1', size: 'UK 9', color: 'White', available: true }]
      },
      { 
        id: 'feat-2', 
        title: 'Cloudaway Sneaker', 
        price: 70.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1662411198835-c5a151d2af9e?q=80&w=765&auto=format&fit=crop' }],
        variants: [{ id: 'v2', size: 'UK 8', color: 'Black', available: true }]
      },
      { 
        id: 'feat-3', 
        title: 'Japan Spf', 
        price: 80.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=1025&auto=format&fit=crop' }],
        variants: [{ id: 'v3', size: 'UK 10', color: 'Grey', available: true }]
      },
    ],
  },
  {
    title: 'TOP RATED PRODUCTS',
    products: [
      { 
        id: 'rate-1', 
        title: 'Air Sneakers', 
        price: 60.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1746206434527-b02438fc36af?q=80&w=764&auto=format&fit=crop' }],
        variants: [{ id: 'v4', size: 'UK 9', color: 'Red', available: true }]
      },
      { 
        id: 'rate-2', 
        title: 'Classic Oxfords', 
        price: 60.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?q=80&w=1170&auto=format&fit=crop' }],
        variants: [{ id: 'v5', size: 'UK 9', color: 'Brown', available: true }]
      },
      { 
        id: 'rate-3', 
        title: 'Chukka Boots', 
        price: 80.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1637437757614-6491c8e915b5?q=80&w=1170&auto=format&fit=crop' }],
        variants: [{ id: 'v6', size: 'UK 10', color: 'Tan', available: true }]
      },
    ],
  },
  {
    title: 'TOP SALE PRODUCTS',
    products: [
      { 
        id: 'sale-1', 
        title: 'Running Sole', 
        price: 80.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1698440234045-a70721f8578d?q=80&w=1158&auto=format&fit=crop' }],
        variants: [{ id: 'v7', size: 'UK 8', color: 'Blue', available: true }]
      },
      { 
        id: 'sale-2', 
        title: 'Chuck 70', 
        price: 60.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1725271741195-f627c9ef84ec?w=600&auto=format&fit=crop' }],
        variants: [{ id: 'v8', size: 'UK 7', color: 'White', available: true }]
      },
      { 
        id: 'sale-3', 
        title: 'Cloudaway White', 
        price: 70.00, 
        images: [{ src: 'https://images.unsplash.com/photo-1699092372518-2dd5c28eb566?q=80&w=1170&auto=format&fit=crop' }],
        variants: [{ id: 'v9', size: 'UK 9', color: 'White', available: true }]
      },
    ],
  },
];

export const ProductListsSection: React.FC = () => {
  // Global section state tracking which product is highlighted in our immersive view overlay frame
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section className="py-[5rem] md:py-[6rem] bg-white overflow-hidden">
      <Container>
        
        {/* Rebuilt Grid Layout system to precise Figma Wrap Auto Layout framework */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-start items-start gap-x-[2rem] gap-y-[3rem] w-full">
          
          {COLLECTION_DATA.map((column, colIndex) => (
            <div 
              key={colIndex} 
              className="flex flex-col gap-[1.5rem] w-full lg:w-[calc(33.333%-1.333rem)] shrink-0"
            >
              {/* Column Layout Header */}
              <h2 className="text-[0.875rem] font-bold tracking-wider text-[#000000] uppercase">
                {column.title}
              </h2>

              {/* Vertical Card List Core Container */}
              <div className="flex flex-col">
                {column.products.map((product, prodIndex) => (
                  <div key={product.id} className="w-full">
                    
                    {/* Integrated the active quick view click action handler */}
                    <BottomProductCard
                      product={product as any}
                      onOpenQuickView={(clickedItem) => setSelectedProduct(clickedItem as any)}
                    />
                    
                    {/* Interior Separation Rules */}
                    {prodIndex < column.products.length - 1 && (
                      <hr className="border-t border-[#f0f0f0] my-[0.75rem]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </Container>

      {/* Renders the full view modal context layer directly over the active viewport tree hierarchy */}
      {selectedProduct && (
        <OverlayDetails 
          product={selectedProduct as any} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductListsSection;