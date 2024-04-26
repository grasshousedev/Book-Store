import { ReactNode } from "react";

export interface MenuItemProps extends React.ComponentProps<"li"> {
  noLink?: boolean;
  title: string;
  children: ReactNode;
}

export function MenuItemComponent({ noLink, title, children, ...props }: MenuItemProps) {
  return (
    <li {...props}>
      {noLink ? (
        children
      ) : (
        <a href="" title={title} className="py-4 px-10 block">
          {children}
        </a>
      )}
    </li>
  );
}
