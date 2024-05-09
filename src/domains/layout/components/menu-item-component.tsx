import Link from "next/link";
import { ReactNode } from "react";

export interface MenuItemProps extends React.ComponentProps<"li"> {
  href?: string;
  title?: string;
  children?: ReactNode;
}

export function MenuItemComponent({
  href,
  title,
  children,
  ...props
}: MenuItemProps) {
  let liClasses = "bg-primary-400 hover:bg-primary-300";
  props.className = props.className
    ? `${liClasses} ${props.className}`
    : liClasses;
  return (
    <li {...props}>
      {href ? (
        <Link href={href} title={title} className="py-4 px-10 block">
          {children ?? title}
        </Link>
      ) : (
        children ?? title
      )}
    </li>
  );
}
