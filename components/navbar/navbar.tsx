import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { NavControlPanel } from "./nav-item";
import { HotNews } from "./hot-news";
import { NavDesktop } from "./nav-desktop";
import { CONTROL_ROUTES } from "@/configs";
import { useCartStore } from "@/hooks";

import logo from "@/images/logo.svg";
import { SearchControl } from "./search-control";

export default function Navbar() {
  const { fetchCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

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
        {CONTROL_ROUTES.map((route) => (
          <NavControlPanel key={route.href} route={route} />
        ))}
      </HStack>
      <HStack
        height={{ base: "20vw", lg: "112px" }}
        maxHeight={{ base: "135px" }}
        px={16}
        pt={6}
        justify="space-between"
        align={{ base: "center", lg: "flex-end" }}
        position="relative"
      >
        <Box
          width={{ base: 7, lg: 14 }}
          height="100%"
          mb={5}
          position="relative"
        >
          <Link href="/">
            <Image src={logo} alt="Logo" fill />
          </Link>
        </Box>
        <NavDesktop />
        <Box pb={"30px"}>
          <SearchControl />
        </Box>
      </HStack>
      <HotNews />
    </Box>
  );
}
