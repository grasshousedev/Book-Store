import { ReactNode } from "react";

export interface ItemProps extends React.ComponentProps<"li"> {
  noLink?: boolean;
  title: string;
  children: ReactNode;
}

export default function Item({ noLink, title, children, ...props }: ItemProps) {
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
