import { getSlug } from "@/helpers/getSlug";
import Link from "next/link";
import { ReactNode } from "react";

export interface FooterItemProps extends React.ComponentProps<"li"> {
  title: string;
}

export function FooterItemComponent({ title, ...props }: FooterItemProps) {
  return (
    <li {...props}>
      <Link
        href={`/${getSlug(title)}`}
        title={title}
        className="px-10 py-4 lg:py-0 block"
      >
        {title}
      </Link>
    </li>
  );
}
