import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useAttributeStore } from "@/hooks";
import { Attribute } from "@/models";
import { PRODUCT_NAV_PANEL_ROUTE } from "@/configs";

interface NavDesktopPanelProps {
  href: string;
}

export function NavDesktopPanel({ href }: NavDesktopPanelProps) {
  return (
    <Box
      position="absolute"
      top="100%"
      left="0px"
      right="0px"
      w="100%"
      marginInlineStart="0 !important"
      zIndex={99}
      visibility="hidden"
      bg="#4c4c4c"
      color="text.lightGray"
      cursor="default"
      lineHeight={"1.15"}
    >
      {href === "/product-list" ? <MainPanel /> : <AttributePanel />}
    </Box>
  );
}

function AttributePanel() {
  const { attributeList, isLoading } = useAttributeStore();

  if (isLoading) return null;

  const attributeGroup = attributeList?.filter(
    (attribute) => attribute.options.length
  );

  console.log({ attributeList });

  return (
    <Flex direction={"column"} align="center">
      <Flex justify="center">
        {attributeGroup.map((attribute) => (
          <AttributePanelItem key={attribute.id} attribute={attribute} />
        ))}
      </Flex>
      <ComingSoonLink />
    </Flex>
  );
}

interface AttributePanelItem {
  attribute: Attribute;
}

function AttributePanelItem({ attribute }: AttributePanelItem) {
  return (
    <Box
      m={"30px 20px 40px"}
      w={"260px"}
      verticalAlign={"top"}
      borderRight="2px dashed #a5a5a5"
      _last={{ borderRight: "none" }}
    >
      <Text
        color={"white"}
        fontFamily="Ubuntu, sans-serif"
        fontSize={"23px"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        mb={5}
      >
        {attribute.name}
      </Text>
      {attribute.options.map((item) => (
        <Text
          mb={3}
          fontSize={"md"}
          textTransform={"capitalize"}
          key={item.id}
          _hover={{ color: "primary" }}
        >
          {item.label}
        </Text>
      ))}
    </Box>
  );
}

function MainPanel() {
  return (
    <Flex direction={"column"} align="center">
      <Flex justify="center" gap={10} pt={8}>
        {PRODUCT_NAV_PANEL_ROUTE.map((item) => (
          <Link key={item.href} href={item.href}>
            <Box
              width="290px"
              opacity={"0.5"}
              transition="opacity 0.5s ease-in-out"
              _hover={{ opacity: "1" }}
              textAlign="center"
            >
              <Box width="100%" pt="100%" position="relative">
                <Box
                  width="100%"
                  height="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  sx={{ "& img": { objectFit: "cover" } }}
                >
                  <Image src={item.image} alt="Menu" fill />
                </Box>
              </Box>

              <Box
                p="16px 0px 40px 0px"
                _hover={{ color: "primary" }}
                fontSize="23px"
                textTransform={"uppercase"}
                fontWeight="bold"
              >
                {item.label}
              </Box>
            </Box>
          </Link>
        ))}
      </Flex>
      <ComingSoonLink />
    </Flex>
  );
}

function ComingSoonLink() {
  return (
    <Box mt={5} mb={10}>
      <Link href="/coming-soon" passHref>
        <Box
          fontSize={"md"}
          fontFamily="Nunito Sans, sans-serif"
          fontStyle="italic"
          color="#808080"
        >
          MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
          <Box sx={{ px: "1", color: "white", display: "inline-block" }}>
            DỨA
          </Box>
          !
        </Box>
      </Link>
    </Box>
  );
}
