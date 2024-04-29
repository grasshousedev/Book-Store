"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { ExploreOurTopCategoriesType } from "../types/explore-our-top-categories-type";
import { ExploreOurTopCategoriesContextType } from "../types/explore-our-top-categories-context-type";
import { CategoryPrisma } from "../types/category-prisma";

const initialState: ExploreOurTopCategoriesType = {
  categories: [],
};

const ExploreOurTopCategoriesContext = createContext<ExploreOurTopCategoriesContextType>({
  state: initialState,
});

export function ExploreOurTopCategoriesProvider({
  categories,
  children,
}: {
  categories: CategoryPrisma[];
  children: ReactNode;
}) {
  const [state, setState] = useState({ ...initialState, categories: categories });

  return (
    <ExploreOurTopCategoriesContext.Provider value={{ state }}>
      {children}
    </ExploreOurTopCategoriesContext.Provider>
  );
}

export function useExploreOurTopCategoriesContext(): ExploreOurTopCategoriesContextType {
  return useContext(ExploreOurTopCategoriesContext);
}
