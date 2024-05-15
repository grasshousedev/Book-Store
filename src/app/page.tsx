import type { Metadata } from "next";
import { PageType } from "@/const/page";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { HomePageContainer } from "@/domain/home/containers/home-page-container";

export async function generateMetadata(): Promise<Metadata> {
  return await handlePageBySlugAndType("home", PageType.CMS_PAGE);
}

export default async function Home() {
  return <HomePageContainer />;
}
