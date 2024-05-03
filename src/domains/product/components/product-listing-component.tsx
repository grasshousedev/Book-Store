import { ReactNode } from "react";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";
import { ProductCardComponent } from "./product-card-component";

export function ProductListingComponent({
  products,
  endCard,
}: {
  products: ProductWithPageAndBookPrisma[];
  endCard?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-5 text-center">
      {endCard}
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
}
