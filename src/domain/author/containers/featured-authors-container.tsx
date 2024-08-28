import { FeaturedAuthorsComponent } from "../components/featured-authors-component";
import { FeaturedAuthorsProvider } from "../contexts/featured-authors-context";
import prisma from "@/lib/db";
import { AuthorWithPagePrisma } from "../types/author-prisma";

export async function FeaturedAuthorsContainer() {
  const authors: AuthorWithPagePrisma[] = await prisma.author.findMany({
    include: {
      page: true,
    },
    take: 6,
  });

  return (
    <FeaturedAuthorsProvider authors={JSON.parse(JSON.stringify(authors))}>
      <FeaturedAuthorsComponent />
    </FeaturedAuthorsProvider>
  );
}
