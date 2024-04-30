import type { Metadata } from "next";
import { PageType } from "@/const/page";
import { handlePageBySlugAndType } from "@/helpers/handlePageBySlugAndType";
import { CmsPageContainer } from "@/domains/cmsPage/containers/cms-page-container";

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
