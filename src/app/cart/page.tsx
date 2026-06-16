"use client";

import { useCart } from "@/context/CartContext";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Trash2, Minus, Plus } from "lucide-react";

function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function CartItemRow({
  item,
}: {
  item: ReturnType<typeof useCart>["items"][number];
}) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-neutral-200 py-5 last:border-b-0 sm:gap-6">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-28 sm:w-28">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between gap-4">
          <div>
            <Link
              href={`/products/${item.productId}`}
              className="text-body-sm font-medium text-neutral-900 hover:underline sm:text-body-md"
            >
              {item.title}
            </Link>
            <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-caption text-muted-foreground">
              <span>Size: {item.size}</span>
              <span>Color: {item.color}</span>
            </div>
          </div>
          <p className="shrink-0 text-body-sm font-semibold sm:text-body-md">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-0">
            <button
              type="button"
              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="flex h-8 w-8 items-center justify-center rounded-l-md border border-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-100 disabled:opacity-40"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="flex h-8 min-w-[2.5rem] items-center justify-center border-y border-neutral-300 text-body-sm font-medium">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-r-md border border-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-100"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.variantId)}
            className="flex items-center gap-1.5 text-caption text-neutral-400 transition-colors hover:text-red-500"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  const { items, subtotal, clearCart, itemCount } = useCart();

  const shipping = subtotal >= 200 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <section className="section">
        <Container>
          <div className="mx-auto max-w-md py-20 text-center">
            <h1 className="text-h2 font-semibold tracking-tight">Your Cart</h1>
            <p className="mt-4 text-body-md text-muted-foreground">
              Your cart is currently empty.
            </p>
            <Button href="/shop" variant="primary" size="lg" className="mt-8">
              Continue Shopping
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="section">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-h2 font-semibold tracking-tight">Your Cart</h1>
          <span className="text-body-sm text-muted-foreground">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_22rem]">
          {/* Cart Items */}
          <div>
            <div className="divide-y divide-neutral-200">
              {items.map((item) => (
                <CartItemRow key={item.variantId} item={item} />
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={clearCart}
                className="text-body-sm text-muted-foreground underline underline-offset-2 hover:text-neutral-900 transition-colors"
              >
                Clear Cart
              </button>
              <Link
                href="/shop"
                className="text-body-sm font-medium text-neutral-900 hover:underline"
              >
                Continue Shopping &rarr;
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-xl border border-neutral-200 bg-white p-6">
            <h2 className="text-h4 font-semibold">Order Summary</h2>
            <div className="mt-5 space-y-3">
              <div className="flex justify-between text-body-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-muted-foreground">Estimated Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              {subtotal < 200 && (
                <p className="pt-1 text-caption text-muted-foreground">
                  Add {formatPrice(200 - subtotal)} more for free shipping.
                </p>
              )}
              <hr className="border-neutral-200" />
              <div className="flex justify-between text-body-md font-semibold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <Button
              href="/checkout"
              variant="primary"
              size="lg"
              className="mt-6 w-full"
            >
              Checkout &mdash; {formatPrice(total)}
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-caption text-muted-foreground">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="6" width="22" height="12" rx="2" />
                <circle cx="7" cy="12" r="2" />
                <path d="M11 12h10" />
              </svg>
              Secure Checkout
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
