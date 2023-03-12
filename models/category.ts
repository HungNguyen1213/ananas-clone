import { Category as ChecCategory } from "@chec/commerce.js/types/category";

export type Subcategory = {
  id: string;
  slug: string;
  name: string;
  assets: any;
};

export type Category = ChecCategory & { children?: Subcategory[] };
