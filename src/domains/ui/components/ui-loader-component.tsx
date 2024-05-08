import { Loader2Icon, LucideProps } from "lucide-react";

export interface UiLoaderComponentInterface extends LucideProps {}

export function UiLoaderComponent({ ...props }: UiLoaderComponentInterface) {
  let iconClasses = "animate-spin";
  props.className = props.className
    ? iconClasses + " " + props.className
    : iconClasses;
  return <Loader2Icon {...props} />;
}
