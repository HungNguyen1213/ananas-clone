import { create } from "zustand";

import { commerce } from "@/libs";
import { Category } from "@/models";

interface CategoryStore {
  categoryList: Category[];
  fetchCategoryList: () => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categoryList: [],
  fetchCategoryList: async () => {
    const { data } = await commerce.categories.list();
    set({ categoryList: data || [] });
  },
}));
