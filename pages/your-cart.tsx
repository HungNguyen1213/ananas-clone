import { Container, Box, Flex, Button } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";

import { useCartStore } from "@/hooks";
import { CartItemList, EmptyCart, Seo } from "@/components";
import { SeoData } from "@/models";

export default function YourCart() {
  const { cart, refreshCart, isLoading } = useCartStore();

  if (isLoading) return null;

  const seoData: SeoData = {
    title: "Giỏ Hàng – Ananas",
    description: "",
    url: "https://ananas-clone.vercel.app/your-cart",
    thumbnailUrl: "",
  };

  return (
    <Container>
      <Seo data={seoData} />
      {cart?.line_items && cart.line_items.length > 0 ? (
        <Flex
          gap={{ base: 0, lg: "40px" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Box width={{ base: "100%", lg: "calc(calc(100% - 40px) / 3 * 2)" }}>
            <CartItemList lineItems={cart?.line_items} />
            <Flex align={"center"} justify={"space-between"}>
              <Button
                width="240px"
                height="40px"
                fontSize="18px"
                onClick={refreshCart}
                px={3}
              >
                Xóa hết
              </Button>
              <Link href="/product-list">
                <Button width="240px" height="40px" fontSize="18px" px={3}>
                  Quay lại mua hàng
                </Button>
              </Link>
            </Flex>
          </Box>
          <Box width={{ base: "100%", lg: "calc(calc(100% - 40px) / 3)" }}>
            Đơn hàng
          </Box>
        </Flex>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
}
