import { Box, Flex } from "@chakra-ui/react";
import React, { memo, useMemo, useCallback } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import { Subcategory } from "@/models";

export interface SidebarItemProps {
  subCategory: Subcategory;
}

export const SidebarItem = memo(function SidebarItem({
  subCategory,
}: SidebarItemProps) {
  const router = useRouter();

  const { attribute, isSelected } = useMemo(() => {
    const temp = router.query?.attribute;
    const attribute =
      typeof temp === "undefined"
        ? []
        : typeof temp === "string"
        ? [temp]
        : [...temp];
    const isSelected = attribute?.includes(subCategory.slug);
    return { attribute, isSelected };
  }, [router.query?.attribute, subCategory.slug]);

  const handleClickItem = useCallback(() => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          attribute: !isSelected
            ? [...attribute, subCategory.slug]
            : [...attribute.filter((attr) => attr !== subCategory.slug)],
        },
      },
      undefined,
      { shallow: true }
    );
  }, [isSelected, attribute, router, subCategory.slug]);

  return (
    <Flex
      fontFamily="Nunito Sans, sans-serif"
      fontSize={"md"}
      px={5}
      py={2}
      _hover={{ bg: "blackAlpha.50" }}
      fontWeight={isSelected ? "bold" : "normal"}
      bg={isSelected ? "blackAlpha.50" : "transparent"}
      align="center"
      justify="space-between"
      mb={1}
      transition={"all .3s ease"}
      onClick={() => handleClickItem()}
    >
      <Box cursor={"default"}>{subCategory.name}</Box>
      {isSelected && <CloseIcon boxSize={"10px"} />}
    </Flex>
  );
});
