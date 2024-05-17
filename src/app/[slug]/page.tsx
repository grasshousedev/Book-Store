import type { Metadata } from "next";
import { PageType } from "@/types/page-type";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { CmsPageContainer } from "@/domain/cmsPage/containers/cms-page-container";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return await handlePageBySlugAndType(params.slug, PageType.CMS_PAGE);
}

export default async function CmsPage({
  params,
}: {
  params: { slug: string };
}) {
  return <CmsPageContainer slug={params.slug} />;
}
