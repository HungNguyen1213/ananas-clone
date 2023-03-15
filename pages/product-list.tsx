import { GetServerSideProps } from "next";
import { Product } from "@chec/commerce.js/types/product";
import { Box } from "@chakra-ui/react";

import { Category, ProductSummary, SeoData } from "@/models";
import { commerce } from "@/libs";
import { ProductPanel, Seo } from "@/components";

interface ProductListProps {
  productList: ProductSummary[];
}

const ProductList = ({ productList }: ProductListProps) => {
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
      <ProductPanel productList={productList} />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<ProductListProps> = async ({
  res,
  query,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const attribute = query?.attribute;

  const { data: resProducts } = await commerce.products.list({
    category_slug: attribute,
  });
  const productList: ProductSummary[] =
    resProducts?.map((product: Product) => ({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      permalink: product.permalink,
    })) || [];

  return { props: { productList } };
};

export default ProductList;
