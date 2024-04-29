import { Prisma } from "@prisma/client"
import { ProductPrisma } from "./product-prisma"


export type NewReleaseBooksType = {
  books: ProductPrisma[]
}