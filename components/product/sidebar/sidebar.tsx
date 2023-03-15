import { Accordion, Box } from "@chakra-ui/react";
import React, { memo } from "react";

import { SidebarItem } from "./sidebar-item";
import { AccordionItem } from "@/components";
import { useCategoryStore } from "@/hooks";

export const Sidebar = memo(function Sidebar() {
  const { categoryList } = useCategoryStore();

  if (categoryList.length === 0) return null;

  const sidebarGroup = categoryList.filter(
    (category) => category?.children?.length
  );

  return (
    <Box>
      <Accordion
        defaultIndex={sidebarGroup.map((_, index) => index)}
        allowMultiple
      >
        {sidebarGroup?.map((category) => (
          <AccordionItem key={category.id} title={category.name}>
            {category?.children?.map((item) => (
              <SidebarItem key={item.id} subCategory={item} />
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
});
