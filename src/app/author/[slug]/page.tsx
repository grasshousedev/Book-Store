import { AuthorPageContainer } from "@/domains/author/containers/author-page-container";

export default async function Author({
  params,
}: {
  params: { slug: string };
}) {
  return <AuthorPageContainer slug={params.slug} />;
}
