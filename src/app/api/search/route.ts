import { MAX_PRICE, MAX_YEAR, MIN_PRICE, MIN_YEAR } from "@/const/global";
import { DEFAULT_ORDER_BY, PRODUCTS_PER_PAGE } from "@/domain/search/consts";
import { OrderByTypes } from "@/domain/search/enums/order-by-types";
import { getSearchParams } from "@/domain/search/helpers/get-search-params";
import { InfiniteSearchResponseType } from "@/domain/search/types/infinite-search-response-type";
import { getIntValue } from "@/helpers/get-int-value";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const cursor = getIntValue(searchParams.get("cursor"), 0);
  const { keyword, categories, minPrice, maxPrice, minYear, maxYear, orderBy } = getSearchParams(searchParams);

  const keywordFilter =
    keyword != ""
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

  const categoriesFilter =
    categories.filter((value) => value != "").length > 0
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

  const minPriceFilter = {
    price: {
      gte: minPrice,
    },
  };

  const maxPriceFilter = {
    price: {
      lte: maxPrice,
    },
  };

  const minYearFilter = {
    book: {
      year: {
        gte: minYear,
      },
    },
  };

  const maxYearFilter = {
    book: {
      year: {
        lte: maxYear,
      },
    },
  };

  const orderByQuery = {
    [orderBy]: Prisma.SortOrder.asc,
  };

  const [data, count] = await prisma.$transaction([
    prisma.product.findMany({
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
      skip: cursor,
      take: PRODUCTS_PER_PAGE,
      orderBy: orderByQuery,
    }),
    prisma.product.count({
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
    }),
  ]);

  const response: InfiniteSearchResponseType = { data: data, count: count };
  const totalPages = Math.ceil(count / PRODUCTS_PER_PAGE);
  const currentPage = cursor / PRODUCTS_PER_PAGE + 1;
  if (totalPages > currentPage) {
    return Response.json({
      ...response,
      nextCursor: cursor + PRODUCTS_PER_PAGE,
    });
  }
  return Response.json(response);
}
