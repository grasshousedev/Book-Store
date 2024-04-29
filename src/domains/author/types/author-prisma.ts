import { Author, Page } from "@prisma/client";

export type AuthorPrisma = Author & { page: Page };
