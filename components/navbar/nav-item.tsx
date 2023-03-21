import {
  HStack,
  Link as ChakraLink,
  Text,
  Icon,
  Box,
  Flex,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { NavItem, NavMobileItem } from "@/models";
import { NavDesktopPanel } from "./nav-desktop-panel";
import { useCartStore } from "@/hooks";

interface NavControlPanelProps {
  route: NavItem;
}

export function NavControlPanel({
  route: { label, href, leftIcon },
}: NavControlPanelProps) {
  const { cart } = useCartStore();

  return (
    <Link href={href} passHref>
      <ChakraLink
        as="div"
        fontFamily="Nunito Sans, sans-serif"
        fontSize="xs"
        color="white"
        _hover={{ color: "primary" }}
      >
        <HStack>
          {leftIcon && <Icon color="white" boxSize={4} as={leftIcon} />}
          <Text>{`${label}${
            href === "/your-cart" ? ` (${cart?.total_items || 0})` : ""
          }`}</Text>
        </HStack>
      </ChakraLink>
    </Link>
  );
}

export function NavMobileControlPanel({
  route: { label, href, leftIcon },
}: NavControlPanelProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink
        as="div"
        fontFamily="Ubuntu, sans-serif"
        letterSpacing="1px"
        padding="30px"
        fontSize="4.5vw"
        color="white"
        _hover={{ color: "white" }}
      >
        <Flex align="center">
          {leftIcon && <Icon color="white" boxSize={"5.5vw"} as={leftIcon} />}
          <Text marginInlineStart={6}>{label}</Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}

export function NavRouteItem({
  route: { label, href, rightIcon },
}: NavControlPanelProps) {
  const isLink = href !== "#";

  return (
    <>
      {isLink ? (
        <Box _hover={{ "& div:last-child": { visibility: "visible" } }}>
          <Link href={href} passHref>
            <ChakraLink
              as="div"
              fontSize="23px"
              textTransform="uppercase"
              fontWeight="bold"
              _hover={{
                color: "primary",
              }}
              role="group"
              px={4}
              lineHeight="90px"
            >
              <HStack>
                <Text>{label}</Text>
                {rightIcon && (
                  <Icon
                    color="black"
                    boxSize={5}
                    as={rightIcon}
                    _groupHover={{
                      color: "primary",
                      transform: "rotate(180deg)",
                    }}
                  />
                )}
              </HStack>
            </ChakraLink>
          </Link>
          {rightIcon && <NavDesktopPanel href={href} />}
        </Box>
      ) : (
        <Box>
          <ChakraLink
            as="div"
            fontSize="23px"
            textTransform="uppercase"
            fontWeight="bold"
            _hover={{ textDecoration: "none" }}
            role="group"
            px={3}
          >
            <HStack>
              <Text>{label}</Text>
              {rightIcon && <Icon color="inherit" boxSize={5} as={rightIcon} />}
            </HStack>
          </ChakraLink>
        </Box>
      )}
    </>
  );
}

interface NavMobileItemProps {
  route: NavMobileItem;
}

export function NavMobileItem({
  route: { label, href, children },
}: NavMobileItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleClickItem = () => {
    if (children && children.length > 0 && !isOpen) {
      return onOpen();
    }
    if (!children && href) {
      router.push(href);
    }
  };

  return (
    <Flex
      sx={{
        fontSize: "5.5vw",
        fontFamily: "Ubuntu,sans-serif",
        letterSpacing: "1px",
        padding: "30px",
        textTransform: "uppercase",
        fontWeight: "bold",
        borderBottom: "2px dashed grey",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={handleClickItem}
    >
      {label}
      {children && children.length > 0 && (
        <>
          <ChevronRightIcon boxSize={{ base: 8, md: 14 }} />
          <Slide
            unmountOnExit
            direction="right"
            in={isOpen}
            style={{
              zIndex: 20,
              top: ["sản phẩm", "nam", "nữ"].includes(label.toLowerCase())
                ? "20vw"
                : 0,
              marginInlineStart: 0,
            }}
          >
            <Box
              color="white"
              bgColor="#4c4c4c"
              height="100%"
              overflow={"auto"}
            >
              <Box
                textAlign="center"
                position="relative"
                sx={{
                  fontSize: "5.5vw",
                  fontFamily: "Ubuntu,sans-serif",
                  letterSpacing: "1px",
                  padding: "30px",
                  borderBottom: "2px solid white",
                }}
                onClick={onClose}
              >
                {label}
                <ChevronLeftIcon
                  boxSize={{ base: 8, md: 14 }}
                  position="absolute"
                  top="50%"
                  left="30px"
                  transform={"translateY(-50%)"}
                />
              </Box>
              {children.map((item, index) => (
                <NavMobileItem key={item.href || index} route={item} />
              ))}
            </Box>
          </Slide>
        </>
      )}
    </Flex>
  );
}
