import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

export function useBookAuthors(product: ProductWithPageAndBookPrisma) {
  return product.book?.authors.map((author) => author.name).join(" and ");
}
