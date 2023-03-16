import { Accordion, Box } from "@chakra-ui/react";
import React, { memo } from "react";

import { SidebarItem } from "./sidebar-item";
import { AccordionItem } from "@/components";
import { useAttributeStore } from "@/hooks";

export const Sidebar = memo(function Sidebar() {
  const { attributeList } = useAttributeStore();

  if (attributeList.length === 0) return null;

  const sidebarGroup = attributeList.filter(
    (attribute) => attribute.options.length
  );

  return (
    <Box>
      <Accordion
        defaultIndex={sidebarGroup.map((_, index) => index)}
        allowMultiple
      >
        {sidebarGroup.map((attribute) => (
          <AccordionItem key={attribute.id} title={attribute.name}>
            {attribute.options.map((item) => (
              <SidebarItem key={item.id} option={item} />
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
});
