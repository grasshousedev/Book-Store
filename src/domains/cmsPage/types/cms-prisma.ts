import { CmsPage, Page } from "@prisma/client";

export type CmsPageWithPagePrisma = CmsPage & { page: Page };
