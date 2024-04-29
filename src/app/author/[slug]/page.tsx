import { AuthorContainer } from "@/domains/author/containers/author-container";

export default async function Author({
  params,
}: {
  params: { slug: string };
}) {
  return <AuthorContainer slug={params.slug} />;
}
