import { Box, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useEffect } from "react";

import { Input } from "@/components";
import { NavControlPanel } from "./nav-item";
import { HotNews } from "./hot-news";
import { NavDesktop } from "./nav-desktop";
import { CONTROL_ROUTES } from "@/configs";
import { useCartStore } from "@/hooks";

import logo from "@/images/logo.svg";

export default function Navbar() {
  const { fetchCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <Box mb="8">
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
          <Image src={logo} alt="Logo" fill />
        </Box>
        <NavDesktop />
        <Box pb={"30px"}>
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
