import { CategoryContainer } from "@/domains/category/containers/category-container";

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  return <CategoryContainer slug={params.slug} />;
}
