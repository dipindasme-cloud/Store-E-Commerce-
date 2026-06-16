"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden md:min-h-[60vh] w-full bg-neutral-900">
      
      {/* Absolute Auto Layout Background Frame */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Athlete running on mountain trail at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none"
        />
        
        {/* Premium Vignette Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/85 via-neutral-900/60 to-neutral-900/30" />
      </div>

      {/* Content Auto Layout Container Frame */}
      <Container className="relative z-10 w-full">
        <div className="flex flex-col gap-[1rem] max-w-[42rem]">
          
          <div className="flex flex-col gap-[0.25rem]">
            <span className="text-overline font-bold uppercase tracking-widest text-neutral-400">
              About Keiton
            </span>
            <h1 className="text-display-lg font-bold tracking-tight text-white lowercase first-letter:uppercase">
              Built for the run
            </h1>
          </div>

          <p className="max-w-[36rem] text-body-lg leading-relaxed text-neutral-300">
            From the track to the trail, we engineer performance gear that helps
            athletes at every level go farther, faster, and stronger.
          </p>

        </div>
      </Container>

    </section>
  );
}