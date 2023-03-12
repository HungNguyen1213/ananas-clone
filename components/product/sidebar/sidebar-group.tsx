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
import { SidebarItem } from "./sidebar-item";

interface SidebarGroupProps {
  category: Category;
}

export function SidebarGroup({ category }: SidebarGroupProps) {
  return (
    <AccordionItem
      py={6}
      borderStyle="dashed"
      borderBottomWidth={3}
      borderTopWidth="0"
      _last={{ borderBottomWidth: "0" }}
    >
      {({ isExpanded }) => (
        <>
          <AccordionButton
            px={0}
            _hover={{ bg: "white" }}
            _expanded={{ color: "primary" }}
            sx={{
              "& div[role='group']": { pl: 0 },
              "& svg.chakra-icon": {
                transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                transition: "transform .3s ease",
              },
            }}
            transition={"all .3s ease"}
          >
            <NavRouteItem
              route={{
                href: "#",
                label: category.name,
                rightIcon: RiArrowDownSLine,
              }}
            />
          </AccordionButton>
          <AccordionPanel pb={4} px={0} pt={0}>
            {category?.children?.map((item) => (
              <SidebarItem key={item.id} subCategory={item} />
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
