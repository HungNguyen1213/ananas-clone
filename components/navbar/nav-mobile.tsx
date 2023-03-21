import { Box } from "@chakra-ui/react";
import * as React from "react";

import { PRODUCT_NAV_PANEL_ROUTE } from "@/configs";
import { NavMobileItem } from "./nav-item";
import { NavMobileItem as NavMobileItemType } from "@/models";
import { useAttributeStore } from "@/hooks";

interface NavMobileProps {
  onClose: () => void;
}

export function NavMobile({ onClose }: NavMobileProps) {
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
    <Box bg="#4c4c4c">
      {navMobile.map((route) => (
        <React.Fragment key={route.href}>
          <NavMobileItem onCloseNavMobile={onClose} route={route} />
        </React.Fragment>
      ))}
    </Box>
  );
}
