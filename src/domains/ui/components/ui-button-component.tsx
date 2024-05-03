import { ReactNode } from "react";

export interface UiButtonComponentInterface
  extends React.ComponentProps<"button"> {
  children?: ReactNode;
}

export function UiButtonComponent({
  children,
  ...props
}: UiButtonComponentInterface) {
  let buttonClasses = "bg-green-900 font-bold p-4 text-green-100";
  props.className = props.className
    ? buttonClasses + " " + props.className
    : buttonClasses;
  return <button {...props}>{children}</button>;
}
