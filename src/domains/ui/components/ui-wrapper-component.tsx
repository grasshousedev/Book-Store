import { ReactNode } from "react";

export interface UiWrapperComponentInterface extends React.ComponentProps<"div"> {
  children?: ReactNode;
}

export function UiWrapperComponent({ children, ...props }: UiWrapperComponentInterface) {
  let divClasses = "w-full mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl";
  props.className = props.className
    ? divClasses + " " + props.className
    : divClasses;
  return <div {...props}>{children}</div>;
}
