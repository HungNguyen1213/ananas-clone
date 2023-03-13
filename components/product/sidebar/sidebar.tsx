import { Accordion, Box } from "@chakra-ui/react";
import React, { memo } from "react";

import { Category } from "@/models";
import { SidebarItem } from "./sidebar-item";
import { AccordionItem } from "@/components";

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
