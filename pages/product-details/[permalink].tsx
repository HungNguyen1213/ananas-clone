import { Container, Flex, Box } from "@chakra-ui/react";
import { Product } from "@chec/commerce.js/types/product";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useRouter } from "next/router";

import { commerce } from "@/libs";
import { ProductInfo, SliderImage } from "@/components";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter();

  const isLoading = router.isFallback;

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Container py={8}>
          <Flex gap={16}>
            <SliderImage images={product.assets} />
            <Box width="50%">
              <ProductInfo product={product} />
            </Box>
          </Flex>
        </Container>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: productList } = await commerce.products.list();

  const paths = productList.map((product) => ({
    params: { permalink: product.permalink },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ProductDetailsProps> = async ({
  params,
}) => {
  const permalink = params?.permalink?.toString();

  if (!permalink) {
    return {
      notFound: true,
    };
  }

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return { props: { product }, revalidate: 200 };
};
