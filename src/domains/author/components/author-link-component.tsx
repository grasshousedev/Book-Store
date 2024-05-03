import { ReactNode } from "react";
import { AuthorWithPagePrisma } from "../types/author-prisma";
import Link from "next/link";

export interface AuthorLinkComponentInterface
  extends React.ComponentProps<"a"> {
  author: AuthorWithPagePrisma;
  children: ReactNode;
}

export function AuthorLinkComponent({
  author,
  children,
  ...props
}: AuthorLinkComponentInterface) {
  const link = `/author/${author.page.slug}`;
  return (
    <Link href={link} title={author.name} rel="author" className={props.className}>
      {children}
    </Link>
  );
}
