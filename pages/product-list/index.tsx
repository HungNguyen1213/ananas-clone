import { GetStaticProps } from "next";
import { Product } from "@chec/commerce.js/types/product";

import { Category, ProductSummary } from "@/models";
import { commerce } from "@/libs";
import { ProductPanel } from "@/components";

interface ProductListProps {
  productList: ProductSummary[];
  categoryList: Category[];
}

const ProductList = ({ productList, categoryList }: ProductListProps) => {
  return <ProductPanel productList={productList} categoryList={categoryList} />;
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
