import { ProductContainer } from "@/domains/product/containers/product-container";

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  return <ProductContainer slug={params.slug} />;
}
