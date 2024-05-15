import { CmsPageProvider } from "../contexts/cms-page-context";
import prisma from "@/lib/db";
import { CmsPageWithPagePrisma } from "../types/cms-prisma";
import { notFound } from "next/navigation";
import { CmsPageComponent } from "../components/cms-page-component";

export async function CmsPageContainer({ slug }: { slug: string }) {
  try {
    const cmsPage: CmsPageWithPagePrisma = await prisma.cmsPage.findFirstOrThrow({
      where: {
        page: {
          slug: slug,
        },
      },
      include: {
        page: true,
      },
    });

    return (
      <CmsPageProvider cmsPage={JSON.parse(JSON.stringify(cmsPage))}>
        <CmsPageComponent />
      </CmsPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
