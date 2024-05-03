import { ReactNode } from "react";

export function ProductListItemComponent({
  children,
  ...props
}: React.ComponentProps<"div">) {
  props.className = "bg-red-50 p-5 w-[227px] h-[400px] flex-none text-sm text-pretty " + props.className;
  return <div {...props}>{children}</div>;
}
