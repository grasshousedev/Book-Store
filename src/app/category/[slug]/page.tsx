import { CategoryPageContainer } from "@/domains/category/containers/category-page-container";

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  return <CategoryPageContainer slug={params.slug} />;
}
