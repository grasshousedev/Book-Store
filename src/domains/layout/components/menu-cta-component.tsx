"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { MenuActionTypes } from "../enums/menu-action-types";
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
        menuDispatch({ type: MenuActionTypes.Changed_IsOpen });
      }}
    >
      {menuState.isOpen ? <XIcon /> : <MenuIcon />} <span>Menu</span>
    </button>
  );
}
