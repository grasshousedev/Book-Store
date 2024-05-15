import { AllCategoriesComponent } from "@/domain/category/components/category-page/all-categories-component";
import { AuthorIntroComponent } from "./author-intro-component";
import { AuthorProductsComponent } from "./author-products-component";

export function AuthorPageComponent() {
  return (
    <div className="flex flex-row">
      <aside className="basis-1/4 hidden lg:block">
        <AllCategoriesComponent />
      </aside>
      <main className="basis-3/4 grow">
        <AuthorIntroComponent />
        <AuthorProductsComponent />
      </main>
    </div>
  );
}
