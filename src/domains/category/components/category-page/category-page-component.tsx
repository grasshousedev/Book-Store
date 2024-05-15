import { AllCategoriesComponent } from "./all-categories-component";
import { CategoryIntroComponent } from "./category-intro-component";
import { CategoryProductsComponent } from "./category-products-component";
import { UiWrapperComponent } from "@/domains/ui/components/ui-wrapper-component";

export function CategoryPageComponent() {
  return (
    <div className="flex flex-row">
      <aside className="basis-1/4 hidden lg:block">
        <AllCategoriesComponent />
      </aside>
      <main className="basis-3/4 grow">
        <CategoryIntroComponent />
        <CategoryProductsComponent />
      </main>
    </div>
  );
}
