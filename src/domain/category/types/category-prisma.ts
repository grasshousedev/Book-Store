import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";
import { Category, Page } from "@prisma/client";

export type CategoryWithPagePrisma = Category & { page: Page };

export type CategoryWithPageAndProductsPrisma = Category & { page: Page } & { products: ProductWithPageAndBookPrisma[] };
