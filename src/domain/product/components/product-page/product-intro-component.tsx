"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { useProductPageContext } from "../../contexts/product-page-context";
import { AuthorsWithLinkComponent } from "./authors-with-link-component";
import { ProductWithBookAndCategoriesPrisma } from "../../types/product-prisma";

export function ProductIntroComponent({
  ...props
}: React.ComponentProps<"div">) {
  const product: ProductWithBookAndCategoriesPrisma =
    useProductPageContext().state.product;
  return (
    <div {...props}>
      <UiTitleComponent size="large">{product.name}</UiTitleComponent>
      {product.book && (
        <AuthorsWithLinkComponent authors={product.book.authors} />
      )}
      <div className="bg-gray-500 w-[374px] h-[497px] mt-4"></div>
      <UiTitleComponent level="h2" size="medium" className="mt-10">
        Synopses
      </UiTitleComponent>
      <p>{product.description}</p>
    </div>
  );
}
