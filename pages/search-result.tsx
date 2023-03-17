import { Text, Container, Heading, Box, Button } from "@chakra-ui/react";
import { Product } from "@chec/commerce.js/types/product";
import { GetServerSideProps } from "next";
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { commerce } from "@/libs";
import { ProductList } from "@/components";

interface SearchResultProps {
  resultData: Product[];
}

export default function SearchResult({ resultData }: SearchResultProps) {
  const router = useRouter();

  return (
    <Container>
      <Heading
        textTransform={"uppercase"}
        fontSize="30px"
        mb={5}
        textAlign="center"
        fontFamily={"Ubuntu,sans-serif"}
        as="h1"
      >
        {`Tìm thấy ${resultData.length} kết quả cho "`}
        <Text as="span" textTransform="none">
          {router.query?.key}
        </Text>
        {'"'}
      </Heading>
      <Box height={"2px"} bgColor="black" mt={8} mb={8} />
      <ProductList productList={resultData} />
      <Box textAlign={"center"} mt="60px" mb="100px">
        <Link href="/product-list">
          <Button bg="primary" _hover={{ bg: "orange.600" }} px={16}>
            Xem tất cả sản phẩm
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<
  SearchResultProps
> = async ({ res, query }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const key = query?.key;

  if (!key || typeof key === "object") return { props: { resultData: [] } };

  const { data: resultData } = await commerce.products.list({
    query: key,
    include: "variant_groups",
  });

  if (!resultData) return { props: { resultData: [] } };

  return {
    props: {
      resultData,
    },
  };
};
