"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { FeaturedAuthorsType } from "../types/featured-authors-type";
import { FeaturedAuthorsContextType } from "../types/featured-authors-context-type";
import { AuthorPrisma } from "../types/author-prisma";

const initialState: FeaturedAuthorsType = {
  authors: [],
};

const FeaturedAuthorsContext = createContext<FeaturedAuthorsContextType>({
  state: initialState,
});

export function FeaturedAuthorsProvider({
  authors,
  children,
}: {
  authors: AuthorPrisma[];
  children: ReactNode;
}) {
  const [state, setState] = useState({ ...initialState, authors: authors });

  return (
    <FeaturedAuthorsContext.Provider value={{ state }}>
      {children}
    </FeaturedAuthorsContext.Provider>
  );
}

export function useFeaturedAuthorsContext(): FeaturedAuthorsContextType {
  return useContext(FeaturedAuthorsContext);
}
