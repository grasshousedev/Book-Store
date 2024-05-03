"use client";

import { UiButtonComponent } from "@/domains/ui/components/ui-button-component";
import { useProductPageContext } from "../../contexts/product-page-context";
import { ProductWithBookAndCategoriesPrisma } from "../../types/product-prisma";
import { UiPriceComponent } from "@/domains/ui/components/ui-price-component";

export function AddToCartComponent({ ...props }: React.ComponentProps<"div">) {
  const product: ProductWithBookAndCategoriesPrisma =
    useProductPageContext().state.product;
  return (
    <div {...props}>
      <div className="flex flex-col text-center border p-4">
        <span className="text-2xl p-2">
          <UiPriceComponent value={product.price.toString()} />
        </span>
        <UiButtonComponent className="p-2">ADD TO CART</UiButtonComponent>
        <span className="bg-green-50 p-2">Ships in 1 to 3 days</span>
      </div>
    </div>
  );
}
