import type { Metadata } from "next";
import { PageType } from "@/const/page";
import { handlePageBySlugAndType } from "@/helpers/handlePageBySlugAndType";
import { AuthorPageContainer } from "@/domains/author/containers/author-page-container";

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
