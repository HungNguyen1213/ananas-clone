import { GetStaticProps } from "next";
import { Product } from "@chec/commerce.js/types/product";
import { Box } from "@chakra-ui/react";

import { Category, ProductSummary, SeoData } from "@/models";
import { commerce } from "@/libs";
import { ProductPanel, Seo } from "@/components";

interface ProductListProps {
  productList: ProductSummary[];
  categoryList: Category[];
}

const ProductList = ({ productList, categoryList }: ProductListProps) => {
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
      <ProductPanel productList={productList} categoryList={categoryList} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps<ProductListProps> = async () => {
  const { data: resProducts } = await commerce.products.list();
  const productList: ProductSummary[] =
    resProducts?.map((product: Product) => ({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      permalink: product.permalink,
    })) || [];

  const { data: categoryList } = await commerce.categories.list();

  return { props: { productList, categoryList } };
};

export default ProductList;
