import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { ProductPrisma } from "../types/product-prisma";
import { ProductLinkComponent } from "./product-link-component";
import { useBookAuthors } from "../helpers/useBookAuthors";

export function ProductCardComponent({ product }: { product: ProductPrisma }) {
  return (
    <div className="bg-red-50 p-5 w-[227px] h-[400px] flex-none text-sm text-pretty">
      <ProductLinkComponent product={product}>
        <div className="bg-gray-500 w-[187px] h-[249px]"></div>
      </ProductLinkComponent>
      <UiTitleComponent level="h6" size="small" className="line-clamp-2 mt-2">
        <ProductLinkComponent product={product}>
          {product.name}
        </ProductLinkComponent>
      </UiTitleComponent>
      <span className="line-clamp-2">by {useBookAuthors(product)}</span>
    </div>
  );
}
