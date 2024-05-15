"use client";

import { ProductListingComponent } from "@/domain/product/components/product-listing-component";
import { useAuthorPageContext } from "../../contexts/author-page-context";

export function AuthorProductsComponent() {
  const author = useAuthorPageContext().state.author;
  const products = author.books.map((book) => {
    return book.product;
  })
  return (
    <div className="p-10">
      <ProductListingComponent products={products} />
    </div>
  );
}
