"use client";

import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteSearchResponseType } from "../types/infinite-search-response-type";

async function fetchSearch(
  cursor: number,
  keyword: string,
  categories: string[],
  minPrice: string,
  maxPrice: string,
  minYear: string,
  maxYear: string,
  orderBy: string
): Promise<InfiniteSearchResponseType> {
  const params = new URLSearchParams("");
  params.append("keyword", keyword);
  categories.map((v) => {
    params.append("categories", v);
  });
  if (categories.length < 1) {
    params.append("categories", "");
  }
  params.append("minprice", minPrice);
  params.append("maxprice", maxPrice);
  params.append("minyear", minYear);
  params.append("maxyear", maxYear);
  params.append("orderby", orderBy);
  const response = await axios.get(
    `/api/search?cursor=${cursor}&${params.toString()}`
  );
  return response.data;
}

export function useProductsInfiniteQuery(
  keyword: string,
  categories: string[],
  minPrice: string,
  maxPrice: string,
  minYear: string,
  maxYear: string,
  orderBy: string
) {
  return useInfiniteQuery({
    queryKey: [
      "search",
      keyword,
      categories,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      orderBy,
    ],
    queryFn: ({ pageParam }) =>
      fetchSearch(
        pageParam,
        keyword,
        categories,
        minPrice,
        maxPrice,
        minYear,
        maxYear,
        orderBy
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
