// src/components/ui/FeatureCard.tsx
"use client";

import Link from "next/link";
import { useInView } from "@/lib/animations";
import AspectImage from "./AspectImage";
import SlideUpButton from "./SlideUpButton";
import type { FeatureCardItem } from "@/data/FeatureCard";

type FeatureCardProps = FeatureCardItem;

export default function FeatureCard({
  imageSrc,
  altText,
  subtitle,
  title,
  href,
  ctaText,
  bgColor,
  subtitleColor,
  imageRatio = 0.95,
  imageXPos = "50%",
  imageYPos = "100%",
}: FeatureCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className="w-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(1.5rem)",
        transition:
          "opacity 0.5s ease, transform 0.5s cubic-bezier(0, 0, 0.3, 1)",
      }}
    >
      <div
        className="overflow-hidden rounded-[1.25rem]"
        style={{ backgroundColor: bgColor }}
      >
        <Link
          href={href}
          className="group block px-6 pt-8 text-center sm:px-8 sm:pt-10"
          aria-label={title}
        >
          <div className="mx-auto flex max-w-[22rem] flex-col items-center">
            <p
              className="text-[1.25rem] font-medium leading-none sm:text-[1.5rem]"
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </p>

            <h3 className="mt-4 text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.5rem]">
              {title}
            </h3>
          </div>

          <div className="mt-6 flex justify-center">
            <SlideUpButton href={href} text={ctaText} />
          </div>

          <div className="mt-8">
            <AspectImage
              src={imageSrc}
              alt={altText}
              ratio={imageRatio}
              xPos={imageXPos}
              yPos={imageYPos}
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}