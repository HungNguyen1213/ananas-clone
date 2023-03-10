import { Box } from "@chakra-ui/react";

import { Navbar } from "@/components";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}
