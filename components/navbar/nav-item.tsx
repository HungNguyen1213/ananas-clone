import { NavItem } from "@/models";
import { HStack, Link as ChakraLink, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

interface NavControlPanelProps {
  route: NavItem;
}

export function NavControlPanel({
  route: { label, href, leftIcon },
}: NavControlPanelProps) {
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
          <Text>{label}</Text>
        </HStack>
      </ChakraLink>
    </Link>
  );
}

export function NavRouteItem({
  route: { label, href, rightIcon },
}: NavControlPanelProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink
        as="div"
        fontSize="23px"
        textTransform="uppercase"
        fontWeight="bold"
        _hover={{ color: "primary" }}
        role="group"
        px={3}
      >
        <HStack>
          <Text>{label}</Text>
          {rightIcon && (
            <Icon
              color="black"
              boxSize={5}
              as={rightIcon}
              _groupHover={{ color: "primary" }}
            />
          )}
        </HStack>
      </ChakraLink>
    </Link>
  );
}
