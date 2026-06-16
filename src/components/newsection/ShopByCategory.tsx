"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  { name: "Running", count: "24 Items", img: "https://images.unsplash.com/photo-1691067951700-138ca8f4841f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/shop" },
  { name: "Sneakers", count: "42 Items", img: "https://images.unsplash.com/photo-1746206673199-5b75dcec1018?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/shop" },
  { name: "Basketball", count: "18 Items", img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/shop" },
  { name: "Lifestyle", count: "35 Items", img: "https://images.unsplash.com/photo-1751624310837-32ecd6bc6d94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNHx8fGVufDB8fHx8fA%3D%3D", href: "/shop" },
];

export const ShopByCategory: React.FC = () => {
  return (
    <section className="section bg-muted border-t border-b border-[color:var(--color-border)]">
      <div className="container-custom">
        <div className="text-center max-w-[30rem] mx-auto mb-12">
          <h2 className="text-[length:var(--text-h2)] font-bold tracking-tight text-black">
            Shop by Category
          </h2>
          <p className="text-[length:var(--text-body-sm)] text-[color:var(--color-muted-foreground)] mt-2">
            Targeted product blueprints engineered for specific environmental performance tracks.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className="group relative aspect-[3/4] overflow-hidden bg-white rounded-sm border border-[color:var(--color-border)] focus-visible:ring-2 focus-visible:ring-black outline-none"
            >
              <Image
                src={cat.img}
                alt={`${cat.name} Category Tracking Showcase`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white z-10">
                <h3 className="text-[1.125rem] sm:text-[1.25rem] font-bold tracking-tight leading-tight">
                  {cat.name}
                </h3>
                <span className="text-[0.75rem] text-neutral-300 mt-1 block">
                  {cat.count}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};