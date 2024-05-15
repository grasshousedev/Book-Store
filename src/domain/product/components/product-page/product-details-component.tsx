"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { useProductPageContext } from "../../contexts/product-page-context";
import { ProductWithBookAndCategoriesPrisma } from "../../types/product-prisma";
import { CategoriesWithLinkComponent } from "./categories-with-link-component";

export function ProductDetailsComponent({
  ...props
}: React.ComponentProps<"div">) {
  const product: ProductWithBookAndCategoriesPrisma =
    useProductPageContext().state.product;
  return (
    <div {...props}>
      <UiTitleComponent level="h2" size="medium" className="mt-10">
        Product Details
      </UiTitleComponent>
      <table className="text-left">
        <tbody>
          {product.book && (
            <>
              <tr>
                <th scope="row">Year</th>
                <td>{product.book.year}</td>
              </tr>
              <tr>
                <th scope="row">Pages</th>
                <td>{product.book.pages}</td>
              </tr>
              <tr>
                <th scope="row">Publisher</th>
                <td>{product.book.publisher.name}</td>
              </tr>
            </>
          )}
          <tr>
            <th scope="row">ISBN</th>
            <td>{product.isbn}</td>
          </tr>
          <tr>
            <th scope="row">
              {product.categories.length > 1 ? "Categories" : "Category"}
            </th>
            <td>
              <CategoriesWithLinkComponent categories={product.categories} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
