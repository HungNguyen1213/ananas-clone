import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { ProductVariantGroup } from "@chec/commerce.js/types/product-variant-group";

import { fetchData, useCartStore } from "@/hooks";
import { Select, SelectOption } from "../common";
import { QUANTITY_LIST } from "@/configs";

interface ControlProps {
  productId: string;
  selectedSize?: string;
  storeQuantity?: string;
  isCartControl?: boolean;
}

export function Control(props: ControlProps) {
  const { addToCart, isLoading } = useCartStore();

  const {
    productId,
    selectedSize,
    isCartControl = false,
    storeQuantity = "",
  } = props;

  const [sizeVariants, setSizeVariants] = useState<SelectOption[]>([]);
  const [size, setSize] = useState<string>(selectedSize || "");
  const [quantity, setQuantity] = useState<string>(storeQuantity);

  const sizeGroupId = useRef<string>("");

  useEffect(() => {
    (async () => {
      if (productId) {
        const {
          data: { data },
        } = await fetchData(`/products/${productId}/variant_groups`);
        const sizeVariantGroup = (data as ProductVariantGroup[])?.find(
          (variantGroup) => variantGroup.name.toLowerCase() === "size"
        );
        if (!sizeVariantGroup) {
          setSizeVariants([]);
        } else {
          sizeGroupId.current = sizeVariantGroup.id;
          setSizeVariants(
            sizeVariantGroup.options.map((size) => ({
              value: size.id,
              label: size.name,
            }))
          );
        }
      }
    })();
  }, [productId]);

  const handleChangeSize = (selectedOption: string) => {
    setSize(selectedOption);
  };

  const handleChangeQuantity = (selectedOption: string) => {
    setQuantity(selectedOption);
  };

  return (
    <Box>
      <Grid
        gap={6}
        templateColumns={"repeat(2, 1fr)"}
        mb={isCartControl ? 0 : "5"}
      >
        <GridItem>
          <Select
            options={sizeVariants}
            value={
              sizeVariants.find((item) => item.value === size)?.label || ""
            }
            label={"Size"}
            onChange={handleChangeSize}
          />
        </GridItem>
        <GridItem>
          <Select
            options={QUANTITY_LIST.map((item) => ({
              value: item,
              label: item,
            }))}
            value={quantity}
            label={"Số lượng"}
            onChange={handleChangeQuantity}
          />
        </GridItem>
      </Grid>
      {!isCartControl && (
        <>
          <Box mb={5}>
            <Button
              width="100%"
              onClick={() =>
                addToCart(productId, Number(quantity), {
                  [sizeGroupId.current]: size,
                })
              }
              isLoading={isLoading}
              loadingText="Thêm vào giỏ hàng"
              spinnerPlacement="end"
            >
              Thêm vào giỏ hàng
            </Button>
          </Box>
          <Box>
            <Button width="100%" bg="primary" _hover={{ bg: "orange.600" }}>
              Thanh toán
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
