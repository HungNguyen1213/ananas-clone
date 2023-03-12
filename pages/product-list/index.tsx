import { GetStaticProps } from "next";
import { Product } from "@chec/commerce.js/types/product";

import { ProductSummary } from "@/models";
import { commerce } from "@/libs";
import { ProductPanel } from "@/components";

interface ProductListProps {
  productList: ProductSummary[];
}

const ProductList = ({ productList }: ProductListProps) => {
  return <ProductPanel productList={productList} />;
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

  return { props: { productList } };
};

export default ProductList;
