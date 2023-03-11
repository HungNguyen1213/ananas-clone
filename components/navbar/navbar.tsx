import { Box, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { ImStackoverflow } from "react-icons/im";
import { GiPositionMarker } from "react-icons/gi";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import { NavItem } from "@/models";
import { Input } from "@/components";
import { NavControlPanel } from "./nav-item";
import { HotNews } from "./hot-news";
import { NavDesktop } from "./nav-desktop";

import logo from "@/images/logo.svg";

export default function Navbar() {
  const controlRoutes: NavItem[] = [
    {
      label: "Tra cứu đơn hàng",
      href: "/search-order",
      leftIcon: ImStackoverflow,
    },
    {
      label: "Tìm cửa hàng",
      href: "/stores",
      leftIcon: GiPositionMarker,
    },
    {
      label: "Yêu thích",
      href: "/your-wishlist",
      leftIcon: MdFavorite,
    },
    {
      label: "Đăng nhập",
      href: "/coming-soon",
      leftIcon: FaUser,
    },
    {
      label: "Giỏ hàng",
      href: "/your-cart",
      leftIcon: FaShoppingCart,
    },
  ];

  return (
    <Box>
      <HStack
        bg="blackAlpha.800"
        justify="flex-end"
        height="30px"
        align="center"
        spacing={5}
        pr={16}
        mb={3}
      >
        {controlRoutes.map((route) => (
          <NavControlPanel key={route.href} route={route} />
        ))}
      </HStack>
      <HStack
        height={{ base: "20vw", lg: "90px" }}
        maxHeight={{ base: "135px" }}
        px={16}
        mt={6}
        mb={5}
        justify="space-between"
        align={{ base: "center", lg: "flex-end" }}
      >
        <Box width={{ base: 7, lg: 14 }} height="100%" position="relative">
          <Image src={logo} alt="Logo" fill />
        </Box>
        <NavDesktop />
        <Box pb={3}>
          <Input
            name="search"
            leftIcon={<SearchIcon boxSize={5} color="gray.500" />}
            placeholder="Tìm kiếm"
          />
        </Box>
      </HStack>
      <HotNews />
    </Box>
  );
}
