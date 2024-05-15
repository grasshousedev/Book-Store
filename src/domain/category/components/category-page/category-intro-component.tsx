"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { useCategoryPageContext } from "../../contexts/category-page-context";

export function CategoryIntroComponent() {
  const category = useCategoryPageContext().state.category;
  return (
    <div className="p-10">
      <UiTitleComponent size="large">{category.name}</UiTitleComponent>
      <p className="mt-4">{category.description}</p>
    </div>
  );
}
