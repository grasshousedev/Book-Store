"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { SearchPageContextType } from "../types/search-page-context-type";

const SearchPageContext = createContext<SearchPageContextType>({} as SearchPageContextType);

export function SearchPageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState({ });

  return (
    <SearchPageContext.Provider value={{ state }}>
      {children}
    </SearchPageContext.Provider>
  );
}

export function useSearchPageContext(): SearchPageContextType {
  return useContext(SearchPageContext);
}
