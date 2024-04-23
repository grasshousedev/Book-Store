import { MenuIcon, XIcon } from "lucide-react";

export interface MenuActionProps extends React.ComponentProps<"button"> {
  isMenuOpen: boolean;
}

export default function MenuAction({ isMenuOpen, ...props }: MenuActionProps) {
  props.className = props.className + " flex items-center gap-2 pl-3 lg:hidden";
  return (
    <button {...props}>
      {isMenuOpen ? <XIcon /> : <MenuIcon />} <span>Menu</span>
    </button>
  );
}
