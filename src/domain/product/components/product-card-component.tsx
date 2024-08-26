import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";
import { ProductLinkComponent } from "./product-link-component";
import { getAuthorsByProduct } from "../helpers/get-authors-by-product";
import { ProductListItemComponent } from "./product-list-item-component";

export function ProductCardComponent({
  product,
}: {
  product: ProductWithPageAndBookPrisma;
}) {
  return (
    <ProductListItemComponent>
      <ProductLinkComponent product={product}>
        <div className="bg-green-300 w-[187px] h-[249px]"></div>
      </ProductLinkComponent>
      <UiTitleComponent level="p" size="small" className="line-clamp-2 mt-2">
        <ProductLinkComponent product={product}>
          {product.name}
        </ProductLinkComponent>
      </UiTitleComponent>
      <address className="line-clamp-2">by {getAuthorsByProduct(product)}</address>
    </ProductListItemComponent>
  );
}
