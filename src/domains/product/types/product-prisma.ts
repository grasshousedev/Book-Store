import { Prisma, Product, Book, Author } from "@prisma/client";

export type BookPrisma = Book & { authors: Author[] };

export type ProductPrisma = Product & { book: BookPrisma | null };
