"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { useCart } from "@/context/CartContext";

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  postalCode: string;
  phone: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

export default function CheckoutPage() {
  const { items } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Transaction pipeline completed. Authorized Payload Data:", formData);
    setIsSubmitting(false);
    alert("Order successfully processed!");
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 200 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <main className="animate-fade-in bg-[color:var(--color-background)] min-h-screen pt-4 pb-16 md:pb-24">
      {/* Absolute Micro Navigation Header Track */}
      <header className="border-b border-[color:var(--color-border)] bg-white py-4 mb-8 md:mb-12">
        <div className="container-custom flex items-center justify-between">
          
          <Link href="/cart" className="text-[0.8125rem] font-medium text-[color:var(--color-muted-foreground)] hover:text-black transition-colors duration-200 flex items-center gap-1 focus-ring-custom rounded-xs">
            ← Return to Bag
          </Link>
        </div>
      </header>

      <div className="container-custom">
        <h1 className="text-[length:var(--text-h2)] font-bold tracking-tight text-[color:var(--color-foreground)] mb-8">
          Secure Checkout
        </h1>

        {/* Form Grid Pipeline Wrapper */}
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 xl:gap-x-16 gap-y-10 items-start">
          
          {/* User Entry Flow Sequence (Left Side) */}
          <div className="lg:col-span-7 space-y-10">
            <CheckoutForm formData={formData} onChange={handleInputChange} />
            
            {/* Mobile submission trigger button layout visibility handling */}
            <div className="block lg:hidden pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[3.25rem] bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] rounded-sm font-bold text-[0.875rem] tracking-wide hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center focus-ring-custom"
              >
                {isSubmitting ? "Authorizing Security Node..." : `Pay $${total.toFixed(2)}`}
              </button>
            </div>
          </div>

          {/* Sticky Processing Panel Matrix (Right Side) */}
          <aside className="lg:col-span-5 lg:sticky lg:top-6">
            <OrderSummary isSubmitting={isSubmitting} />
          </aside>

        </form>
      </div>
    </main>
  );
}