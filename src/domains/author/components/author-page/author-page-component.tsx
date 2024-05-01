import { AllCategoriesComponent } from "@/domains/category/components/category-page/all-categories-component";
import { AuthorIntroComponent } from "./author-intro-component";
import { AuthorProductsComponent } from "./author-products-component";
import { UiWrapperComponent } from "@/domains/ui/components/ui-wrapper-component";

export function AuthorPageComponent() {
  return (
    <UiWrapperComponent className="flex">
      <aside className="min-w-[258px] hidden lg:block">
        <AllCategoriesComponent />
      </aside>
      <main className="grow">
        <AuthorIntroComponent />
        <AuthorProductsComponent />
      </main>
    </UiWrapperComponent>
  );
}
