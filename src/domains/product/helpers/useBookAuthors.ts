import { ProductPrisma } from "../types/product-prisma";

export function useBookAuthors(product: ProductPrisma) {
  return product.book?.authors.map((author) => author.name).join(" and ");
}
