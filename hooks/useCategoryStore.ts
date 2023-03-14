import { create } from "zustand";

import { commerce } from "@/libs";
import { Category } from "@/models";

interface CategoryStore {
  categoryList: Category[];
  isLoading: boolean;
  fetchCategoryList: () => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categoryList: [],
  isLoading: false,
  fetchCategoryList: async () => {
    set({ isLoading: true });
    const { data } = await commerce.categories.list();
    set({ categoryList: data || [], isLoading: false });
  },
}));
