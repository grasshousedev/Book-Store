"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { useProductPageContext } from "../../contexts/product-page-context";
import { AuthorsWithLinkComponent } from "./authors-with-link-component";
import { ProductWithBookAndCategoriesPrisma } from "../../types/product-prisma";
import CldImage from "@/lib/cld-image";

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
      <figure className="bg-green-300 w-full sm:w-[374px] h-[497px] relative overflow-hidden mt-4">
        <CldImage
          src={`product/${product.page.slug}`}
          width={374}
          height={497}
          alt={product.name}
          className="object-cover w-full h-full"
          sizes="374px"
          crop="auto"
        />
      </figure>
      <UiTitleComponent level="h2" size="medium" className="mt-10">
        Synopses
      </UiTitleComponent>
      <p>{product.description}</p>
    </div>
  );
}
