import { Category } from "@prisma/client";

export type MenuType = {
  isOpen: boolean;
  categories: Category[];
};
