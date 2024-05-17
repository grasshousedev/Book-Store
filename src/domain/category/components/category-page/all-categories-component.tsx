"use client";

import { useLayoutContext } from "@/domain/layout/contexts/layout-context";
import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { CategoryLinkComponent } from "../category-link-component";
import { useCategoryPageContext } from "../../contexts/category-page-context";

export function AllCategoriesComponent() {
  const categories = useLayoutContext().state.categories;
  const currentCategory = useCategoryPageContext().state?.category;
  
  return (
    <nav className="p-10">
      <UiTitleComponent level="h2" size="small">
        Categories
      </UiTitleComponent>
      <ul className="text-sm flex flex-col divide-y">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`py-2 ${
              currentCategory?.id === category.id ? "font-bold" : ""
            }`}
          >
            <CategoryLinkComponent category={category}>
              {category.name}
            </CategoryLinkComponent>
          </li>
        ))}
      </ul>
    </nav>
  );
}
