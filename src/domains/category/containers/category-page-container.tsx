import { CategoryPageComponent } from "../components/category-page-component";
import { CategoryPageProvider } from "../contexts/category-page-context";
import prisma from "@/lib/db";
import { CategoryWithPagePrisma } from "../types/category-prisma";

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
    // 404
  }

  return (
    <CategoryPageProvider category={JSON.parse(JSON.stringify(category))}>
      <CategoryPageComponent />
    </CategoryPageProvider>
  );
}
