import { Container, HStack, Box, Spinner } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { ProductList } from "./product-list";
import { Sidebar } from "./sidebar";
import { ProductSummary } from "@/models";
import { commerce } from "@/libs";

export function ProductPanel() {
  const router = useRouter();

  const attribute = router.query?.attribute;

  const [productList, setProductList] = useState<ProductSummary[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        console.log({ attribute });
        setIsLoading(true);
        const { data: resProducts } = await commerce.products.list({
          attributes: { attr_VNplJa1EaYwL60: attribute },
        });
        const products: ProductSummary[] =
          resProducts?.map((product) => ({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            permalink: product.permalink,
          })) || [];
        setProductList(products);
      } catch (error) {
        console.log(error);
        setProductList([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [attribute]);

  return (
    <Container opacity={isLoading ? "0.7" : 1}>
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
          {isLoading ? (
            <Box textAlign={"center"} pt={10}>
              <Spinner size="xl" color="primary" />
            </Box>
          ) : (
            <ProductList productList={productList} />
          )}
        </Box>
      </HStack>
    </Container>
  );
}
