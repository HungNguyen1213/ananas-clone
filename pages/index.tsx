import {
  Box,
  Container,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { Seo, SliderBanner } from "@/components";
import {
  BANNER_MAIN_ROUTES,
  BANNER_SALE_OFF_ROUTE,
  BANNER_SUPPORT_ROUTES,
} from "@/configs";
import { SeoData } from "@/models";

import bannerClothing from "@/images/banner_clothing.jpg";
import menCatalog from "@/images/catalogy-1.jpg";
import womenCataLog from "@/images/catalogy-2.jpg";
import branchCatalog from "@/images/catalogy-3.jpg";

export default function Home() {
  const seoData: SeoData = {
    title: "Ananas - DiscoverYou",
    url: "https://ananas-clone.vercel.app/",
    thumbnailUrl: "/basas_mobile-banner.jpg",
    description:
      "Với nhiều người, 2 thập kỷ sản xuất giày đã là một kỷ lục. Với Ananas, điều đó chỉ mới bắt đầu.",
  };

  const bannerHeight = useBreakpointValue({
    base: "200px",
    md: "400px",
    lg: "786px",
  });
  const bannerSupportHeight = useBreakpointValue({
    base: "256px",
    md: "410px",
    lg: "475px",
  });
  const imageBannerSupportHeight = useBreakpointValue({
    base: "90px",
    md: "190px",
    lg: "320px",
  });
  const bannerSupportGap = useBreakpointValue({
    base: "10px",
    md: "20px",
    lg: "40px",
  });

  return (
    <Box>
      <Seo data={seoData} />
      <SliderBanner slides={BANNER_MAIN_ROUTES} slideHeight={bannerHeight} />
      <Container>
        <Flex gap={bannerSupportGap}>
          <Box width={`calc(calc(100% - ${bannerSupportGap}) / 2)`}>
            <SliderBanner
              slides={BANNER_SUPPORT_ROUTES}
              slideHeight={bannerSupportHeight}
              imageHeight={imageBannerSupportHeight}
            />
          </Box>
          <Box width={`calc(calc(100% - ${bannerSupportGap}) / 2)`}>
            <Box
              height={imageBannerSupportHeight}
              width="100%"
              position="relative"
            >
              <Link href={BANNER_SALE_OFF_ROUTE.href}>
                <Image src={BANNER_SALE_OFF_ROUTE.image} alt="Banner" fill />
              </Link>
            </Box>
            {BANNER_SALE_OFF_ROUTE?.label && (
              <Link href={BANNER_SALE_OFF_ROUTE.href}>
                <Text
                  textStyle="h1"
                  as="h3"
                  mt={{ base: "15px", md: "30px" }}
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
            <Box width="100%" height="270px" position="relative">
              <Image src={menCatalog} alt="Catalog" fill />
              <Box
                width="100%"
                height="100%"
                position="absolute"
                bg="blackAlpha.400"
                top="0"
                left="0"
              />
              Giày nam
            </Box>
            <Box width="100%" height="270px" position="relative">
              Giày nữ
              <Image src={womenCataLog} alt="Catalog" fill />
              <Box
                width="100%"
                height="100%"
                position="absolute"
                bg="blackAlpha.400"
                top="0"
                left="0"
              />
            </Box>
            <Box width="100%" height="270px" position="relative">
              Dòng sản phẩm
              <Image src={branchCatalog} alt="Catalog" fill />
              <Box
                width="100%"
                height="100%"
                position="absolute"
                bg="blackAlpha.400"
                top="0"
                left="0"
              />
            </Box>
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
