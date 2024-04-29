"use client";

import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { ProductCardComponent } from "./product-card-component";
import { useNewReleaseBooksContext } from "../contexts/new-release-books-context";

export function NewReleaseBooksComponent() {
  const books = useNewReleaseBooksContext().state.books;
  return (
    <section className="p-10 bg-green-50 text-center">
      <UiTitleComponent level="h2" size="large">New Release Books</UiTitleComponent>
      <div className="flex flex-wrap justify-center gap-5">
        {books.map((book) => (
          <ProductCardComponent key={book.id} product={book} />
        ))}
      </div>
    </section>
  );
}
