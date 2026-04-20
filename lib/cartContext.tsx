"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { MenuItem, PackOption } from "./menuData";

export interface CartItem {
  item: MenuItem;
  pack: PackOption;   // selected pack size (250g / 500g / 1kg …)
  count: number;      // number of packs
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, pack: PackOption) => void;
  removeFromCart: (id: string, packGrams: number) => void;
  updateCount: (id: string, packGrams: number, count: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

const key = (id: string, grams: number) => `${id}-${grams}`;

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ocean-cart-v2");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("ocean-cart-v2", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem, pack: PackOption) => {
    setCart((prev) => {
      const existing = prev.find(
        (c) => c.item.id === item.id && c.pack.grams === pack.grams
      );
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id && c.pack.grams === pack.grams
            ? { ...c, count: c.count + 1 }
            : c
        );
      }
      return [...prev, { item, pack, count: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string, packGrams: number) => {
    setCart((prev) =>
      prev.filter((c) => !(c.item.id === id && c.pack.grams === packGrams))
    );
  };

  const updateCount = (id: string, packGrams: number, count: number) => {
    if (count <= 0) {
      removeFromCart(id, packGrams);
      return;
    }
    setCart((prev) =>
      prev.map((c) =>
        c.item.id === id && c.pack.grams === packGrams ? { ...c, count } : c
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, c) => sum + c.count, 0);
  const totalPrice = cart.reduce((sum, c) => sum + c.pack.price * c.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCount, clearCart, totalItems, totalPrice, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
