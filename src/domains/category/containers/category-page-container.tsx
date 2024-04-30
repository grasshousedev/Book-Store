import { CategoryPageProvider } from "../contexts/category-page-context";
import prisma from "@/lib/db";
import { CategoryWithPageAndProductsPrisma } from "../types/category-prisma";
import { notFound } from "next/navigation";
import { CategoryPageComponent } from "../components//category-page/category-page-component";

export async function CategoryPageContainer({ slug }: { slug: string }) {
  try {
    const category: CategoryWithPageAndProductsPrisma =
      await prisma.category.findFirstOrThrow({
        where: {
          page: {
            slug: slug,
          },
        },
        include: {
          page: true,
          products: {
            include: {
              book: {
                include: {
                  authors: true,
                },
              },
              page: true,
            },
          },
        },
      });

    return (
      <CategoryPageProvider category={JSON.parse(JSON.stringify(category))}>
        <CategoryPageComponent />
      </CategoryPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
