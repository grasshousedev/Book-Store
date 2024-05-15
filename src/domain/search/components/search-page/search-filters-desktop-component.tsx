"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { FilterByCategoryComponent } from "./filter-by-category-component";
import { FilterByPriceComponent } from "./filter-by-price-component";
import { FilterByYearComponent } from "./filter-by-year-component";
import { OrderByComponent } from "./order-by-component";

export function SearchFiltersDesktopComponent() {
  return (
    <div className="p-6 lg:p-10 hidden lg:block">
      <div>
        <UiTitleComponent size="small" level="h2">
          Filter by Category
        </UiTitleComponent>
        <FilterByCategoryComponent />
      </div>
      <div className="pt-10">
        <UiTitleComponent size="small" level="h2">
          Filter by Price
        </UiTitleComponent>
        <FilterByPriceComponent />
      </div>
      <div className="pt-10">
        <UiTitleComponent size="small" level="h2">
          Filter by Publication Year
        </UiTitleComponent>
        <FilterByYearComponent />
      </div>
      <div className="pt-10">
        <UiTitleComponent size="small" level="h2">
          Order by
        </UiTitleComponent>
        <OrderByComponent />
      </div>
    </div>
  );
}
