import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.NEXT_PUBLIC_COMMERCE_API_SECRET_KEY || "",
  false,
  { allowSecretKey: true }
);
