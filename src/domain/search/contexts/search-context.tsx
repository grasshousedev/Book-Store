"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { SearchType } from "../types/search-type";
import { SearchActionType } from "../types/search-action-type";
import { SearchActionTypes } from "../enums/search-action-types";
import { SearchContextType } from "../types/search-context-type";
import { useSearchParams } from "next/navigation";
import { OrderByTypes } from "../enums/order-by-types";

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

function searchReducer(search: SearchType, action: SearchActionType) {
  switch (action.type) {
    case SearchActionTypes.UPDATED_KEYWORD:
      return {
        ...search,
        keyword: action.payload.keyword,
        categories: null,
        minprice: null,
        maxprice: null,
        minyear: null,
        maxyear: null,
        orderby: OrderByTypes.TITLE,
      };
    case SearchActionTypes.UPDATED_ORDERBY:
      return { ...search, orderby: action.payload.orderby };
    case SearchActionTypes.UPDATED_CATEGORIES:
      return { ...search, categories: action.payload.categories };
    case SearchActionTypes.UPDATED_PRICE:
      return {
        ...search,
        minprice: action.payload.minprice,
        maxprice: action.payload.maxprice,
      };
    case SearchActionTypes.UPDATED_YEAR:
      return {
        ...search,
        minyear: action.payload.minyear,
        maxyear: action.payload.maxyear,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";
  const categories = searchParams.getAll("categories");

  const minPriceFromUrl = searchParams.get("minprice");
  const minprice = minPriceFromUrl === null ? null : parseInt(minPriceFromUrl);

  const maxPriceFromUrl = searchParams.get("maxprice");
  const maxprice = maxPriceFromUrl === null ? null : parseInt(maxPriceFromUrl);

  const minYearFromUrl = searchParams.get("minyear");
  const minyear = minYearFromUrl === null ? null : parseInt(minYearFromUrl);

  const maxYearFromUrl = searchParams.get("maxyear");
  const maxyear = maxYearFromUrl === null ? null : parseInt(maxYearFromUrl);

  const orderby = searchParams.get("orderby") ?? OrderByTypes.TITLE;

  const initialStateBySearchParams = {
    keyword: keyword,
    categories: categories,
    minprice: minprice,
    maxprice: maxprice,
    minyear: minyear,
    maxyear: maxyear,
    orderby: orderby,
  };

  const [state, dispatch] = useReducer(
    searchReducer,
    initialStateBySearchParams
  );

  return (
    <SearchContext.Provider
      value={{ state, dispatch /*, getSearchItemsQty, searchItemsSubtotal*/ }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext(): SearchContextType {
  return useContext(SearchContext);
}
