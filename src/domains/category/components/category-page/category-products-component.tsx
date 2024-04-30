"use client";

import { ProductListingComponent } from "@/domains/product/components/product-listing-component";
import { useCategoryPageContext } from "../../contexts/category-page-context";

export function CategoryProductsComponent() {
  const category = useCategoryPageContext().state.category;
  return (
    <div className="p-10">
      <ProductListingComponent products={category.products} />
    </div>
  );
}
