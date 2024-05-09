import { ReactNode } from "react";

export interface UiButtonComponentInterface
  extends React.ComponentProps<"button"> {
  children?: ReactNode;
}

export function UiButtonComponent({
  children,
  ...props
}: UiButtonComponentInterface) {
  let buttonClasses = "bg-primary-900 font-bold p-4 text-primary-100";
  props.className = props.className
    ? buttonClasses + " " + props.className
    : buttonClasses;
  return <button {...props}>{children}</button>;
}
