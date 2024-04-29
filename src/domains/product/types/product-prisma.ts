import { Product, Book, Author, Page } from "@prisma/client";

export type BookPrisma = Book & { authors: Author[] };

export type ProductPrisma = Product & { book: BookPrisma | null, page: Page };
