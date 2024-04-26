import { ReactNode } from "react";

export interface UiWrapperComponentInterface extends React.ComponentProps<"div"> {
  children?: ReactNode;
}

export function UiWrapperComponent({ children, ...props }: UiWrapperComponentInterface) {
  let divClasses = "xl:w-[1280px] 2xl:w-[1536px] mx-auto";
  props.className = props.className
    ? divClasses + " " + props.className
    : divClasses;
  return <div {...props}>{children}</div>;
}
