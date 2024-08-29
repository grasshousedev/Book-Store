import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import { CategoryLinkComponent } from "./category-link-component";
import CldImage from "@/lib/cld-image";

export function CategoryCardComponent({
  category,
}: {
  category: CategoryWithPagePrisma;
}) {
  return (
    <article className="snap-start p-5 w-[227px] h-[361px] flex-none text-sm text-pretty">
      <CategoryLinkComponent category={category}>
        <figure className="bg-green-300 w-[187px] h-[249px] overflow-hidden">
          <CldImage
            src={`category/${category.page.slug}`}
            width={187}
            height={269}
            alt={category.name}
            className="transition-all hover:-mt-[20px]"
            crop="auto"
          />
        </figure>
      </CategoryLinkComponent>
      <UiTitleComponent level="p" size="small" className="line-clamp-2 mt-2">
        <CategoryLinkComponent category={category}>
          {category.name}
        </CategoryLinkComponent>
      </UiTitleComponent>
    </article>
  );
}
