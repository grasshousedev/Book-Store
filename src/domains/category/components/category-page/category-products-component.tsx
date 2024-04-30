"use client";

import { useCategoryPageContext } from "../../contexts/category-page-context";

export function CategoryProductsComponent() {
  const category = useCategoryPageContext().state.category;
  return (
    <>
    Product List
    </>
  );
}
