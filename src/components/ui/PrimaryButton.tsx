"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled">;

/**
 * Premium Style Definitions
 * - primary: Solid black bg, white text. On hover: transparent bg, black outline, black text.
 * - border-transparent is applied initially to reserve spacing so the container doesn't jump on hover.
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-black text-white border border-transparent hover:bg-white hover:border-white hover:text-black",
  secondary: "bg-white text-black border border-transparent hover:bg-transparent hover:border-black hover:text-black",
  outline: "border border-black text-black hover:bg-black hover:text-white",
  ghost: "text-black hover:bg-neutral-100",
};

// Precise sizing standards normalized via rem spacing rules
const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-[1rem] py-[0.5rem] text-[0.75rem]",
  md: "px-[1.5rem] py-[0.75rem] text-[0.875rem]",
  lg: "px-[2rem] py-[1rem] text-[1rem]",
};

const PrimaryButton = forwardRef<HTMLButtonElement & HTMLAnchorElement, PrimaryButtonProps>(
  function PrimaryButton(
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
    const baseClasses = [
      "inline-flex items-center justify-center rounded-full font-medium tracking-wide",
      "transition-all duration-300 ease-in-out cursor-pointer select-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-40",
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Content wrapper to reuse loading spinner logic safely across Link and Button elements
    const renderContent = () => {
      if (loading) {
        return (
          <span className="flex items-center gap-[0.5rem]">
            <span className="inline-block h-[1rem] w-[1rem] animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>{children}</span>
          </span>
        );
      }
      return children;
    };

    if (href) {
      return (
        <Link 
          href={href} 
          className={baseClasses}
          // Type cast ref gently to satisfy Next.js client component compiler rules for forwardRef
          ref={ref as unknown as React.Ref<HTMLAnchorElement>}
          aria-disabled={disabled || loading}
        >
          {renderContent()}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        className={baseClasses}
        disabled={disabled || loading}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

export default PrimaryButton;