import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";
import { ProductLinkComponent } from "./product-link-component";
import { getAuthorsByProduct } from "../helpers/get-authors-by-product";
import { ProductListItemComponent } from "./product-list-item-component";
import CldImage from "@/lib/cld-image";

export function ProductCardComponent({
  product,
}: {
  product: ProductWithPageAndBookPrisma;
}) {
  return (
    <ProductListItemComponent>
      <ProductLinkComponent product={product}>
        <figure className="bg-green-300 w-full sm:w-[187px] h-[249px] relative overflow-hidden">
          <CldImage
            src={`product/${product.page.slug}`}
            width={187}
            height={269}
            alt={product.name}
            className="transition-all hover:-mt-[20px] object-cover w-full h-[269px]"
            sizes="640px"
            crop="auto"
          />
        </figure>
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
