import { InfiniteSearchResponseType } from "@/domain/search/types/infinite-search-response-type";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function GET(request: Request) {
  
  const PRODUCTS_PER_PAGE = 8;

  const { searchParams } = new URL(request.url);
  //try {
  const cursor = parseInt(searchParams.get("cursor"));
  const keyword = searchParams.get("keyword");
  const categories = searchParams.getAll("categories");
  const minPrice = parseInt(searchParams.get("minprice"));
  const maxPrice = parseInt(searchParams.get("maxprice"));
  const minYear = parseInt(searchParams.get("minyear"));
  const maxYear = parseInt(searchParams.get("maxyear"));
  const orderBy = searchParams.get("orderby");

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

  const response: InfiniteSearchResponseType = { data: data };
  const totalPages = Math.ceil(count / PRODUCTS_PER_PAGE);
  const currentPage = cursor / PRODUCTS_PER_PAGE + 1;
  if (totalPages > currentPage) {
    return Response.json({ ...response, nextCursor: cursor + PRODUCTS_PER_PAGE });
  }
  return Response.json(response);
  /*} catch (error) {
    console.log(error);
    return Response.json({});
  }*/
}
