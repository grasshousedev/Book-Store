import { Category, Page, Product } from "@prisma/client";

export type CategoryWithPagePrisma = Category & { page: Page };

export type CategoryWithPageAndProductsOrNullPrisma = Category & { page: Page } & { products: Product[] } | null;
