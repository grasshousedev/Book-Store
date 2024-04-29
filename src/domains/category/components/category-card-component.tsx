import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import { CategoryLinkComponent } from "./category-link-component";

export function CategoryCardComponent({ category }: { category: CategoryWithPagePrisma }) {
  return (
    <div className="bg-red-50 p-5 w-[227px] h-[361px] flex-none text-sm text-pretty">
      <CategoryLinkComponent category={category}>
        <div className="bg-gray-500 w-[187px] h-[249px]"></div>
      </CategoryLinkComponent>
      <UiTitleComponent level="h6" size="small" className="line-clamp-2 mt-2">
        <CategoryLinkComponent category={category}>
          {category.name}
        </CategoryLinkComponent>
      </UiTitleComponent>
    </div>
  );
}
