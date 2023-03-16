import { create } from "zustand";
import axios from "axios";

import { Attribute } from "@/models";

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
    const headers = {
      "X-Authorization": process.env.NEXT_PUBLIC_COMMERCE_API_SECRET_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const {
      data: { data: attributeList },
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_COMMERCE_BASE_URL}/attributes`,
      {
        headers,
      }
    );
    set({ attributeList, isLoading: false });
  },
}));
