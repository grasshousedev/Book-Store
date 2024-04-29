import { ExploreOurTopCategoriesComponent } from "../components/explore-our-top-categories-component";
import { ExploreOurTopCategoriesProvider } from "../contexts/explore-our-top-categories-context";
import prisma from "@/lib/db";
import { CategoryPrisma } from "../types/category-prisma";

export async function ExploreOurTopCategoriesContainer() {
  const categories: CategoryPrisma[] = await prisma.category.findMany({
    include: {
      page: true,
    },
  });

  return (
    <ExploreOurTopCategoriesProvider
      categories={JSON.parse(JSON.stringify(categories))}
    >
      <ExploreOurTopCategoriesComponent />
    </ExploreOurTopCategoriesProvider>
  );
}
