"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { NewReleaseBooksContextType } from "../types/new-release-books-context-type";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

const NewReleaseBooksContext = createContext<NewReleaseBooksContextType>({} as NewReleaseBooksContextType);

export function NewReleaseBooksProvider({
  books,
  children,
}: {
  books: ProductWithPageAndBookPrisma[];
  children: ReactNode;
}) {
  const [state, setState] = useState({ books: books });

  return (
    <NewReleaseBooksContext.Provider value={{ state }}>
      {children}
    </NewReleaseBooksContext.Provider>
  );
}

export function useNewReleaseBooksContext(): NewReleaseBooksContextType {
  return useContext(NewReleaseBooksContext);
}
