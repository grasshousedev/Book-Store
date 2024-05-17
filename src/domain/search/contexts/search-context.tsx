"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { SearchType } from "../types/search-type";
import { SearchActionType } from "../types/search-action-type";
import { SearchActionTypes } from "../enums/search-action-types";
import { SearchContextType } from "../types/search-context-type";
import { useSearchParams } from "next/navigation";
import { OrderByTypes } from "../enums/order-by-types";
import { DEFAULT_ORDER_BY } from "../consts";
import { MAX_PRICE, MAX_YEAR, MIN_PRICE, MIN_YEAR } from "@/const/global";
import { getIntValue } from "@/helpers/get-int-value";
import { getSearchParams } from "../helpers/get-search-params";

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
        orderby: DEFAULT_ORDER_BY,
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

  const { keyword, categories, minPrice, maxPrice, minYear, maxYear, orderBy } = getSearchParams(searchParams);

  const initialStateBySearchParams = {
    keyword: keyword,
    categories: categories,
    minprice: minPrice,
    maxprice: maxPrice,
    minyear: minYear,
    maxyear: maxYear,
    orderby: orderBy,
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
