import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Modal,
  ModalContent,
  useDisclosure,
  Center,
  Badge,
  ModalOverlay,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";

import { NavControlPanel } from "./nav-item";
import { HotNews } from "./hot-news";
import { NavDesktop } from "./nav-desktop";
import { CONTROL_ROUTES } from "@/configs";
import { useCartStore } from "@/hooks";
import { SearchControl } from "./search-control";
import { NavMobile } from "./nav-mobile";

import logo from "@/images/logo.svg";

export default function Navbar() {
  const { fetchCart, cart } = useCartStore();

  const router = useRouter();

  const {
    isOpen: isOpenMobileNav,
    onToggle: onToggleMobileNav,
    onClose: onCloseMobileNav,
  } = useDisclosure();

  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onClose: onCloseSearch,
  } = useDisclosure();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    onCloseSearch();
    onCloseMobileNav();
  }, [router.asPath, onCloseSearch, onCloseMobileNav]);

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
        >
          <Link href="/">
            <Image src={logo} alt="Logo" fill />
          </Link>
        </Box>
        <NavDesktop />
        <Box pb={"30px"} display={{ base: "none", lg: "block" }}>
          <SearchControl />
        </Box>
        <Box
          flexGrow={1}
          display={{ base: "block", lg: "none" }}
          borderLeft={{ base: "#f1f1f1 1px solid", lg: "none" }}
        >
          <Flex justify={"end"} align="center">
            <IconButton
              bg="transparent"
              _hover={{ bg: "transparent" }}
              aria-label="Search"
              icon={<SearchIcon color="black" boxSize={{ base: 6, md: 12 }} />}
              height="20vw"
              minW={{ base: "12", md: "15vw" }}
              onClick={onOpenSearch}
            />
            <Modal isOpen={isOpenSearch} onClose={onCloseSearch}>
              <ModalOverlay />
              <ModalContent
                maxW="unset"
                mt={"20vw"}
                px={10}
                py={5}
                bg="black"
                borderRadius="0"
              >
                <Box bg="white">
                  <SearchControl />
                </Box>
              </ModalContent>
            </Modal>
            <Link href="/your-cart">
              <Center minW={{ base: "12", md: "15vw" }} height="20vw">
                <Icon as={FaShoppingCart} boxSize={{ base: 6, md: 12 }} />
                <Badge
                  transform={"translate(-50%,-60%)"}
                  borderRadius="50%"
                  colorScheme={"red"}
                  fontSize={{ base: "xs", md: "xl" }}
                >
                  <Center>{cart?.total_items || 0}</Center>
                </Badge>
              </Center>
            </Link>
          </Flex>
        </Box>
        <IconButton
          height="20vw"
          width="20vw"
          display={{ base: "inline-flex", lg: "none" }}
          bgColor="#4c4c4c"
          aria-label="Toogle mobile menu"
          fontSize={{ base: "28px", md: "40px" }}
          icon={isOpenMobileNav ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggleMobileNav}
        />
        <Modal isOpen={isOpenMobileNav} onClose={onCloseMobileNav}>
          <ModalContent
            maxW="unset"
            height="calc(100% - 20vw)"
            mt="20vw"
            mb="0"
          >
            <Box color="white" bgColor="#4c4c4c" height="100%">
              <NavMobile />
            </Box>
          </ModalContent>
        </Modal>
      </HStack>
      <HotNews />
    </Box>
  );
}
