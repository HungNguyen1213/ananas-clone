import { Box, Divider } from "@chakra-ui/react";
import { LineItem } from "@chec/commerce.js/types/line-item";
import * as React from "react";
import { CartItem } from "./cart-item";

interface CartItemListProps {
  lineItems?: LineItem[];
}

export function CartItemList({ lineItems }: CartItemListProps) {
  return (
    <Box>
      {lineItems?.map((item) => (
        <>
          <CartItem cartItem={item} key={item.id} />
          <Divider
            my={5}
            borderBottomWidth="3px"
            borderStyle="dashed"
            opacity={1}
            _last={{
              my: 10,
              borderBottomWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
            }}
          />
        </>
      ))}
    </Box>
  );
}
