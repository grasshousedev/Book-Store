import { CategoryWithPagePrisma } from "@/domain/category/types/category-prisma";

export type LayoutType = {
  categories: CategoryWithPagePrisma[];
};
