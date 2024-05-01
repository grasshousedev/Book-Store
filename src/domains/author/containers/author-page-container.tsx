import { AuthorPageProvider } from "../contexts/author-page-context";
import prisma from "@/lib/db";
import { AuthorWithProductsPrisma } from "../types/author-prisma";
import { notFound } from "next/navigation";
import { AuthorPageComponent } from "../components/author-page/author-page-component";

export async function AuthorPageContainer({ slug }: { slug: string }) {
  try {
    const author: AuthorWithProductsPrisma =
      await prisma.author.findFirstOrThrow({
        where: {
          page: {
            slug: slug,
          },
        },
        include: {
          books: {
            include: {  
              authors: true,
              product: {
                include: {
                  book: {
                    include: {
                      authors: true,
                    },
                  },
                  page: true
                }
              }
            },
          },
        },
      });

    return (
      <AuthorPageProvider author={JSON.parse(JSON.stringify(author))}>
        <AuthorPageComponent />
      </AuthorPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
