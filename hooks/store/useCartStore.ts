import { Cart } from "@chec/commerce.js/types/cart";
import { create } from "zustand";

import { commerce } from "@/libs";

interface CartStore {
  cart: Cart | null;
  isLoading: boolean;
  fetchCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
  addToCart: (
    productId: string,
    quantity?: number,
    options?: string | object
  ) => Promise<void>;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: null,
  isLoading: false,
  fetchCart: async () => {
    const cart = await commerce.cart.retrieve();
    set({ cart });
  },
  refreshCart: async () => {
    await commerce.cart.refresh();
    set({ cart: null });
  },
  addToCart: async (productId, quantity, options) => {
    set({ isLoading: true });
    const res: any = await commerce.cart.add(productId, quantity, options);
    set((prev) => ({ cart: { ...prev, ...res }, isLoading: false }));
  },
}));
