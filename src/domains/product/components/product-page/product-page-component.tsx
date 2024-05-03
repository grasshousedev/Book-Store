"use client";

import { AllCategoriesComponent } from "@/domains/category/components/category-page/all-categories-component";
import { ProductIntroComponent } from "./product-intro-component";
import { AddToCartComponent } from "./add-to-cart-component";
import { ProductDetailsComponent } from "./product-details-component";
import { useProductPageContext } from "../../contexts/product-page-context";
import { ProductWithBookAndCategoriesPrisma } from "../../types/product-prisma";
import { ProductsFromCategoryComponent } from "./products-from-category-component";
import { ProductsByAuthorComponent } from "./products-by-author-component";

export function ProductPageComponent() {
  const product: ProductWithBookAndCategoriesPrisma =
    useProductPageContext().state.product;
  return (
    <div className="flex">
      <aside className="min-w-[258px] hidden lg:block">
        <AllCategoriesComponent />
      </aside>
      <main className="grow p-10">
        <div className="lg:flex">
          <div className="lg:basis-2/3">
            <ProductIntroComponent />
            <ProductDetailsComponent />
          </div>
          <AddToCartComponent className="mt-10 lg:mt-0 lg:basis-1/3" />
        </div>
        {product.book?.authors.map((author) => (
          <ProductsByAuthorComponent key={author.id} author={author} className="mt-4" />
        ))}
        {product.categories.map((category) => (
          <ProductsFromCategoryComponent key={category.id} category={category} className="mt-4" />
        ))}
      </main>
    </div>
  );
}
