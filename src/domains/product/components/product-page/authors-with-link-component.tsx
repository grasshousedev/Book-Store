import { AuthorLinkComponent } from "@/domains/author/components/author-link-component";
import { AuthorWithPagePrisma } from "@/domains/author/types/author-prisma";
import { Fragment } from "react";

export function AuthorsWithLinkComponent({
  authors,
}: {
  authors: AuthorWithPagePrisma[];
}) {
  return (
    <address>
      {"by "}
      {authors.map((author, index) => (
        <Fragment key={author.id}>
          <AuthorLinkComponent author={author} className="underline">
            {author.name}
          </AuthorLinkComponent>
          {authors.length > 1 && index < authors.length - 1 ? " and " : ""}
        </Fragment>
      ))}
    </address>
  );
}
