import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";
import { Author, Book, Page } from "@prisma/client";

export type AuthorWithPagePrisma = Author & { page: Page };

export type BookWithAuthorsAndProduct = Book & { authors: Author[], product: ProductWithPageAndBookPrisma };

export type AuthorWithProductsPrisma = Author & { books: BookWithAuthorsAndProduct[] };