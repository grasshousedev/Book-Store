"use client";

import { useCategoryPageContext } from "../contexts/category-page-context";

export function CategoryPageComponent() {
  const category = useCategoryPageContext().state.category;
  return (
    <>
    Category {category.name}
    </>
  );
}
