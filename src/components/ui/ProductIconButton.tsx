"use client";

import React from 'react';

interface ProductIconButtonProps {
  label: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode; // For passing the unique feather/custom SVGs
}

export const ProductIconButton: React.FC<ProductIconButtonProps> = ({
  label,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
}) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Dynamic Slide-Up CSS Micro-Tooltip */}
      <span 
        className={`
          absolute bottom-[3.25rem] whitespace-nowrap bg-[#0F172A] text-white 
          text-[0.75rem] font-medium px-[0.75rem] py-[0.35rem] rounded-[0.2rem] shadow-md 
          transition-all duration-200 
          after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 
          after:border-[4px] after:border-transparent after:border-t-[#0F172A]
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[0.25rem] pointer-events-none'}
        `}
      >
        {label}
      </span>

      {/* Circle Trigger Target Button */}
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={`
          w-[2.75rem] h-[2.75rem] rounded-full flex items-center justify-center 
          transition-all duration-300 border border-transparent shadow-md outline-none
          ${isHovered ? 'bg-[#0F172A] text-white scale-105' : 'bg-white text-[#0F172A]'}
        `}
        aria-label={label}
      >
        {children}
      </button>
    </div>
  );
};