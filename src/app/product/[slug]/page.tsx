import { ProductPageContainer } from "@/domains/product/containers/product-page-container";

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  return <ProductPageContainer slug={params.slug} />;
}
