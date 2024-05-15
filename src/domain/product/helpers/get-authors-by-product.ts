import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

export function getAuthorsByProduct(product: ProductWithPageAndBookPrisma) {
  return product.book?.authors.map((author) => author.name).join(" and ");
}
