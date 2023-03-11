import { GetStaticProps } from "next";
import { ProductCollection } from "@chec/commerce.js/features/products";
import { Product } from "@chec/commerce.js/types/product";

import { ProductSummary } from "@/models";
import { Grid, GridItem } from "@chakra-ui/react";
import { commerce } from "@/libs";
import { ProductCard } from "@/components/product";

interface ProductListProps {
  productList: ProductSummary[];
}

const ProductList = ({ productList }: ProductListProps) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {productList.map((product: ProductSummary) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export const getStaticProps: GetStaticProps<ProductListProps> = async () => {
  const res: ProductCollection = await commerce.products.list();

  const productList: ProductSummary[] =
    res?.data?.map((product: Product) => ({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    })) || [];

  return { props: { productList } };
};

export default ProductList;
