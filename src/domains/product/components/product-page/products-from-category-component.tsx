import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import {
  CategoryWithPageAndProductsPrisma,
  CategoryWithPagePrisma,
} from "@/domains/category/types/category-prisma";
import { ProductListingComponent } from "../product-listing-component";
import { CategoryLinkComponent } from "@/domains/category/components/category-link-component";
import { ProductListItemComponent } from "../product-list-item-component";

interface ProductsFromCategoryComponentInterface
  extends React.ComponentProps<"div"> {
  category: CategoryWithPageAndProductsPrisma;
}

function FinalCard({ category }: { category: CategoryWithPagePrisma }) {
  return (
    <ProductListItemComponent>
      <CategoryLinkComponent
        category={category}
        className="flex items-center h-full"
      >
        <span>See all books from {category.name}.</span>
      </CategoryLinkComponent>
    </ProductListItemComponent>
  );
}

export function ProductsFromCategoryComponent({
  category,
  ...props
}: ProductsFromCategoryComponentInterface) {
  return (
    category.products.length >= 1 && (
      <div {...props}>
        <UiTitleComponent level="h3" size="medium" className="mt-10">
          {category.name} Books You May Also Like
        </UiTitleComponent>
        <div className="mt-2">
          <ProductListingComponent
            products={category.products}
            endCard={<FinalCard category={category} />}
          />
        </div>
      </div>
    )
  );
}
