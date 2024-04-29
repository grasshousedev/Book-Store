import { CategoryPageComponent } from "../components/category-page-component";
import { CategoryPageProvider } from "../contexts/category-page-context";
import prisma from "@/lib/db";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import { notFound } from 'next/navigation'

export async function CategoryPageContainer({ slug }: { slug: string }) {
  const category: CategoryWithPagePrisma | null = await prisma.category.findFirst({
    where: {
      page: {
        slug: slug,
      },
    },
    include: {
      page: true,
    },
  });

  if (category === null) {
    return notFound();
  }

  return (
    <CategoryPageProvider category={JSON.parse(JSON.stringify(category))}>
      <CategoryPageComponent />
    </CategoryPageProvider>
  );
}
