import { ReactNode } from "react";
import prisma from "@/lib/db";
import { HeaderContainer } from "@/domains/layout/containers/header-container";
import { FooterContainer } from "@/domains/layout/containers/footer-container";
import { LayoutProvider } from "../contexts/layout-context";
import { CategoryWithPagePrisma } from "@/domains/category/types/category-prisma";
import { UiWrapperComponent } from "@/domains/ui/components/ui-wrapper-component";

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
        <UiWrapperComponent className="bg-primary-50 xl:rounded-t-lg grow -mt-20 mb-20">
          {children}
        </UiWrapperComponent>
        <FooterContainer />
      </div>
    </LayoutProvider>
  );
}
