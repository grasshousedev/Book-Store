import type { Metadata } from "next";
import { PageType } from "@/types/page-type";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { CategoryPageContainer } from "@/domain/category/containers/category-page-container";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return await handlePageBySlugAndType(params.slug, PageType.CATEGORY);
}

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  return <CategoryPageContainer slug={params.slug} />;
}
