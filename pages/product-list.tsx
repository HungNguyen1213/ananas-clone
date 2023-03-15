import { Box } from "@chakra-ui/react";

import { SeoData } from "@/models";
import { ProductPanel, Seo } from "@/components";

const ProductList = () => {
  const seoData: SeoData = {
    title: "Sản Phẩm – Ananas",
    description:
      "Với nhiều người, 2 thập kỷ sản xuất giày đã là một kỷ lục. Với Ananas, điều đó chỉ mới bắt đầu.",
    url: "https://ananas-clone.vercel.app/product-list",
    thumbnailUrl: "/product-list.jpg",
  };

  return (
    <Box>
      <Seo data={seoData} />
      <ProductPanel />
    </Box>
  );
};

export default ProductList;
