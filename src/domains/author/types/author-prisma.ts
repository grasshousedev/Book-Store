import { Author, Page } from "@prisma/client";

export type AuthorWithPagePrisma = Author & { page: Page };
