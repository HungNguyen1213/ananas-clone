import { Container, Flex, Box } from "@chakra-ui/react";
import { Product } from "@chec/commerce.js/types/product";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useRouter } from "next/router";

import { commerce } from "@/libs";
import { Control, ProductInfo, Seo, SliderImage } from "@/components";
import { SeoData } from "@/models";
import { DEFAULT_DESCRIPTION_PRODUCT_DETAILS } from "@/configs";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter();

  const isLoading = router.isFallback;

  const seoData: SeoData = {
    title: product?.name,
    description: DEFAULT_DESCRIPTION_PRODUCT_DETAILS,
    thumbnailUrl: product?.assets?.[0]?.url,
    url: router.asPath,
  };

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Container>
          <Seo data={seoData} />
          <Flex
            gap={{ base: 4, lg: 16 }}
            direction={{ base: "column", lg: "row" }}
          >
            <Box
              width={{ base: "100%", lg: "calc(calc(100% - 64px) / 12 * 7)" }}
            >
              <SliderImage images={product.assets} />
            </Box>
            <Box
              width={{ base: "100%", lg: "calc(calc(100% - 64px) / 12 * 5)" }}
            >
              <ProductInfo product={product}>
                <Control productId={product.id} />
              </ProductInfo>
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
