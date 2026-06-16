"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

type OrderSummaryProps = {
  isSubmitting: boolean;
  shipping?: number;
  tax?: number;
};

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  isSubmitting,
  shipping: shippingOverride,
  tax: taxOverride,
}) => {
  const { items, subtotal } = useCart();

  const shipping = shippingOverride ?? (subtotal >= 200 ? 0 : 12);
  const tax = taxOverride ?? subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-[color:var(--color-muted)] border border-[color:var(--color-border)] rounded-sm p-6 md:p-8 space-y-6">
      <h2 className="text-[1.125rem] font-bold tracking-tight text-[color:var(--color-foreground)] pb-4 border-b border-[color:var(--color-border)]">
        Order Review
      </h2>

      <ul className="divide-y divide-[color:var(--color-border)] overflow-y-auto max-h-[18rem] pr-2 scrollbar-thin">
        {items.map((item) => (
          <li key={item.variantId} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
            <div className="relative w-16 h-16 bg-white border border-[color:var(--color-border)] rounded-xs overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-[0.875rem] font-semibold text-[color:var(--color-foreground)] truncate">
                {item.title}
              </h3>
              <p className="text-[0.75rem] text-[color:var(--color-muted-foreground)] mt-0.5 font-medium">
                {item.size} / {item.color}
              </p>
              <span className="text-[0.75rem] text-black font-bold block mt-1">
                Qty {item.quantity}
              </span>
            </div>

            <div className="text-[0.875rem] font-bold text-[color:var(--color-foreground)]">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-[color:var(--color-border)] pt-4 space-y-3 text-[0.875rem]">
        <div className="flex justify-between items-center text-[color:var(--color-muted-foreground)]">
          <span>Subtotal</span>
          <span className="font-medium text-black">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-[color:var(--color-muted-foreground)]">
          <span>Shipping</span>
          <span className="font-medium text-green-600 uppercase tracking-wider text-[0.75rem]">
            {shipping === 0 ? "Complimentary" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between items-center text-[color:var(--color-muted-foreground)]">
          <span>Estimated Tax</span>
          <span className="font-medium text-black">${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-[1.0625rem] font-bold text-[color:var(--color-foreground)] pt-3 border-t border-[color:var(--color-border)]">
          <span>Total</span>
          <span className="text-[1.125rem] tracking-tight">${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="hidden lg:flex w-full h-[3.25rem] bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] rounded-sm font-bold text-[0.875rem] tracking-wide items-center justify-center hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-all duration-300 focus-ring-custom"
      >
        {isSubmitting ? "Authorizing Security Node..." : `Place Order \u2022 $${total.toFixed(2)}`}
      </button>

      <div className="flex items-center justify-center gap-2 text-[0.6875rem] text-[color:var(--color-muted-foreground)] font-semibold uppercase tracking-wider pt-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-600">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        256-Bit TLS Encrypted Authorization Network
      </div>
    </div>
  );
};
