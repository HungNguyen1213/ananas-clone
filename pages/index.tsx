import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { SliderBanner } from "@/components";
import {
  BANNER_MAIN_ROUTES,
  BANNER_SALE_OFF_ROUTE,
  BANNER_SUPPORT_ROUTES,
} from "@/configs";

import bannerClothing from "@/images/banner_clothing.jpg";

export default function Home() {
  return (
    <Box>
      <SliderBanner slides={BANNER_MAIN_ROUTES} slideHeight="768px" />
      <Container>
        <Flex gap={10}>
          <Box width="calc(calc(100% - 40px) / 2)">
            <SliderBanner
              slides={BANNER_SUPPORT_ROUTES}
              slideHeight="475px"
              imageHeight="320px"
            />
          </Box>
          <Box width="calc(calc(100% - 40px) / 2)">
            <Box height={"320px"} width="100%" position="relative">
              <Link href={BANNER_SALE_OFF_ROUTE.href}>
                <Image src={BANNER_SALE_OFF_ROUTE.image} alt="Banner" fill />
              </Link>
            </Box>
            {BANNER_SALE_OFF_ROUTE?.label && (
              <Link href={BANNER_SALE_OFF_ROUTE.href}>
                <Text
                  textStyle="h1"
                  as="h3"
                  mt="30px"
                  mb="10px"
                  pr={1}
                  _hover={{ color: "primary" }}
                >
                  {BANNER_SALE_OFF_ROUTE.label}
                </Text>
              </Link>
            )}
            {BANNER_SALE_OFF_ROUTE?.description && (
              <Text textStyle={"p"} as="h4" pr="1">
                {BANNER_SALE_OFF_ROUTE.description}
              </Text>
            )}
          </Box>
        </Flex>
        <Box py={10}>
          <Text textStyle={"h1"} mb={10} as="h3" textAlign={"center"}>
            Danh mục mua hàng
          </Text>
          <Flex gap={2.5}>
            <Box flexGrow={1}>Giày nam</Box>
            <Box flexGrow={1}>Giày nữ</Box>
            <Box flexGrow={1}>Dòng sản phẩm</Box>
          </Flex>
        </Box>
      </Container>
      <Box
        position="relative"
        height="50vw"
        mb={10}
        sx={{ "& .img": { objectFit: "cover" } }}
      >
        <Image src={bannerClothing} alt="Our team" fill />
      </Box>
      <Box>
        <Text textStyle={"h1"} mb={10} as="h3" textAlign={"center"}>
          TIN TỨC & BÀI VIẾT
        </Text>
      </Box>
    </Box>
  );
}
