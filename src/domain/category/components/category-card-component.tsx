import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import { CategoryLinkComponent } from "./category-link-component";

export function CategoryCardComponent({ category }: { category: CategoryWithPagePrisma }) {
  return (
    <div className="p-5 w-[227px] h-[361px] flex-none text-sm text-pretty">
      <CategoryLinkComponent category={category}>
        <div className="bg-green-300 w-[187px] h-[249px]"></div>
      </CategoryLinkComponent>
      <UiTitleComponent level="h6" size="small" className="line-clamp-2 mt-2">
        <CategoryLinkComponent category={category}>
          {category.name}
        </CategoryLinkComponent>
      </UiTitleComponent>
    </div>
  );
}
