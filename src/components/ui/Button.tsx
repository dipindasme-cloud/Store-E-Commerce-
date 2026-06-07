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

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-80",
  secondary: "bg-muted text-foreground hover:bg-border",
  outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
  ghost: "text-foreground hover:bg-muted",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
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
  const base = [
    "inline-flex items-center justify-center rounded-full font-medium",
    "transition-all duration-300",
    "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} className={base} disabled={disabled || loading} {...props}>
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
});

export default Button;