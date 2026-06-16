"use client";

import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled">;

// Design System Style Mapping adapted for Tailwind v4 tokens
const variantStyles: Record<ButtonVariant, string> = {
  // Primary: Solid background (Black), contrast shifts on hover
  primary: "bg-black text-white border border-transparent hover:bg-transparent hover:border-black hover:text-black",
  
  // Secondary: Transparent background with clear borders, heavy filled swap on hover
  secondary: "bg-neutral-100 text-neutral-900 border border-transparent hover:bg-neutral-200",
  
  // Outline: A thinner, softer fallback version of secondary utilizing theme line tokens
  outline: "border border-black text-black hover:bg-black hover:text-white",
  
  // Ghost: Entirely flat structure ideal for clean context panels or secondary selectors
  ghost: "text-black hover:bg-neutral-100",
};

// Layout sizing utilizing strict rem units for spacing scales
const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-[1rem] py-[0.5rem] text-body-sm h-[2.25rem]",
  md: "px-[1.5rem] py-[0.75rem] text-body-md h-[2.75rem]",
  lg: "px-[2rem] py-[1rem] text-body-lg h-[3.5rem]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    href,
    variant = "primary",
    size = "md",
    className = "",
    loading = false,
    disabled = false,
    ...props
  },
  ref
) {
  // Consolidated class definitions including layout system focus ring configurations
  const base = [
    "inline-flex items-center justify-center rounded-full font-medium tracking-wide",
    "transition-all duration-200 select-none cursor-pointer",
    "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Render architecture toggle for Next.js routing context
  if (href) {
    return (
      <Link href={href} className={base}>
        {loading ? (
          <span className="flex items-center gap-[0.5rem]">
            <span className="inline-block h-[1rem] w-[1rem] animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>{children}</span>
          </span>
        ) : (
          children
        )}
      </Link>
    );
  }

  return (
    <button 
      ref={ref} 
      className={base} 
      disabled={disabled || loading} 
      type={props.type || "button"}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-[0.5rem]">
          <span className="inline-block h-[1rem] w-[1rem] animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
});

export default Button;