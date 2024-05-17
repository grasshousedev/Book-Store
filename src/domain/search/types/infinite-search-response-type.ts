import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";

export type InfiniteSearchResponseType = {
  data: ProductWithPageAndBookPrisma[];
  count: number;
  nextCursor?: number;
};
