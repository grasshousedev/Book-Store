import { ReactNode } from "react";
import { AuthorPrisma } from "../types/author-prisma";
import Link from "next/link";

export function AuthorLinkComponent({
  author,
  children,
}: {
  author: AuthorPrisma;
  children: ReactNode;
}) {
  const link = `/author/${author.page.slug}`;
  return (
    <Link href={link} title={author.name}>
      {children}
    </Link>
  );
}
