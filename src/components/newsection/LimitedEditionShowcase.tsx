"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const LimitedEditionShowcase: React.FC = () => {
  // Pure static baseline offset initialization matching target countdown structure
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        clearInterval(interval);
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-black text-white overflow-hidden relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 z-10 flex flex-col items-start">
            <span className="text-overline font-extrabold uppercase bg-[color:var(--color-highlights)] text-white px-3 py-1 rounded-xs mb-4 tracking-widest">
              Tier-1 Allocation
            </span>
            <h2 className="text-[length:var(--text-display-lg)] font-bold tracking-tight leading-none mb-4 text-white">
              Limited Edition
            </h2>
            <p className="text-[length:var(--text-body-md)] text-neutral-400 mb-6 max-w-[26rem]">
              The Obsidian Phantom Alpha Edition features individual serialization codes stamped onto the carbon arch shank matrix. No restocks will follow.
            </p>

            {/* Countdown Micro-Grid Block */}
            <div className="flex items-center gap-4 mb-8">
              {[
                { label: "Hrs", val: timeLeft.hours },
                { label: "Min", val: timeLeft.minutes },
                { label: "Sec", val: timeLeft.seconds }
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center bg-neutral-900 border border-neutral-800 rounded-sm w-16 h-16 justify-center">
                  <span className="text-[1.375rem] font-bold tabular-nums tracking-tight">{String(t.val).padStart(2, "0")}</span>
                  <span className="text-[0.625rem] text-neutral-500 uppercase tracking-wider font-semibold">{t.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/products/obsidian-phantom-alpha"
              className="inline-flex h-[3.25rem] px-10 items-center justify-center bg-white text-black font-bold text-[0.875rem] tracking-wide hover:bg-[color:var(--color-highlights)] hover:text-white transition-colors duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              Secure Allocation
            </Link>
          </div>

          <div className="lg:col-span-7 relative aspect-[4/3] w-full bg-neutral-900 rounded-md overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1593287073863-c992914cb3e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Obsidian Phantom Alpha Serialization Angle Presentation Layout"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover brightness-95"
            />
          </div>

        </div>
      </div>
    </section>
  );
};