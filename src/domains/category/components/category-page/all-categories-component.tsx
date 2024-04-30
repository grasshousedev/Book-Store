"use client";

import { useCategoryPageContext } from "../../contexts/category-page-context";

export function AllCategoriesComponent() {
  const category = useCategoryPageContext().state.category;
  return (
    <>
    All Categories
    </>
  );
}
