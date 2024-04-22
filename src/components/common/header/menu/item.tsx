import { ReactNode } from "react";

export interface ItemProps extends React.ComponentProps<"li"> {
  noLink?: boolean;
  children: ReactNode;
}

export default function Item({ noLink, children, ...props }: ItemProps) {
  return (
    <li {...props}>
      {noLink ? (
        children
      ) : (
        <a href="" title="" className="py-4 px-10 block">
          {children}
        </a>
      )}
    </li>
  );
}
