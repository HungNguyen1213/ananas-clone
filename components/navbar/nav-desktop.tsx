import { Box, Divider, Flex } from "@chakra-ui/react";
import * as React from "react";

import { NavRouteItem } from "./nav-item";
import { MAIN_ROUTES } from "@/configs";

export function NavDesktop() {
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
              m={0}
              _last={{ display: "none" }}
              height="23px"
            />
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}
