"use client";
import EmmanuelsBookStore from "@/assets/images/emmanuels-book-store";
import Wrapper from "../../ui/wrapper";
import Search from "../../ui/search";
import Menu from "./menu/index";
import AccountAction from "./account-action";
import CartAction from "./cart-action";
import MenuAction from "./menu-action";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  function swipeMenu() {
    if (isMenuOpen) setIsMenuOpen(false);
    else setIsMenuOpen(true);
  }

  return (
    <Wrapper className="bg-green-500 lg:text-xs lg:leading-none">
      <div className="flex flex-col lg:flex-row px-10 py-5 gap-4 lg:gap-20 items-center">
        <a href="">
          <EmmanuelsBookStore />
        </a>
        <div className="grow self-stretch lg:self-auto">
          <Search />
        </div>
        <div className="flex items-start divide-x">
          <AccountAction />
          <CartAction />
          <MenuAction onClick={swipeMenu} isMenuOpen={isMenuOpen} />
        </div>
      </div>
      <Menu isOpen={isMenuOpen} />
    </Wrapper>
  );
}
