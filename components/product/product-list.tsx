import { Grid, GridItem } from "@chakra-ui/react";
import * as React from "react";

import { ProductSummary } from "@/models";
import { ProductCard } from "./product-card";

export interface ProductListProps {
  productList: ProductSummary[];
}

export function ProductList({ productList }: ProductListProps) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      columnGap={6}
      flexGrow={1}
    >
      {productList.map((product: ProductSummary) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
}
