import { Asset } from "@chec/commerce.js/types/asset";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Box } from "@chakra-ui/react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import noImage from "@/images/product-no-image.png";

export interface SliderImageProps {
  images: Asset[];
}

export function SliderImage({ images }: SliderImageProps) {
  const [previewImage, setPreviewImage] = useState<string | StaticImageData>(
    images?.[0]?.url || noImage
  );

  console.log({ images });
  return (
    <Box width="50%">
      <Box width="100%" position="relative" pt="100%" mb={5}>
        <Box
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
          sx={{ "& img": { objectFit: "cover" } }}
        >
          <Image src={previewImage} alt="Preview" fill />
        </Box>
      </Box>
      <Box
        width="100%"
        sx={{
          "& .swiper": {
            width: "100%",
            height: " 100%",
          },
          "& .swiper-slide": {
            textAlign: "center",
            fontSize: "18px",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "& .swiper-slide img": {
            objectFit: "cover",
          },
          "& .swiper-button-next, & .swiper-button-prev": {
            color: "blackAlpha.600",
          },
          "& .swiper-button-next:hover, & .swiper-button-prev:hover": {
            color: "blackAlpha.900",
          },
        }}
        position="relative"
      >
        {images?.length > 0 && (
          <Swiper
            slidesPerView={4}
            spaceBetween={2}
            navigation={true}
            modules={[Navigation]}
          >
            {images.map((image) => (
              <SwiperSlide key={image.url}>
                <Box
                  width="100%"
                  pt="100%"
                  position="relative"
                  onClick={() => setPreviewImage(image.url)}
                >
                  <Image src={image.url} alt={image.filename} fill />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
    </Box>
  );
}
