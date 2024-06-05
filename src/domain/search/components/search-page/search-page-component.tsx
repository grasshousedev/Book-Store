"use client";

import { SearchFiltersMobileComponent } from "./search-filters-mobile-component";
import { SearchFiltersDesktopComponent } from "./search-filters-desktop-component";
import { SearchTitleComponent } from "./search-title-component";
import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";
import { ProductCardComponent } from "@/domain/product/components/product-card-component";
import { useProductsInfiniteQuery } from "../../queries/use-products-infinite-query";
import { Fragment } from "react";
import { useSearchContext } from "../../contexts/search-context";
import { MAX_PRICE, MAX_YEAR, MIN_PRICE, MIN_YEAR } from "@/const/global";
import { UiLoaderComponent } from "@/domain/ui/components/ui-loader-component";
import { Button } from "@nextui-org/react";
import { ChevronDownIcon } from "lucide-react";
import { useCustomRouter } from "@/helpers/use-custom-router";
import { SearchActionEnum } from "../../enums/search-action-enum";
import { DEFAULT_ORDER_BY } from "../../consts";

export function SearchPageComponent() {
  const searchState = useSearchContext().state;
  const keyword = searchState.keyword;
  const categories = searchState.categories ?? [];
  const minPrice = searchState.minprice ?? MIN_PRICE;
  const maxPrice = searchState.maxprice ?? MAX_PRICE;
  const minYear = searchState.minyear ?? MIN_YEAR;
  const maxYear = searchState.maxyear ?? MAX_YEAR;
  const orderBy = searchState.orderby ?? DEFAULT_ORDER_BY;
  const searchDispatch = useSearchContext().dispatch;
  const customRouter = useCustomRouter();

  function handleClearFilters() {
    searchDispatch({
      type: SearchActionEnum.UPDATED_KEYWORD,
      payload: { keyword: "" },
    });
    customRouter.push("keyword", "", "/search", true);
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useProductsInfiniteQuery(
    keyword,
    categories,
    minPrice.toString(),
    maxPrice.toString(),
    minYear.toString(),
    maxYear.toString(),
    orderBy
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="basis-1/4 relative">
        {status === "pending" && (
          <div className="absolute bg-green-900 w-full h-full z-[99] flex items-center justify-center opacity-30 lg:hidden">
            <UiLoaderComponent />
          </div>
        )}
        <SearchFiltersMobileComponent />
        <SearchFiltersDesktopComponent />
      </aside>
      <main className="basis-3/4 grow">
        <SearchTitleComponent />
        <div className="p-10 pt-0">
          {status === "pending" ? (
            <UiLoaderComponent />
          ) : status === "error" ? (
            <p>Error: {error.message}</p>
          ) : (
            <>
              <div className="pb-4">
                <span>
                  {data.pages.length > 0 && data.pages[0].data.length > 0
                    ? `${data.pages[0].count} product${
                        data.pages[0].count > 1 ? "s" : ""
                      } found.`
                    : "No products found."}
                </span>
                <Button size="sm" className="ml-2" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {data.pages.map((page, i) => (
                  <Fragment key={i}>
                    {page.data.map((product: ProductWithPageAndBookPrisma) => (
                      <ProductCardComponent
                        key={product.id}
                        product={product}
                      />
                    ))}
                  </Fragment>
                ))}
              </div>
              {hasNextPage && (
                <div className="pt-10 flex justify-center">
                  <Button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    color="primary"
                    className="w-full lg:w-fit"
                  >
                    {isFetchingNextPage ? (
                      <UiLoaderComponent />
                    ) : hasNextPage ? (
                      <>
                        Load More Results
                        <ChevronDownIcon />
                      </>
                    ) : (
                      ""
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
