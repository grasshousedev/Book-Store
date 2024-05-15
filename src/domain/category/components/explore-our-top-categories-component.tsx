"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { CategoryCardComponent } from "./category-card-component";
import { useLayoutContext } from "@/domain/layout/contexts/layout-context";

export function ExploreOurTopCategoriesComponent() {
  const categories = useLayoutContext().state.categories;
  return (
    <section className="p-10 text-center">
      <UiTitleComponent level="h2" size="large">Explore Our Top Categories</UiTitleComponent>
      <div className="flex flex-wrap justify-center gap-5">
        {categories.map((category) => (
          <CategoryCardComponent key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
