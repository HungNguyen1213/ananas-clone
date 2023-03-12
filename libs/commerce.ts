import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.COMMERCE_API_KEY ||
    "pk_468629b7588e53da9e6ebbea76acf18fdad5d71d361bc"
);
