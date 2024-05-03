import { CategoryWithPageAndProductsPrisma } from "@/domains/category/types/category-prisma";
import { Product, Book, Author, Page, Publisher } from "@prisma/client";

export type BookWithAuthorsPrisma = Book & { authors: Author[] };

export type ProductWithPagePrisma = Product & { page: Page };

export type ProductWithPageAndBookPrisma = Product & {
  book: BookWithAuthorsPrisma | null;
  page: Page;
};

export type BookWithProduct = Book & { product: ProductWithPageAndBookPrisma };

export type AuthorWithPageAndBooks = Author & {
  page: Page;
  books: BookWithProduct[];
};

export type PublisherWithPage = Publisher & { page: Page };

export type BookWithAuthorsAndPublisher = Book & {
  authors: AuthorWithPageAndBooks[];
  publisher: PublisherWithPage;
};

export type ProductWithBookAndCategoriesPrisma = Product & {
  book: BookWithAuthorsAndPublisher | null;
  categories: CategoryWithPageAndProductsPrisma[];
};
