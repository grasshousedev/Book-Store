import { ProductWithPageAndBookPrisma } from "../types/product-prisma";
import { ProductCardComponent } from "./product-card-component";

export function ProductListingComponent({
  products,
}: {
  products: ProductWithPageAndBookPrisma[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-5 text-center">
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
}
