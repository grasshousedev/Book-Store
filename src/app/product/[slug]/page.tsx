import type { Metadata } from "next";
import { PageType } from "@/const/page";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { ProductPageContainer } from "@/domains/product/containers/product-page-container";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return await handlePageBySlugAndType(params.slug, PageType.PRODUCT);
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  return <ProductPageContainer slug={params.slug} />;
}
