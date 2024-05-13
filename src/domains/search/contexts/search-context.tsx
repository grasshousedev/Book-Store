"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { SearchType } from "../types/search-type";
import { SearchActionType } from "../types/search-action-type";
import { SearchActionTypes } from "../enums/search-action-types";
import { SearchContextType } from "../types/search-context-type";
import { useSearchParams } from "next/navigation";

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

function searchReducer(search: SearchType, action: SearchActionType) {
  switch (action.type) {
    case SearchActionTypes.UPDATED_KEYWORD:
      return { ...search, keyword: action.payload.keyword };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";
  const categories = searchParams.getAll("categories");
  const minprice = parseInt(searchParams.get("minprice") ?? "");
  const maxprice = parseInt(searchParams.get("maxprice") ?? "");
  const minyear = parseInt(searchParams.get("minyear") ?? "");
  const maxyear = parseInt(searchParams.get("maxyear") ?? "");
  const orderby = searchParams.get("orderby");

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
