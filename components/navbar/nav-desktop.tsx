import { Box, Divider, HStack } from "@chakra-ui/react";
import * as React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import { NavItem } from "@/models";
import { NavRouteItem } from "./nav-item";

export function NavDesktop() {
  const routes: NavItem[] = [
    {
      label: "Sản phẩm",
      href: "/product-list",
      rightIcon: RiArrowDownSLine,
    },
    {
      label: "Nam",
      href: "/product-list?gender=men",
      rightIcon: RiArrowDownSLine,
    },
    {
      label: "Nữ",
      href: "/product-list?gender=women",
      rightIcon: RiArrowDownSLine,
    },
    {
      label: "Sale off",
      href: "/promotion/clearance-sale",
    },
    {
      label: "Discover you",
      href: "/discoveryou",
    },
  ];

  return (
    <Box>
      <HStack align="center" justify="center" mb={2}>
        {routes.map((route) => (
          <React.Fragment key={route.href}>
            <NavRouteItem route={route} />
            <Divider
              orientation="vertical"
              borderLeftWidth="2px"
              borderColor="#e3e2e2"
              m={0}
              _last={{ display: "none" }}
              height="23px"
            />
          </React.Fragment>
        ))}
      </HStack>
    </Box>
  );
}
