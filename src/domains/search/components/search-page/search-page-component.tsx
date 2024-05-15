import { ProductListingComponent } from "@/domains/product/components/product-listing-component";
import prisma from "@/lib/db";
import { SearchFiltersMobileComponent } from "./search-filters-mobile-component";
import { SearchFiltersDesktopComponent } from "./search-filters-desktop-component";
import { SearchTitleComponent } from "./search-title-component";
import { ProductWithPageAndBookPrisma } from "@/domains/product/types/product-prisma";
import { Prisma } from "@prisma/client";

export async function SearchPageComponent({
  keyword,
  categories,
  minPrice,
  maxPrice,
  minYear,
  maxYear,
  orderBy,
}: {
  keyword: string | null;
  categories: string[] | null;
  minPrice: number | null;
  maxPrice: number | null;
  minYear: number | null;
  maxYear: number | null;
  orderBy: string | null;
}) {
  const keywordFilter = keyword
    ? {
        OR: [
          {
            name: {
              contains: keyword ?? "",
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            isbn: {
              contains: keyword ?? "",
            },
          },
          {
            book: {
              authors: {
                some: {
                  name: {
                    contains: keyword ?? "",
                    mode: Prisma.QueryMode.insensitive,
                  },
                },
              },
            },
          },
        ],
      }
    : {};

  const categoriesFilter = categories
    ? {
        categories: {
          some: {
            page: {
              slug: {
                in: categories,
              },
            },
          },
        },
      }
    : {};

  const minPriceFilter =
    minPrice !== null
      ? {
          price: {
            gte: minPrice,
          },
        }
      : {};

  const maxPriceFilter =
    maxPrice !== null
      ? {
          price: {
            lte: maxPrice,
          },
        }
      : {};

  const minYearFilter =
    minYear !== null
      ? {
          book: {
            year: {
              gte: minYear,
            },
          },
        }
      : {};

  const maxYearFilter =
    maxYear !== null
      ? {
          book: {
            year: {
              lte: maxYear,
            },
          },
        }
      : {};

  const orderByQuery =
    orderBy !== null
      ? {
          [orderBy]: Prisma.SortOrder.asc,
        }
      : {
          name: Prisma.SortOrder.asc,
        };

  const products: ProductWithPageAndBookPrisma[] =
    await prisma.product.findMany({
      include: {
        book: {
          include: {
            authors: true,
          },
        },
        page: true,
      },
      where: {
        AND: [
          keywordFilter,
          categoriesFilter,
          minPriceFilter,
          maxPriceFilter,
          minYearFilter,
          maxYearFilter,
        ],
      },
      take: 500,
      orderBy: orderByQuery,
    });

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="basis-1/4">
        <SearchFiltersMobileComponent />
        <SearchFiltersDesktopComponent />
      </aside>
      <main className="basis-3/4 grow">
        <SearchTitleComponent />
        <div className="p-10 pt-0">
          <ProductListingComponent products={products} />
        </div>
      </main>
    </div>
  );
}
