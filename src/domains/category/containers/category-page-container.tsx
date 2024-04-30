import { AllCategoriesComponent } from "../components/category-page/all-categories-component";
import { CategoryIntroComponent } from "../components/category-page/category-intro-component";
import { CategoryProductsComponent } from "../components/category-page/category-products-component";
import { CategoryPageProvider } from "../contexts/category-page-context";
import prisma from "@/lib/db";
import { CategoryWithPageAndProductsPrisma } from "../types/category-prisma";
import { notFound } from "next/navigation";
import { UiWrapperComponent } from "@/domains/ui/components/ui-wrapper-component";

export async function CategoryPageContainer({ slug }: { slug: string }) {
  try {
    const category: CategoryWithPageAndProductsPrisma =
      await prisma.category.findFirstOrThrow({
        where: {
          page: {
            slug: slug,
          },
        },
        include: {
          page: true,
          products: true,
        },
      });
    return (
      <CategoryPageProvider category={JSON.parse(JSON.stringify(category))}>
        <UiWrapperComponent>
          <aside>
            <AllCategoriesComponent />
          </aside>
          <main>
            <CategoryIntroComponent />
            <CategoryProductsComponent />
          </main>
        </UiWrapperComponent>
      </CategoryPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
