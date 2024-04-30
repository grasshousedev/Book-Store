import { ReactNode } from "react";
import prisma from "@/lib/db";
import { HeaderContainer } from "@/domains/layout/containers/header-container";
import { FooterContainer } from "@/domains/layout/containers/footer-container";
import { LayoutProvider } from "../contexts/layout-context";
import { CategoryWithPagePrisma } from "@/domains/category/types/category-prisma";

export async function LayoutContainer({ children }: { children: ReactNode }) {
  const categories: CategoryWithPagePrisma[] = await prisma.category.findMany({
    include: {
      page: true,
    },
  });

  return (
    <LayoutProvider categories={categories}>
      <div className="min-h-dvh flex flex-col">
        <HeaderContainer />
        <div className="grow">{children}</div>
        <FooterContainer />
      </div>
    </LayoutProvider>
  );
}
