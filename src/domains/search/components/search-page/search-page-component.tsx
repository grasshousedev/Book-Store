import { CategoryWithPageAndProductsPrisma } from "@/domains/category/types/category-prisma";
import { ProductListingComponent } from "@/domains/product/components/product-listing-component";
import prisma from "@/lib/db";
import React from "react";
import { SearchFiltersMobileComponent } from "./search-filters-mobile-component";
import { SearchFiltersDesktopComponent } from "./search-filters-desktop-component";
import { SearchTitleComponent } from "./search-title-component";

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
        <SearchFiltersMobileComponent />
        <SearchFiltersDesktopComponent />
      </aside>
      <main className="basis-3/4">
        <SearchTitleComponent />
        <div className="p-10">
          <ProductListingComponent products={category.products} />
        </div>
      </main>
    </div>
  );
}
