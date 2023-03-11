import React, { useRef } from "react";
import { Swiper as SwiperType, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, IconButton } from "@chakra-ui/react";

import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { NavItem } from "@/models";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export function HotNews() {
  const hotNews: NavItem[] = [
    {
      label: "BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE",
      href: "/faqs",
    },
    { label: "FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !", href: "/faqs" },
    { label: "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH", href: "/policy" },
    { label: "BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN", href: "/faqs" },
  ];

  const swiperRef = useRef<SwiperType>();
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex justify="center" align="center" height="50px" bg="blackAlpha.100">
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
        ref={navigationPrevRef}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        Prev
      </IconButton>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        speed={600}
        className="hot-news_swiper"
      >
        {hotNews.map((item) => (
          <SwiperSlide key={item.label}>
            <Flex
              height="100%"
              align="center"
              justify="center"
              fontStyle="italic"
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
        ref={navigationNextRef}
        onClick={() => swiperRef.current?.slideNext()}
      >
        Next
      </IconButton>
    </Flex>
  );
}
