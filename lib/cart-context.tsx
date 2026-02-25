"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface CartItem {
  serviceSlug: string;
  categorySlug: string;
  name: string;
  price: string;
  originalPrice?: string;
  categoryLabel: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (serviceSlug: string) => void;
  clearCart: () => void;
  isInCart: (serviceSlug: string) => boolean;
  itemCount: number;
  notes: string;
  setNotes: (notes: string) => void;
  discountCode: string;
  setDiscountCode: (code: string) => void;
  hydrated: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_KEY = "cbl-cart";
const NOTES_KEY = "cbl-cart-notes";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [notes, setNotes] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) setItems(JSON.parse(stored));
      const storedNotes = localStorage.getItem(NOTES_KEY);
      if (storedNotes) setNotes(storedNotes);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(NOTES_KEY, notes);
  }, [notes, hydrated]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.serviceSlug === item.serviceSlug)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((serviceSlug: string) => {
    setItems((prev) => prev.filter((i) => i.serviceSlug !== serviceSlug));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setNotes("");
    setDiscountCode("");
  }, []);

  const isInCart = useCallback(
    (serviceSlug: string) => items.some((i) => i.serviceSlug === serviceSlug),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        itemCount: items.length,
        notes,
        setNotes,
        discountCode,
        setDiscountCode,
        hydrated,
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
