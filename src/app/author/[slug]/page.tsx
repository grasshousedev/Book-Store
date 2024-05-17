import type { Metadata } from "next";
import { PageType } from "@/types/page-type";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { AuthorPageContainer } from "@/domain/author/containers/author-page-container";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return await handlePageBySlugAndType(params.slug, PageType.AUTHOR);
}

export default async function Author({
  params,
}: {
  params: { slug: string };
}) {
  return <AuthorPageContainer slug={params.slug} />;
}
