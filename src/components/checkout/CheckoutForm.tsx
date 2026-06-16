"use client";

import React from "react";
import { CheckoutFormData } from "@/app/checkout/page";

interface CheckoutFormProps {
  formData: CheckoutFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-10">
      
      {/* Step 1: Customer Contact Block */}
      <section aria-labelledby="contact-heading" className="bg-white p-6 md:p-8 rounded-sm border border-[color:var(--color-border)] shadow-2xs">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-6 rounded-full bg-black text-white text-[0.75rem] font-bold flex items-center justify-center">1</span>
          <h2 id="contact-heading" className="text-[1.25rem] font-bold tracking-tight text-[color:var(--color-foreground)]">
            Contact Information
          </h2>
        </div>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={onChange}
            placeholder="name@domain.com"
            className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] bg-white text-black outline-hidden focus-ring-custom transition-all"
          />
        </div>
      </section>

      {/* Step 2: Physical Delivery Block */}
      <section aria-labelledby="shipping-heading" className="bg-white p-6 md:p-8 rounded-sm border border-[color:var(--color-border)] shadow-2xs">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-6 rounded-full bg-black text-white text-[0.75rem] font-bold flex items-center justify-center">2</span>
          <h2 id="shipping-heading" className="text-[1.25rem] font-bold tracking-tight text-[color:var(--color-foreground)]">
            Shipping Address
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={onChange}
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={onChange}
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>
          
          <div className="sm:col-span-2 flex flex-col gap-1">
            <label htmlFor="address" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">Street Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={onChange}
              placeholder="123 Performance Way"
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-1">
            <label htmlFor="apartment" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">Apartment, Suite, etc. (Optional)</label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.apartment}
              onChange={onChange}
              placeholder="Apt 4B"
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={onChange}
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="postalCode" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">Postal Code *</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              required
              value={formData.postalCode}
              onChange={onChange}
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-1">
            <label htmlFor="phone" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={onChange}
              placeholder="(555) 000-0000"
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>
        </div>
      </section>

      {/* Step 3: Payment Token Block */}
      <section aria-labelledby="payment-heading" className="bg-white p-6 md:p-8 rounded-sm border border-[color:var(--color-border)] shadow-2xs">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-6 rounded-full bg-black text-white text-[0.75rem] font-bold flex items-center justify-center">3</span>
          <h2 id="payment-heading" className="text-[1.25rem] font-bold tracking-tight text-[color:var(--color-foreground)]">
            Payment Details
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-3 flex flex-col gap-1">
            <label htmlFor="cardName" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">Name on Card *</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              required
              value={formData.cardName}
              onChange={onChange}
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>

          <div className="sm:col-span-3 flex flex-col gap-1">
            <label htmlFor="cardNumber" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">Card Number *</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
              maxLength={19}
              value={formData.cardNumber}
              onChange={onChange}
              placeholder="0000 0000 0000 0000"
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-1">
            <label htmlFor="cardExpiry" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">Expiration Date *</label>
            <input
              type="text"
              id="cardExpiry"
              name="cardExpiry"
              required
              maxLength={5}
              placeholder="MM/YY"
              value={formData.cardExpiry}
              onChange={onChange}
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="cardCvc" className="text-[0.8125rem] font-semibold text-[color:var(--color-foreground)] mb-1">CVC *</label>
            <input
              type="text"
              id="cardCvc"
              name="cardCvc"
              required
              maxLength={4}
              placeholder="000"
              value={formData.cardCvc}
              onChange={onChange}
              className="h-11 px-4 border border-[color:var(--color-border)] rounded-sm text-[0.875rem] focus-ring-custom outline-hidden bg-white text-black transition-all"
            />
          </div>
        </div>
      </section>

    </div>
  );
};