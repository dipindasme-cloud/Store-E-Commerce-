"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-start overflow-hidden bg-muted">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1617603280856-0ecabba82e09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Swap with your banner source
          alt="Seasonal New Arrivals Collection Hero Showcase"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="container-custom relative z-10 text-white animate-slide-up">
        <span className="text-overline uppercase tracking-widest text-white/80 font-semibold bg-white/10 px-3 py-1 backdrop-blur-md rounded-full inline-block mb-4">
          Seasonal Collection
        </span>
        <h2 className="text-[length:var(--text-display-lg)] font-bold tracking-tight leading-none max-w-[45rem] mb-6">
          New Arrivals
        </h2>
        <p className="text-[length:var(--text-body-lg)] max-w-[30rem] mb-8 text-neutral-200">
          Discover the latest technical innovations and bold silhouettes designed to elevate your everyday rotation.
        </p>
        <Link
          href="#latest-drops"
          className="inline-flex h-[3.25rem] px-8 items-center justify-center bg-white text-black font-semibold text-[0.9375rem] rounded-sm tracking-wide shadow-md hover:bg-black hover:text-white transition-colors duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          Shop Latest Drops
        </Link>
      </div>
    </section>
  );
};