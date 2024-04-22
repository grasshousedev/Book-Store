import { ReactNode } from "react";

export interface WrapperProps extends React.ComponentProps<"div"> {
  children?: ReactNode;
}

export default function Wrapper({ children, ...props }: WrapperProps) {
  let divClasses = "xl:w-[1280px] 2xl:w-[1536px] mx-auto";
  props.className = props.className
    ? divClasses + " " + props.className
    : divClasses;
  return <div {...props}>{children}</div>;
}
