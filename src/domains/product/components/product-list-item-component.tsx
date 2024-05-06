import { ReactNode } from "react";

export function ProductListItemComponent({
  children,
  ...props
}: React.ComponentProps<"div">) {
  let divClasses = "bg-red-50 p-5 w-[227px] h-[400px] text-sm text-pretty";
  props.className = props.className ? `${divClasses} ${props.className}` : divClasses;
  return <div {...props}>{children}</div>;
}
