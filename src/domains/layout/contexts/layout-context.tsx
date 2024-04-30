"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { LayoutContextType } from "../types/layout-context-type";
import { CategoryWithPagePrisma } from "@/domains/category/types/category-prisma";

const LayoutContext = createContext<LayoutContextType>({} as LayoutContextType);

export function LayoutProvider({
  categories,
  children,
}: {
  categories: CategoryWithPagePrisma[]
  children: ReactNode;
}) {
  const [state, setState] = useState({ categories: categories });

  return (
    <LayoutContext.Provider value={{ state }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext(): LayoutContextType {
  return useContext(LayoutContext);
}
