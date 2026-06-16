// src/components/ui/SlideUpButton.tsx
"use client";

import Link from "next/link";

type SlideUpButtonProps = {
  href: string;
  text: string;
  className?: string;
};

export default function SlideUpButton({
  href,
  text,
  className = "",
}: SlideUpButtonProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-md bg-white px-8 py-3 text-[0.875rem] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a] transition-colors duration-300 hover:bg-white ${className}`}
      style={{ borderRadius: "0.4rem" }}
    >
      <span className="relative block h-[1.2em] overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {text}
        </span>
      </span>
    </Link>
  );
}