import type { Metadata } from "next";
import { SearchPageContainer } from "@/domains/search/containers/search-page-container";

export function generateMetadata({
  params,
}: {
  params: { keyword: string };
}): Metadata {
  return {
    title: `Search Results for ${params.keyword}`
  };;
}

export default async function Category({
  params,
}: {
  params: { keyword: string };
}) {
  return <SearchPageContainer keyword={params.keyword} />;
}
