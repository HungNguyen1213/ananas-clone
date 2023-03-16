import { Box, Flex } from "@chakra-ui/react";
import React, { memo, useMemo, useCallback } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import { AttributeOption } from "@/models";

export interface SidebarItemProps {
  option: AttributeOption;
}

export const SidebarItem = memo(function SidebarItem({
  option,
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
    const isSelected = attribute?.includes(option.value);
    return { attribute, isSelected };
  }, [router.query?.attribute, option.value]);

  const handleClickItem = useCallback(() => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          attribute: !isSelected
            ? [...attribute, option.value]
            : [...attribute.filter((attr) => attr !== option.value)],
        },
      },
      undefined,
      { shallow: true }
    );
  }, [isSelected, attribute, router, option.value]);

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
      <Box cursor={"default"}>{option.label}</Box>
      {isSelected && <CloseIcon boxSize={"10px"} />}
    </Flex>
  );
});
