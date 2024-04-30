import type { Metadata } from "next";
import { PageType } from "@/const/page";
import { handlePageBySlugAndType } from "@/helpers/handlePageBySlugAndType";
import { HomePageContainer } from "@/domains/home/containers/home-page-container";

export async function generateMetadata(): Promise<Metadata> {
  return await handlePageBySlugAndType("home", PageType.CMS_PAGE);
}

export default async function Home() {
  return <HomePageContainer />;
}
