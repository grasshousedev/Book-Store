"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { NewReleaseBooksType } from "../types/new-release-books-type";
import { NewReleaseBooksContextType } from "../types/new-release-books-context-type";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

const initialState: NewReleaseBooksType = {
  books: [],
};

const NewReleaseBooksContext = createContext<NewReleaseBooksContextType>({
  state: initialState,
});

export function NewReleaseBooksProvider({
  books,
  children,
}: {
  books: ProductWithPageAndBookPrisma[];
  children: ReactNode;
}) {
  const [state, setState] = useState({ ...initialState, books: books });

  return (
    <NewReleaseBooksContext.Provider value={{ state }}>
      {children}
    </NewReleaseBooksContext.Provider>
  );
}

export function useNewReleaseBooksContext(): NewReleaseBooksContextType {
  return useContext(NewReleaseBooksContext);
}
