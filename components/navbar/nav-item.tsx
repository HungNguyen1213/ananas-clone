import { HStack, Link as ChakraLink, Text, Icon, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { NavItem } from "@/models";
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
