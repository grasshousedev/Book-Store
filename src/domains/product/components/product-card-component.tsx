import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { ProductPrisma } from "../types/product-prisma";

export function ProductCardComponent({ product }: { product: ProductPrisma }) {
  return (
    <div className="bg-red-50 p-5 w-[227px] h-[400px] flex-none text-sm text-pretty">
      <div className="bg-gray-500 w-[187px] h-[249px]"></div>
      <UiTitleComponent level="h6" size="small" className="line-clamp-2">
        {product.name}
      </UiTitleComponent>
      <span className="line-clamp-2">by {product.book?.authors.map(author => author.name).join(" and ")}</span>
    </div>
  );
}
