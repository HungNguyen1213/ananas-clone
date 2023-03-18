import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { LineItem } from "@chec/commerce.js/types/line-item";

import { Control } from "./control";

import noImage from "@/images/product-no-image.png";
import { MdFavoriteBorder } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";

export interface CartItemProps {
  cartItem: LineItem;
}

export function CartItem({ cartItem }: CartItemProps) {
  return (
    <Flex justify={"space-between"}>
      <Flex gap={5}>
        <Box width="180px" height="180px">
          <Link href={`/product-details/${cartItem.permalink}`}>
            <Image
              src={cartItem.image?.url || noImage}
              width={180}
              height={180}
              alt="Product"
            />
          </Link>
        </Box>
        <Flex direction={"column"}>
          <Flex direction={"column"} grow={1}>
            <Link href={`/product-details/${cartItem.permalink}`}>
              <Text textStyle="h2" as="h4" mb="10px">
                {cartItem.name}
              </Text>
            </Link>
            <Text
              textStyle="p"
              as="h5"
              mb="10px"
              sx={{
                color: "#808080",
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "14px",
                lineHeight: "1.1",
                fontWeight: "bold",
              }}
            >
              Giá:{" "}
              <Text as="span" fontSize="16px" fontWeight={"normal"}>
                {cartItem.price.formatted_with_code}
              </Text>
            </Text>
          </Flex>
          <Control
            selectedSize={cartItem.selected_options?.[0].option_id}
            productId={cartItem.product_id}
            isCartControl
            storeQuantity={cartItem.quantity.toString()}
          />
        </Flex>
      </Flex>
      <Flex justify="space-between" align="end" direction={"column"}>
        <Text textStyle="h1" as="h4" color="primary">
          {cartItem.line_total.formatted_with_code}
        </Text>
        <Text
          textStyle="p"
          as="h5"
          sx={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: "16px",
            color: "primary",
          }}
        >
          Còn hàng
        </Text>
        <Flex direction={"column"}>
          <IconButton
            height={"40px"}
            width={"125px"}
            aria-label="Favorite"
            sx={{
              bg: "transparent",
              _hover: { bg: "transparent" },
              border: "#a3a3a3 1px solid",
              mb: "10px",
            }}
            icon={<MdFavoriteBorder color="black" />}
          />
          <IconButton
            height={"40px"}
            width={"125px"}
            aria-label="Delete"
            icon={<GoTrashcan />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
