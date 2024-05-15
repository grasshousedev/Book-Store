import { SearchPageComponent } from "../components/search-page/search-page-component";
import { SearchParamsType } from "@/types/search-params-type";

export async function SearchPageContainer({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  let keyword = searchParams.hasOwnProperty("keyword")
    ? searchParams["keyword"]
    : null;

  let categories = null;
  if (searchParams.hasOwnProperty("categories")) {
    let categoriesFromUrl = searchParams["categories"];
    if (categoriesFromUrl !== undefined) {
      categories = Array.isArray(categoriesFromUrl)
        ? categoriesFromUrl
        : [categoriesFromUrl];
    }
  }

  let minPrice = searchParams.hasOwnProperty("minprice")
    ? parseInt(searchParams["minprice"])
    : null;
  
  let maxPrice = searchParams.hasOwnProperty("maxprice")
    ? parseInt(searchParams["maxprice"])
    : null;
  
  let minYear = searchParams.hasOwnProperty("minyear")
    ? parseInt(searchParams["minyear"])
    : null;
  
  let maxYear = searchParams.hasOwnProperty("maxyear")
    ? parseInt(searchParams["maxyear"])
    : null;
  
  let orderBy = searchParams.hasOwnProperty("orderby")
    ? searchParams["orderby"]
    : null;
  

  return (
    <SearchPageComponent
      keyword={keyword}
      categories={categories}
      minPrice={minPrice}
      maxPrice={maxPrice}
      minYear={minYear}
      maxYear={maxYear}
      orderBy={orderBy}
    />
  );
}
