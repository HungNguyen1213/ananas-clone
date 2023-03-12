import { Container, HStack, Box } from "@chakra-ui/react";
import * as React from "react";

import { ProductList } from "./product-list";
import { ProductSummary } from "@/models";
import { Sidebar } from "./sidebar";

export interface IProductPanelProps {
  productList: ProductSummary[];
}

export function ProductPanel({ productList }: IProductPanelProps) {
  return (
    <Container maxW="1200px" px={{ lg: 0 }}>
      <HStack gap={4} align="flex-start">
        <Box w="25%" flexShrink={0}>
          <Sidebar />
        </Box>
        <ProductList productList={productList} />
      </HStack>
    </Container>
  );
}
