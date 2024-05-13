import { SearchPageContainer } from "@/domains/search/containers/search-page-container";
import { Metadata } from "next";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const keyword = searchParams["keyword"];

  return {
    title: `Search Results for ${keyword}`,
  };
}

export default function Search() {
  return <SearchPageContainer />;
}
