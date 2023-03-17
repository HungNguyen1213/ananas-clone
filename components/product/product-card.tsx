import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";

import { ProductSummary } from "@/models";
import Link from "next/link";
import Image from "next/image";

import noImage from "@/images/product-no-image.png";

interface ProductCardProps {
  product: ProductSummary;
}

export function ProductCard({ product }: ProductCardProps) {
  const color = () => {
    const variantColor = product?.variant_groups.find(
      (variant) => variant.name.toLowerCase() === "color"
    );
    return variantColor ? variantColor.options[0].name : "N/A";
  };

  return (
    <Center pt={8} height={"full"} pb={4}>
      <Stack
        role={"group"}
        p={4}
        w={"full"}
        height={"full"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-8}
          pos={"relative"}
          pt="100%"
          width="100%"
          boxShadow={"md"}
        >
          <Box
            width="100%"
            height="100%"
            position="absolute"
            top={0}
            left={0}
            rounded={"lg"}
            overflow="hidden"
            sx={{ "& img": { objectFit: "cover" } }}
          >
            <Image src={product?.image?.url || noImage} fill alt="product" />
          </Box>
        </Box>
        <Stack
          pt={4}
          height={"full"}
          align={"center"}
          textAlign="center"
          textTransform={"uppercase"}
          justify="space-between"
        >
          <Stack>
            <Text color={"gray.500"} fontSize={"sm"}>
              {color()}
            </Text>
            <Heading
              fontSize={"lg"}
              fontFamily={"Nunito Sans, sans-serif"}
              _hover={{ color: "primary" }}
            >
              <Link href={`/product-details/${product.permalink}`}>
                {product.name}
              </Link>
            </Heading>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {product.price.formatted_with_symbol}
            </Text>
            {/* <Text textDecoration={"line-through"} color={"gray.600"}>
             Discount
            </Text> */}
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
