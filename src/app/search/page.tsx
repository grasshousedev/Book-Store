import { SearchPageContainer } from "@/domain/search/containers/search-page-container";
import { SearchParamsType } from "@/types/search-params-type";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParamsType;
}): Promise<Metadata> {
  const keyword = searchParams["keyword"]
    ? ` for ${searchParams["keyword"]}`
    : "";

  return {
    title: `Search Results${keyword}`,
  };
}

export default function Search({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  return <SearchPageContainer searchParams={searchParams} />;
}
