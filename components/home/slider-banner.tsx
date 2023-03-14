import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { BannerItem } from "@/models";

import "swiper/css/pagination";

interface SliderBannerProps {
  slides: BannerItem[];
  slideHeight: string;
  imageHeight?: string;
}

export function SliderBanner({
  slides,
  slideHeight,
  imageHeight = "100%",
}: SliderBannerProps) {
  const paginationConfig = {
    clickable: true,
  };

  return (
    <Box
      height={slideHeight}
      sx={{
        "& .swiper": { width: "100%", height: "100%" },
        "& .swiper-slide img": {
          objectFit: "cover",
        },
        "& .swiper-pagination": {
          top:
            imageHeight !== "100%"
              ? `calc(${imageHeight} - 24px)`
              : "var(--swiper-pagination-top,auto)",
          bottom:
            imageHeight !== "100%"
              ? `calc(${slideHeight} - ${imageHeight})`
              : "var(--swiper-pagination-bottom,8px)",
        },
        "& .swiper-pagination-bullet": {
          width: "50px",
          height: "5px",
          textAlign: "center",
          lineHeight: "20px",
          fontSize: "6px",
          color: "white",
          opacity: 1,
          backgroundColor: "#d3d3d3",
          borderRadius: "0",
        },
        "& .swiper-pagination-bullet-active": {
          color: "#fff",
          backgroundColor: "primary",
        },
      }}
    >
      <Swiper pagination={paginationConfig} modules={[Pagination]}>
        {slides.map((item) => (
          <SwiperSlide key={item.href}>
            <Box height={imageHeight} width="100%" position="relative">
              <Link href={item.href}>
                <Image src={item.image} alt="Banner" fill />
              </Link>
            </Box>
            {item?.label && (
              <Link href={item.href}>
                <Text
                  textStyle="h1"
                  as="h3"
                  mt="30px"
                  mb="10px"
                  pr={1}
                  _hover={{ color: "primary" }}
                >
                  {item.label}
                </Text>
              </Link>
            )}
            {item?.description && (
              <Text textStyle={"p"} as="h4" pr="1">
                {item.description}
              </Text>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
