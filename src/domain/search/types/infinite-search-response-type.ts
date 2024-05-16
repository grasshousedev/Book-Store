import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";

export type InfiniteSearchResponseType = {
  data: ProductWithPageAndBookPrisma[];
  nextCursor?: number;
};
