"use client";

import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { useNewReleaseBooksContext } from "../contexts/new-release-books-context";
import { ProductListingComponent } from "./product-listing-component";

export function NewReleaseBooksComponent() {
  const books = useNewReleaseBooksContext().state.books;
  return (
    <section className="p-10 text-center">
      <UiTitleComponent level="h2" size="large">New Release Books</UiTitleComponent>
      <ProductListingComponent products={books} />
    </section>
  );
}
