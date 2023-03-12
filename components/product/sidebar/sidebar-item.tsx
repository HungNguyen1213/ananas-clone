import { Box } from "@chakra-ui/react";
import * as React from "react";

import { Subcategory } from "@/models";

export interface SidebarItemProps {
  subCategory: Subcategory;
}

export function SidebarItem({ subCategory }: SidebarItemProps) {
  return (
    <Box
      fontFamily="Nunito Sans, sans-serif"
      fontSize={"md"}
      px={5}
      py={2}
      _hover={{ bg: "blackAlpha.50" }}
    >
      {subCategory.name}
    </Box>
  );
}
