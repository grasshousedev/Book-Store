"use client";

import { useQueries } from "@tanstack/react-query";
import { productOptions } from "./use-product-by-id-query";

export function useProductsByIdsQuery(ids: number[]) {
  return useQueries({
    queries: ids.map((id) => {
      return productOptions(id);
    })
  });
}
