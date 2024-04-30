import { Category, Page, Product } from "@prisma/client";

export type CategoryWithPagePrisma = Category & { page: Page };

export type CategoryWithPageAndProductsPrisma = Category & { page: Page } & { products: Product[] };
