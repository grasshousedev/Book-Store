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
  let liClasses = "bg-primary-300 hover:bg-primary-400";
  props.className = props.className
    ? `${liClasses} ${props.className}`
    : liClasses;
    
  return (
    <li {...props}>
      {href ? (
        <Link href={href} title={title} className="p-4 lg:px-10 lg:py-2 block">
          {children ?? title}
        </Link>
      ) : (
        children ?? title
      )}
    </li>
  );
}
