import { Box } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";

import { CONTROL_ROUTES, PRODUCT_NAV_PANEL_ROUTE } from "@/configs";
import { NavMobileControlPanel, NavMobileItem } from "./nav-item";
import { NavMobileItem as NavMobileItemType } from "@/models";
import { useAttributeStore } from "@/hooks";

export function NavMobile() {
  const { attributeList, isLoading } = useAttributeStore();

  if (isLoading) return null;

  const attributeGroup = (href: string): NavMobileItemType[] => {
    return attributeList
      ?.filter(
        (attribute) =>
          attribute.name.toLowerCase() === "trạng thái" ||
          attribute.name.toLowerCase() === "kiểu dáng" ||
          attribute.name.toLowerCase() === "dòng sản phẩm" ||
          attribute.name.toLowerCase() === "bộ sưu tập"
      )
      .map((item) => ({
        label: item.name,
        children: item.options.map((option) => ({
          label: option.label,
          href: `${href}&attribute=${option.value}`,
        })),
      }));
  };

  const navMobile: NavMobileItemType[] = [
    {
      label: "Sản phẩm",
      href: "/product-list",
      children: PRODUCT_NAV_PANEL_ROUTE.map((item) => ({
        label: item.label || "",
        href: item.href,
      })),
    },
    {
      label: "Nam",
      href: "/product-list?attribute=men",
      children: attributeGroup("/product-list?attribute=men"),
    },
    {
      label: "Nữ",
      href: "/product-list?attribute=women",
      children: attributeGroup("/product-list?attribute=women"),
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
    <Box bg="#4c4c4c" height="100%" overflow={"auto"}>
      {navMobile.map((route) => (
        <React.Fragment key={route.href}>
          <NavMobileItem route={route} />
        </React.Fragment>
      ))}
      {CONTROL_ROUTES.filter(
        (route) => route.label.toLowerCase() !== "giỏ hàng"
      ).map((route) => (
        <NavMobileControlPanel key={route.href} route={route} />
      ))}
      <Box p="30px" borderTop="2px solid white">
        <Link href="/coming-soon" passHref>
          <Box
            fontSize={"4vw"}
            fontFamily="Nunito Sans, sans-serif"
            fontStyle="italic"
            color="#808080"
            textAlign={"center"}
          >
            MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
            <Box sx={{ px: "1", color: "white", display: "inline-block" }}>
              DỨA
            </Box>
            !
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
