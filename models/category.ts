import { Category as ChecCategory } from "@chec/commerce.js/types/category";

type Children = {
  id: string;
  slug: string;
  name: string;
  assets: any;
};

export type Category = ChecCategory & { children?: Children[] };
