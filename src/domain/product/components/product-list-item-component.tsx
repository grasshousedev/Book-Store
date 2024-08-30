import { ReactNode } from "react";

export function ProductListItemComponent({
  children,
  ...props
}: React.ComponentProps<"article">) {
  let divClasses = "p-5 w-full sm:w-[227px] h-[400px] text-sm text-pretty";
  props.className = props.className ? `${divClasses} ${props.className}` : divClasses;
  
  return <article {...props}>{children}</article>;
}
