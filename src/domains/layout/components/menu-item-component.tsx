import Link from "next/link";
import { ReactNode } from "react";

export interface MenuItemProps extends React.ComponentProps<"li"> {
  href?: string;
  title: string;
  children: ReactNode;
}

export function MenuItemComponent({
  href,
  title,
  children,
  ...props
}: MenuItemProps) {
  return (
    <li {...props}>
      {href ? (
        <Link href={href} title={title} className="py-4 px-10 block">
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
}
