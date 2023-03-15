import { Container, HStack, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import { ProductList } from "./product-list";
import { ProductSummary } from "@/models";
import { Sidebar } from "./sidebar";

export interface ProductPanelProps {
  productList: ProductSummary[];
}

export function ProductPanel({ productList }: ProductPanelProps) {
  return (
    <Container>
      <HStack gap={4} align="flex-start">
        <Box w="25%" flexShrink={0}>
          <Sidebar />
        </Box>
        <Box flexGrow={1}>
          <Box
            height="325px"
            position="relative"
            mb={8}
            sx={{ "& img": { objectFit: "cover" } }}
          >
            <Image src="/product-list.jpg" alt="Banner" fill />
          </Box>
          <ProductList productList={productList} />
        </Box>
      </HStack>
    </Container>
  );
}
