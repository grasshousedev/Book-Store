"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { CategoryPageType } from "../types/category-page-type";
import { CategoryPageContextType } from "../types/category-page-context-type";
import { CategoryWithPageAndProductsOrNullPrisma } from "../types/category-prisma";

const initialState: CategoryPageType = {
  category: null,
};

const CategoryPageContext = createContext<CategoryPageContextType>({
  state: initialState,
});

export function CategoryPageProvider({
  category,
  children,
}: {
  category: CategoryWithPageAndProductsOrNullPrisma;
  children: ReactNode;
}) {
  const [state, setState] = useState({ ...initialState, category: category });

  return (
    <CategoryPageContext.Provider value={{ state }}>
      {children}
    </CategoryPageContext.Provider>
  );
}

export function useCategoryPageContext(): CategoryPageContextType {
  return useContext(CategoryPageContext);
}
