import { ReactNode } from "react";
import { ProductPrisma } from "../types/product-prisma";
import Link from "next/link";
import { useBookAuthors } from "../helpers/useBookAuthors";

export function ProductLinkComponent({
  product,
  children,
}: {
  product: ProductPrisma;
  children: ReactNode;
}) {
  const link = `/product/${product.page.slug}`;
  const title = `${product.name} by ${useBookAuthors(product)}`;
  return (
    <Link href={link} title={title}>
      {children}
    </Link>
  );
}
