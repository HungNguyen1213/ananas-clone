import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { theme } from "@/utils/theme";
import MainLayout from "@/layouts/main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
