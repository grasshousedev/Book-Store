import { ReactNode } from "react";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";
import Link from "next/link";
import { getAuthorsByProduct } from "../helpers/get-authors-by-product";

export function ProductLinkComponent({
  product,
  children,
}: {
  product: ProductWithPageAndBookPrisma;
  children: ReactNode;
}) {
  const link = `/product/${product.page.slug}`;
  const title = `${product.name} by ${getAuthorsByProduct(product)}`;
  return (
    <Link href={link} title={title}>
      {children}
    </Link>
  );
}
