"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  href: string;
  imgSrc: string;
  label: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  href,
  imgSrc,
  label,
}) => {
  return (
    <Link
      href={href}
      className="group block w-full focus-ring-custom focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition-all"
      aria-label={`Explore ${label}`}
    >
      <div className="flex flex-col items-center gap-3 w-full">
        
        {/* Circle Image Wrapper - Fluid structural scaling up to desktop limits */}
        <div className="relative w-full max-w-[15rem] sm:max-w-[17rem] lg:max-w-[12rem] mx-auto aspect-square rounded-full border border-neutral-100 bg-neutral-50 overflow-hidden">
          
          {/* Inner Image Frame Container */}
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image
              src={imgSrc}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              priority={false}
            />
          </div>

        </div>

        {/* Label Typography Block */}
        <div className="w-full text-center px-1">
          <span className="block truncate text-md md:text-md font-semibold tracking-wide text-neutral-900 transition-colors duration-300 group-hover:text-neutral-400">
            {label}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default CategoryCard;