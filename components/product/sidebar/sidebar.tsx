import { Accordion, Box } from "@chakra-ui/react";
import React, { memo } from "react";

import { Category } from "@/models";
import { SidebarGroup } from "./sidebar-group";

interface SidebarProps {
  categoryList: Category[];
}

export const Sidebar = memo(function Sidebar({ categoryList }: SidebarProps) {
  const sidebarGroup = categoryList?.filter(
    (category) => category?.children?.length
  );

  return (
    <Box>
      <Accordion
        defaultIndex={sidebarGroup?.map((_, index) => index) || []}
        allowMultiple
      >
        {sidebarGroup?.map((category) => (
          <SidebarGroup key={category.id} category={category} />
        ))}
      </Accordion>
    </Box>
  );
});
