import { ReactNode } from "react";

export interface FooterItemProps extends React.ComponentProps<"li"> {
  noLink?: boolean;
  title: string;
  children: ReactNode;
}

export function FooterItemComponent({ noLink, title, children, ...props }: FooterItemProps) {
  return (
    <li {...props}>
      {noLink ? (
        children
      ) : (
        <a href="" title={title} className="px-10 py-4 lg:py-0 block">
          {children}
        </a>
      )}
    </li>
  );
}
