import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import { CategoryLinkComponent } from "./category-link-component";
import Image from "next/image";

export function CategoryCardComponent({
  category,
}: {
  category: CategoryWithPagePrisma;
}) {
  return (
    <article className="p-5 w-[227px] h-[361px] flex-none text-sm text-pretty">
      <CategoryLinkComponent category={category}>
        <figure className="bg-green-300 w-[187px] h-[249px] overflow-hidden">
          <Image
            src={`/images/category/${category.page.slug}.webp`}
            width={187}
            height={269}
            alt={category.name}
            className="transition-all hover:-mt-[20px]"
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
