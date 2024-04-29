import { Product, Book, Author, Page } from "@prisma/client";

export type BookWithAuthorsPrisma = Book & { authors: Author[] };

export type ProductWithPageAndBookPrisma = Product & { book: BookWithAuthorsPrisma | null, page: Page };
