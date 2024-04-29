import { Category, Page } from "@prisma/client";

export type CategoryPrisma = Category & { page: Page };
