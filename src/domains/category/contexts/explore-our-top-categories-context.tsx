"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { ExploreOurTopCategoriesContextType } from "../types/explore-our-top-categories-context-type";
import { CategoryWithPagePrisma } from "../types/category-prisma";

const ExploreOurTopCategoriesContext =
  createContext<ExploreOurTopCategoriesContextType>(
    {} as ExploreOurTopCategoriesContextType
  );

export function ExploreOurTopCategoriesProvider({
  categories,
  children,
}: {
  categories: CategoryWithPagePrisma[];
  children: ReactNode;
}) {
  const [state, setState] = useState({ categories: categories });

  return (
    <ExploreOurTopCategoriesContext.Provider value={{ state }}>
      {children}
    </ExploreOurTopCategoriesContext.Provider>
  );
}

export function useExploreOurTopCategoriesContext(): ExploreOurTopCategoriesContextType {
  return useContext(ExploreOurTopCategoriesContext);
}
