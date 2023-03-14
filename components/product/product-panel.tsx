import { Container, HStack, Box } from "@chakra-ui/react";
import * as React from "react";
import Image from "next/image";

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
        <Box>
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
