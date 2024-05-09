import { CategoryWithPageAndProductsPrisma } from "@/domains/category/types/category-prisma";
import { ProductListingComponent } from "@/domains/product/components/product-listing-component";
import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import prisma from "@/lib/db";
import React from "react";
import { SearchFiltersComponent } from "./search-filters-component";

export async function SearchPageComponent() {
  const category: CategoryWithPageAndProductsPrisma =
    await prisma.category.findFirstOrThrow({
      where: {
        page: {
          slug: "arts-and-entertainment",
        },
      },
      include: {
        page: true,
        products: {
          include: {
            book: {
              include: {
                authors: true,
              },
            },
            page: true,
          },
        },
      },
    });

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="basis-1/4">
        <SearchFiltersComponent />
      </aside>
      <main className="basis-3/4">
        <div className="p-10">
          <UiTitleComponent size="large">
            Search Results for "Max Webber"
          </UiTitleComponent>
        </div>
        <div className="p-10">
          <ProductListingComponent products={category.products} />
        </div>
      </main>
    </div>
  );
}
