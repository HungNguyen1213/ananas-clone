import * as React from "react";
import {
  AccordionItem,
  Box,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

import { NavRouteItem } from "@/components/navbar/nav-item";
import { Category } from "@/models";

interface SidebarGroupProps {
  category: Category;
}

export function SidebarGroup({ category }: SidebarGroupProps) {
  return (
    <Box>
      <AccordionItem>
        <AccordionButton>
          <NavRouteItem
            route={{
              href: "#",
              label: category.name,
              rightIcon: RiArrowDownSLine,
            }}
          />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {category?.children?.map((item) => (
            <Box key={item.id}>{item.name}</Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}
