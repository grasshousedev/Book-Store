import { ReactNode } from "react";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import Link from "next/link";
import { getCategoryUrl } from "../helpers/get-category-url";

export function CategoryLinkComponent({
  category,
  children,
}: {
  category: CategoryWithPagePrisma;
  children: ReactNode;
}) {
  const link = getCategoryUrl(category);
  return (
    <Link href={link} title={category.name}>
      {children}
    </Link>
  );
}
