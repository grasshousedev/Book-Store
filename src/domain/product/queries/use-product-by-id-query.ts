"use client";

import axios from "axios";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";

async function fetchProductById(
  id: number
): Promise<ProductWithPageAndBookPrisma> {
  const response = await axios.get(`/api/product/${id}`);
  return response.data.product;
}

export function productOptions(id: number) {
  return queryOptions({
    queryKey: ["product", id],
    queryFn: async () => fetchProductById(id),
  });
}

export function useProductByIdQuery(id: number) {
  return useQuery(productOptions(id));
}
