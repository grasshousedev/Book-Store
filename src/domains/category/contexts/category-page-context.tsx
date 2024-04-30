"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { CategoryPageContextType } from "../types/category-page-context-type";
import { CategoryWithPageAndProductsPrisma } from "../types/category-prisma";

const CategoryPageContext = createContext<CategoryPageContextType>({} as CategoryPageContextType);

export function CategoryPageProvider({
  category,
  children,
}: {
  category: CategoryWithPageAndProductsPrisma;
  children: ReactNode;
}) {
  const [state, setState] = useState({ category: category });

  return (
    <CategoryPageContext.Provider value={{ state }}>
      {children}
    </CategoryPageContext.Provider>
  );
}

export function useCategoryPageContext(): CategoryPageContextType {
  return useContext(CategoryPageContext);
}
