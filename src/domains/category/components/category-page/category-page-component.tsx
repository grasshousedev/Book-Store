import { AllCategoriesComponent } from "./all-categories-component";
import { CategoryIntroComponent } from "./category-intro-component";
import { CategoryProductsComponent } from "./category-products-component";
import { UiWrapperComponent } from "@/domains/ui/components/ui-wrapper-component";

export function CategoryPageComponent() {
  return (
    <UiWrapperComponent className="flex">
      <aside className="min-w-[258px] hidden lg:block">
        <AllCategoriesComponent />
      </aside>
      <main className="grow">
        <CategoryIntroComponent />
        <CategoryProductsComponent />
      </main>
    </UiWrapperComponent>
  );
}
