import * as React from "react";
import {
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { NavRouteItem } from "../navbar/nav-item";
import { RiArrowDownSLine } from "react-icons/ri";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  return (
    <ChakraAccordionItem
      py={6}
      borderStyle="dashed"
      borderBottomWidth={"2px"}
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
                label: title,
                rightIcon: RiArrowDownSLine,
              }}
            />
          </AccordionButton>
          <AccordionPanel pb={4} px={0} pt={0}>
            {children}
          </AccordionPanel>
        </>
      )}
    </ChakraAccordionItem>
  );
}
