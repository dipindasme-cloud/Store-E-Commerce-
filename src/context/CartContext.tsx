"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { products } from "@/data/products";

export type CartItem = {
  productId: string;
  variantId: string;
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const STORAGE_KEY = "keiton-cart";

const DEFAULT_ITEMS: CartItem[] = [
  {
    productId: "p1",
    variantId: "p1-m-blk",
    title: "Air Velocity Runner",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop",
    size: "M",
    color: "Black",
    quantity: 1,
  },
  {
    productId: "p4",
    variantId: "p4-l-brn",
    title: "Trail Blazer GTX",
    price: 259,
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&auto=format&fit=crop",
    size: "L",
    color: "Brown",
    quantity: 1,
  },
  {
    productId: "p7",
    variantId: "p7-s-wht",
    title: "Aero Dri-Fit Tee",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop",
    size: "S",
    color: "White",
    quantity: 2,
  },
];

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      } else {
        setItems(DEFAULT_ITEMS);
      }
    } catch {
      setItems(DEFAULT_ITEMS);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hydrated]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === item.variantId);
      if (existing) {
        return prev.map((i) =>
          i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((variantId: string) => {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  }, []);

  const updateQuantity = useCallback(
    (variantId: string, quantity: number) => {
      if (quantity < 1) return;
      setItems((prev) =>
        prev.map((i) =>
          i.variantId === variantId ? { ...i, quantity } : i
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
