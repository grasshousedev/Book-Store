"use client";

import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { CategoryCardComponent } from "./category-card-component";
import { useLayoutContext } from "@/domains/layout/contexts/layout-context";

export function ExploreOurTopCategoriesComponent() {
  const categories = useLayoutContext().state.categories;
  return (
    <section className="p-10 bg-green-50 text-center">
      <UiTitleComponent level="h2" size="large">Explore Our Top Categories</UiTitleComponent>
      <div className="flex flex-wrap justify-center gap-5">
        {categories.map((category) => (
          <CategoryCardComponent key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
