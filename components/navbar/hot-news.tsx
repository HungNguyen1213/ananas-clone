import React, { useRef } from "react";
import { Swiper as SwiperType, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { HOT_NEWS } from "@/configs";

import "swiper/swiper.min.css";
import "swiper/css/navigation";

export function HotNews() {
  const swiperRef = useRef<SwiperType>();
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex
      justify="center"
      align="center"
      height="50px"
      bg="blackAlpha.100"
      sx={{
        "& .swiper": {
          width: { base: "100%", lg: "50%" },
          height: "100%",
          margin: "0 !important",
        },
        "& .swiper-slide": {
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "600",
          textTransform: "uppercase",
          fontFamily: "Nunito Sans, sans-serif",
        },
        "& .swiper-slide img": {
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      }}
    >
      <IconButton
        aria-label="Prev slider"
        height="100%"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        role="group"
        icon={
          <ChevronLeftIcon
            color="gray.400"
            _groupHover={{ color: "gray.900" }}
          />
        }
        display={{ base: "none", lg: "inline-flex" }}
        ref={navigationPrevRef}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        Prev
      </IconButton>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        speed={600}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {HOT_NEWS.map((item) => (
          <SwiperSlide key={item.label}>
            <Flex
              height="100%"
              align="center"
              justify="center"
              fontStyle="italic"
              fontSize={{ base: "12px", md: "16px" }}
            >
              {item.label}
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton
        height="100%"
        bg="transparent"
        aria-label="Next slider"
        _hover={{ bg: "transparent" }}
        role="group"
        icon={
          <ChevronRightIcon
            color="gray.400"
            _groupHover={{ color: "gray.900" }}
          />
        }
        display={{ base: "none", lg: "inline-flex" }}
        ref={navigationNextRef}
        onClick={() => swiperRef.current?.slideNext()}
      >
        Next
      </IconButton>
    </Flex>
  );
}
