import { Box, Divider, HStack } from "@chakra-ui/react";
import * as React from "react";

import { NavRouteItem } from "./nav-item";
import { MAIN_ROUTES } from "@/configs";

export function NavDesktop() {
  return (
    <Box>
      <HStack align="center" justify="center" mb={2}>
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
      </HStack>
    </Box>
  );
}
