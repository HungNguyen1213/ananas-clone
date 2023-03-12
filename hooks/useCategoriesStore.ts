import { create } from "zustand";

import { commerce } from "@/libs";
import { Category } from "@/models";

interface CategoriesStore {
  categories: Category[];
  fetchCategories: () => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  fetchCategories: async () => {
    const { data: categories } = await commerce.categories.list();
    set({ categories });
  },
}));
