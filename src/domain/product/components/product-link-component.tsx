import { ReactNode } from "react";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";
import Link from "next/link";
import { getAuthorsByProduct } from "../helpers/get-authors-by-product";

export interface ProductLinkComponentInterface
  extends React.ComponentProps<"a"> {
  product: ProductWithPageAndBookPrisma;
  children: ReactNode;
}

export function ProductLinkComponent({
  product,
  children,
  ...props
}: ProductLinkComponentInterface) {
  const link = `/product/${product.page.slug}`;
  const title = `${product.name} by ${getAuthorsByProduct(product)}`;
  
  return (
    <Link href={link} title={title} className={props.className}>
      {children}
    </Link>
  );
}
