"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { AuthorCardComponent } from "./author-card-component";
import { useFeaturedAuthorsContext } from "../contexts/featured-authors-context";

export function FeaturedAuthorsComponent() {
  const authors = useFeaturedAuthorsContext().state.authors;
  
  return (
    <section className="p-4 pb-10 md:p-10">
      <UiTitleComponent level="h2" size="large">Featured Authors</UiTitleComponent>
      <div className="snap-x overflow-x-auto flex sm:flex-wrap sm:justify-center sm:gap-2 text-center">
        {authors.map((author) => (
          <AuthorCardComponent key={author.id} author={author} />
        ))}
      </div>
    </section>
  );
}