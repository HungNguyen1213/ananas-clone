import { Box, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

export interface IEmptyCartProps {}

export function EmptyCart(props: IEmptyCartProps) {
  return (
    <Box>
      <Heading
        textTransform={"uppercase"}
        fontSize="30px"
        mb={5}
        textAlign="center"
        fontFamily={"Ubuntu,sans-serif"}
        as="h1"
      >
        Giỏ hàng của bạn
      </Heading>
      <Box height={"2px"} bgColor="black" mt={8} mb={8} />
      <Box
        sx={{
          fontSize: "16px",
          color: "#000",
          lineHeight: "1.5em",
          fontFamily: "Nunito Sans, sans-serif",
          textAlign: "center",
          mt: "55px",
        }}
      >
        Bạn đang không có sản phẩm nào trong giỏ hàng!
      </Box>
      <Box textAlign={"center"} mt="60px" mb="100px">
        <Link href="/product-list">
          <Button width="240px" height="40px" fontSize="18px" px={20}>
            Quay lại mua hàng
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
