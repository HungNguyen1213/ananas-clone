import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { Navbar } from "@/components";
import { useCategoriesStore } from "@/hooks";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { fetchCategories } = useCategoriesStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}
