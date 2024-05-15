import { CategoryLinkComponent } from "@/domain/category/components/category-link-component";
import { CategoryWithPagePrisma } from "@/domain/category/types/category-prisma";

export function CategoriesWithLinkComponent({
  categories,
}: {
  categories: CategoryWithPagePrisma[];
}) {
  return categories.map((category, index) => (
    <>
      <CategoryLinkComponent key={category.id} category={category} className="underline">
        {category.name}
      </CategoryLinkComponent>
      {categories.length > 1 && index < categories.length - 1 ? ", " : ""}
    </>
  ));
}
