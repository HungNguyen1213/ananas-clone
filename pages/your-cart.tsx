import { Box, Button } from "@chakra-ui/react";
import * as React from "react";

import { useCartStore } from "@/hooks";

export default function YourCart() {
  const { cart, refreshCart } = useCartStore();
  console.log({ path: "your-cart", cart });
  return (
    <Box>
      Cart
      <Button onClick={() => refreshCart()}>Clear</Button>
    </Box>
  );
}
