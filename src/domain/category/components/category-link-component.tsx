import { ReactNode } from "react";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import Link from "next/link";
import { getCategoryUrl } from "../helpers/get-category-url";

export interface CategoryLinkComponentInterface
  extends React.ComponentProps<"a"> {
  category: CategoryWithPagePrisma;
  children: ReactNode;
}

export function CategoryLinkComponent({
  category,
  children,
  ...props
}: CategoryLinkComponentInterface) {
  const link = getCategoryUrl(category);
  return (
    <Link href={link} title={category.name} className={props.className}>
      {children}
    </Link>
  );
}
