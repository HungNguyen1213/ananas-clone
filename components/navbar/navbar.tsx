import {
  Box,
  HStack,
  IconButton,
  Modal,
  ModalContent,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { NavControlPanel } from "./nav-item";
import { HotNews } from "./hot-news";
import { NavDesktop } from "./nav-desktop";
import { CONTROL_ROUTES } from "@/configs";
import { useCartStore } from "@/hooks";
import { SearchControl } from "./search-control";
import { NavMobile } from "./nav-mobile";

import logo from "@/images/logo.svg";

export default function Navbar() {
  const { fetchCart } = useCartStore();

  const {
    isOpen: isOpenMobileNav,
    onToggle: onToggleMobileNav,
    onClose: onCloseMobileNav,
  } = useDisclosure();

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
        display={{ base: "none", lg: "flex" }}
      >
        {CONTROL_ROUTES.map((route) => (
          <NavControlPanel key={route.href} route={route} />
        ))}
      </HStack>
      <HStack
        height={{ base: "20vw", lg: "112px" }}
        maxHeight={{ base: "135px" }}
        px={{ base: 0, lg: 16 }}
        pt={{ base: 0, lg: 6 }}
        justify="space-between"
        align={{ base: "center", lg: "flex-end" }}
        position="relative"
      >
        <Box
          width={{ base: 14, lg: 14 }}
          height={{ base: "14", md: "100%" }}
          mb={{ base: 0, lg: 5 }}
          position="relative"
          mx={{ base: "10", md: "20", lg: 0 }}
          // borderRight={{ base: "#f1f1f1 1px solid", lg: "none" }}
        >
          <Link href="/">
            <Image src={logo} alt="Logo" fill />
          </Link>
        </Box>
        <NavDesktop />
        <Box pb={"30px"} display={{ base: "none", lg: "block" }}>
          <SearchControl />
        </Box>
        <IconButton
          height="20vw"
          width="20vw"
          maxW="135px"
          maxH="135px"
          display={{ base: "inline-flex", lg: "none" }}
          bgColor="#4c4c4c"
          aria-label="Toogle mobile menu"
          fontSize="40px"
          icon={isOpenMobileNav ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggleMobileNav}
        />
        <Modal isOpen={isOpenMobileNav} onClose={onCloseMobileNav}>
          <ModalContent
            maxW="unset"
            height="calc(100% - 135px)"
            mt="135px"
            mb="0"
          >
            <Box color="white" bgColor="#4c4c4c" height="100%">
              <NavMobile onClose={onCloseMobileNav} />
            </Box>
          </ModalContent>
        </Modal>
      </HStack>
      <HotNews />
    </Box>
  );
}
