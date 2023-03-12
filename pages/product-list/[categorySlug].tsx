import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Product } from "@chec/commerce.js/types/product";

import { ProductSummary } from "@/models";
import { commerce } from "@/libs";
import { ProductPanel } from "@/components";
import { CATEGORY_SLUGS } from "@/configs";

interface ProductListByCategoryProps {
  productList: ProductSummary[];
}

const ProductListByCategory = ({ productList }: ProductListByCategoryProps) => {
  return <ProductPanel productList={productList} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATEGORY_SLUGS.map((item: { slug: string }) => ({
    params: { categorySlug: item.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  ProductListByCategoryProps
> = async ({ params }: GetStaticPropsContext) => {
  const res = await commerce.products.list({
    category_slug: params?.categorySlug,
  });

  const productList: ProductSummary[] =
    res?.data?.map((product: Product) => ({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      permalink: product.permalink,
    })) || [];

  return { props: { productList } };
};

export default ProductListByCategory;
