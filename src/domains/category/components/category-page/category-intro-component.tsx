"use client";

import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { useCategoryPageContext } from "../../contexts/category-page-context";

export function CategoryIntroComponent() {
  const category = useCategoryPageContext().state.category;
  return (
    <>
      <UiTitleComponent>{category.name}</UiTitleComponent>
      <p>{category.description}</p>
    </>
  );
}
