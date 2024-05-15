import { NewReleaseBooksComponent } from "../components/new-release-books-component";
import { NewReleaseBooksProvider } from "../contexts/new-release-books-context";
import prisma from "@/lib/db";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

export async function NewReleaseBooksContainer() {
  const books: ProductWithPageAndBookPrisma[] = await prisma.product.findMany({
    include: {
      book: {
        include: {
          authors: true,
        },
      },
      page: true,
    },
    take: 5,
    orderBy: {
      book: {
        year: "desc",
      },
    },
  });

  return (
    <NewReleaseBooksProvider books={JSON.parse(JSON.stringify(books))}>
      <NewReleaseBooksComponent />
    </NewReleaseBooksProvider>
  );
}
