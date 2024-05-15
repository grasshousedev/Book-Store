"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { useNewReleaseBooksContext } from "../contexts/new-release-books-context";
import { ProductListingComponent } from "./product-listing-component";

export function NewReleaseBooksComponent() {
  const books = useNewReleaseBooksContext().state.books;
  return (
    <section className="p-10">
      <UiTitleComponent level="h2" size="large">New Release Books</UiTitleComponent>
      <ProductListingComponent products={books} className="" />
    </section>
  );
}
