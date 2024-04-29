import { ReactNode } from "react";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import Link from "next/link";

export function CategoryLinkComponent({
  category,
  children,
}: {
  category: CategoryWithPagePrisma;
  children: ReactNode;
}) {
  const link = `/category/${category.page.slug}`;
  return (
    <Link href={link} title={category.name}>
      {children}
    </Link>
  );
}
