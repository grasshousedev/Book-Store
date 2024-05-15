"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { AuthorCardComponent } from "./author-card-component";
import { useFeaturedAuthorsContext } from "../contexts/featured-authors-context";

export function FeaturedAuthorsComponent() {
  const authors = useFeaturedAuthorsContext().state.authors;
  return (
    <section className="p-10 text-center">
      <UiTitleComponent level="h2" size="large">Featured Authors</UiTitleComponent>
      <div className="flex flex-wrap justify-center gap-5">
        {authors.map((author) => (
          <AuthorCardComponent key={author.id} author={author} />
        ))}
      </div>
    </section>
  );
}