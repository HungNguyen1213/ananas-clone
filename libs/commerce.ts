import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(process.env.COMMERCE_API_KEY || "");
