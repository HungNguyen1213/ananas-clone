import { Container, HStack, Box } from "@chakra-ui/react";
import * as React from "react";

import { ProductList } from "./product-list";
import { Category, ProductSummary } from "@/models";
import { Sidebar } from "./sidebar";

export interface ProductPanelProps {
  productList: ProductSummary[];
  categoryList: Category[];
}

export function ProductPanel({ productList, categoryList }: ProductPanelProps) {
  return (
    <Container>
      <HStack gap={4} align="flex-start">
        <Box w="25%" flexShrink={0}>
          <Sidebar categoryList={categoryList} />
        </Box>
        <ProductList productList={productList} />
      </HStack>
    </Container>
  );
}
