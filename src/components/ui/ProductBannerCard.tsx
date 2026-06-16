import React from 'react';
import Image from 'next/image';

interface ProductBannerCardProps {
  subtitle: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  buttonLink: string;
  buttonText: string;
  background?: string; // Can be a Hex color OR a full CSS gradient string
  ButtonComponent: React.ComponentType<{ href: string; text: string; className?: string }>;
  subtitleColor?: string;
  titleHoverColor?: string;
}

export const ProductBannerCard: React.FC<ProductBannerCardProps> = ({
  subtitle,
  title,
  imageSrc,
  imageAlt,
  buttonLink,
  buttonText,
  background = '#2D5A3E', // Default solid forest green fall-back
  ButtonComponent,
  subtitleColor = '#E67E22', // Default orange subtitle color
}) => {
  return (
    <div 
      // The CSS 'background' property accepts colors, images, and gradients perfectly!
      style={{ background: background }} 
      className="
        relative 
        flex 
        flex-col 
        align-center 
        justify-between 
        overflow-hidden 
        rounded-[0.5rem] 
        px-[1.5rem] 
        pb-[0rem] 
        pt-[2rem] 
        text-center 
        w-full 
        max-w-[24rem] 
        aspect-square
      "
    >
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        <span className="text-[1rem] font-semibold tracking-wide" style={{ color: subtitleColor }}>
          {subtitle}
        </span>

        <h3 
          className="
            pointer-events-auto 
            cursor-pointer 
            text-[1.75rem] 
            font-bold 
            text-white 
            transition-colors 
            duration-300 
            ease-in-out 
            md:hover:text-[#FF9900] 
            mb-[1rem]
          "
        >
          {title}
        </h3>

        <div className="pointer-events-auto">
          <ButtonComponent href={buttonLink} text={buttonText} />
        </div>
      </div>

      {/* Image Container */}
      <div className="group relative w-full flex-1 flex items-end justify-center cursor-pointer">
        <div className="relative w-full h-[85%] transition-transform duration-500 ease-out md:group-hover:scale-110">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
};