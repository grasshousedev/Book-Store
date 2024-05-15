import { ReactNode } from "react";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";
import { ProductCardComponent } from "./product-card-component";

interface ProductListingComponentInterface extends React.ComponentProps<"div"> {
  products: ProductWithPageAndBookPrisma[];
  endCard?: ReactNode;
}

export function ProductListingComponent({
  products,
  endCard,
  ...props
}: ProductListingComponentInterface) {
  let divClasses = "flex flex-wrap justify-center gap-4";
  props.className = props.className ? `${divClasses} ${props.className}` : divClasses;
  return (
    <div {...props}>
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
      {endCard}
    </div>
  );
}
