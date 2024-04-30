import { CategoryWithPagePrisma } from "@/domains/category/types/category-prisma";

export type LayoutType = {
  categories: CategoryWithPagePrisma[];
};
