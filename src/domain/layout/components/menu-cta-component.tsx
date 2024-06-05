"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { MenuActionEnum } from "../enums/menu-action-enum";
import { useMenuContext } from "../contexts/menu-context";

export interface MenuCtaProps extends React.ComponentProps<"button"> {}

export function MenuCtaComponent({ ...props }: MenuCtaProps) {
  props.className = props.className + " flex items-center gap-2 pl-3 lg:hidden";
  const menuState = useMenuContext().state;
  const menuDispatch = useMenuContext().dispatch;

  return (
    <button
      {...props}
      onClick={() => {
        menuDispatch({ type: MenuActionEnum.CHANGED_IS_OPEN });
      }}
    >
      {menuState.isOpen ? <XIcon /> : <MenuIcon />} <span>Menu</span>
    </button>
  );
}
