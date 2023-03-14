import { Box, Divider, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { NavRouteItem } from "./nav-item";
import { MAIN_ROUTES } from "@/configs";
import { useCategoryStore } from "@/hooks";

export function NavDesktop() {
  const { fetchCategoryList } = useCategoryStore();

  useEffect(() => {
    fetchCategoryList();
  }, [fetchCategoryList]);

  return (
    <Box>
      <Flex align="center" justify="center">
        {MAIN_ROUTES.map((route) => (
          <React.Fragment key={route.href}>
            <NavRouteItem route={route} />
            <Divider
              orientation="vertical"
              borderLeftWidth="2px"
              borderColor="#e3e2e2"
              mx={1}
              _last={{ display: "none" }}
              height="23px"
            />
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}
