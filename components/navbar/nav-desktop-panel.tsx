import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useCategoryStore } from "@/hooks";
import { Category } from "@/models";

interface NavDesktopPanelProps {
  href: string;
}

export function NavDesktopPanel({ href }: NavDesktopPanelProps) {
  const { fetchCategoryList } = useCategoryStore();

  useEffect(() => {
    fetchCategoryList();
  }, [fetchCategoryList]);

  return (
    <Box
      position="absolute"
      top="100%"
      left="0px"
      right="0px"
      w="100%"
      marginInlineStart="0 !important"
      zIndex={99}
      visibility="hidden"
      bg="#4c4c4c"
      color="text.lightGray"
      cursor="default"
      lineHeight={"1.15"}
    >
      {href === "/product-list" ? <ProductPanel /> : <CategoryPanel />}
    </Box>
  );
}

function CategoryPanel() {
  const { categoryList } = useCategoryStore();
  const categoryGroup = categoryList?.filter(
    (category) => category?.children?.length
  );
  return (
    <Flex justify="center">
      {categoryGroup.map((category) => (
        <CategoryPanelItem key={category.id} category={category} />
      ))}
    </Flex>
  );
}

interface CategoryPanelItem {
  category: Category;
}

function CategoryPanelItem({ category }: CategoryPanelItem) {
  return (
    <Box
      m={"30px 20px 40px"}
      w={"260px"}
      verticalAlign={"top"}
      borderRight="2px dashed #a5a5a5"
      _last={{ borderRight: "none" }}
    >
      <Text color={"white"} fontFamily="Ubuntu, sans-serif" mb={5}>
        {category.name}
      </Text>
      {category?.children?.map((item) => (
        <Text
          mb={3}
          fontSize={"md"}
          textTransform={"capitalize"}
          key={item.id}
          _hover={{ color: "primary" }}
        >
          {item.name}
        </Text>
      ))}
    </Box>
  );
}

function ProductPanel() {
  return <Box>ProductPanel</Box>;
}
