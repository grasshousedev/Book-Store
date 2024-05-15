"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { ProductPageContextType } from "../types/product-page-context-type";
import { ProductWithBookAndCategoriesPrisma } from "../types/product-prisma";

const ProductPageContext = createContext<ProductPageContextType>({} as ProductPageContextType);

export function ProductPageProvider({
  product,
  children,
}: {
  product: ProductWithBookAndCategoriesPrisma;
  children: ReactNode;
}) {
  const [state, setState] = useState({ product: product });

  return (
    <ProductPageContext.Provider value={{ state }}>
      {children}
    </ProductPageContext.Provider>
  );
}

export function useProductPageContext(): ProductPageContextType {
  return useContext(ProductPageContext);
}
