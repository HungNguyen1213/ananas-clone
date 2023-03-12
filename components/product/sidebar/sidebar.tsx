import { Accordion, Box } from "@chakra-ui/react";
import React, { memo } from "react";

import { useCategoriesStore } from "@/hooks";
import { SidebarGroup } from "./sidebar-group";

export const Sidebar = memo(function Sidebar() {
  const { categories } = useCategoriesStore();

  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        {categories
          ?.filter((category) => category?.children?.length)
          ?.map((category) => (
            <SidebarGroup key={category.id} category={category} />
          ))}
      </Accordion>
    </Box>
  );
});
