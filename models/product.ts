import { Product } from "@chec/commerce.js/types/product";

export type ProductSummary = Pick<Product, "id" | "image" | "name" | "price">;
