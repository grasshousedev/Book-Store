import { CategoryWithPagePrisma } from "../types/category-prisma";

export function getCategoryUrl(category: CategoryWithPagePrisma){
  return `/category/${category.page.slug}`;
}