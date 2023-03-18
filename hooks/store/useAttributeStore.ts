import { create } from "zustand";

import { Attribute } from "@/models";
import { fetchData } from "..";

interface AttributeStore {
  attributeList: Attribute[];
  isLoading: boolean;
  fetchAttributeList: () => Promise<void>;
}

export const useAttributeStore = create<AttributeStore>((set) => ({
  attributeList: [],
  isLoading: false,
  fetchAttributeList: async () => {
    set({ isLoading: true });

    const {
      data: { data: attributeList },
    } = await fetchData("/attributes");
    set({ attributeList, isLoading: false });
  },
}));
