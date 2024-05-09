import { SearchPageProvider } from "../contexts/search-page-context";
import { notFound } from "next/navigation";
import { SearchPageComponent } from "../components/search-page/search-page-component";

export async function SearchPageContainer({ keyword }: { keyword: string }) {
  try {
    return (
      <SearchPageProvider>
        <SearchPageComponent />
      </SearchPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
