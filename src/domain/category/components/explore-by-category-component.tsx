"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { CategoryCardComponent } from "./category-card-component";
import { useLayoutContext } from "@/domain/layout/contexts/layout-context";

export function ExploreByCategoryComponent() {
  const categories = useLayoutContext().state.categories;
  
  return (
    <section className="p-4 pb-10 md:p-10">
      <UiTitleComponent level="h2" size="large">Explore Our Top Categories</UiTitleComponent>
      <div className="snap-x overflow-x-auto flex sm:flex-wrap sm:justify-center sm:gap-2">
        {categories.map((category) => (
          <CategoryCardComponent key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
