"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { FeaturedAuthorsContextType } from "../types/featured-authors-context-type";
import { AuthorWithPagePrisma } from "../types/author-prisma";

const FeaturedAuthorsContext = createContext<FeaturedAuthorsContextType>({} as FeaturedAuthorsContextType);

export function FeaturedAuthorsProvider({
  authors,
  children,
}: {
  authors: AuthorWithPagePrisma[];
  children: ReactNode;
}) {
  const [state, setState] = useState({ authors: authors });

  return (
    <FeaturedAuthorsContext.Provider value={{ state }}>
      {children}
    </FeaturedAuthorsContext.Provider>
  );
}

export function useFeaturedAuthorsContext(): FeaturedAuthorsContextType {
  return useContext(FeaturedAuthorsContext);
}
