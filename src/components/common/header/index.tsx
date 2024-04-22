import EmmanuelsBookStore from "@/assets/images/emmanuels-book-store";
import Wrapper from "../../ui/wrapper";
import Cart from "./cart";
import Search from "../../ui/search";
import Menu from "./menu/index";
import Account from "./account";

export default function Header() {
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
          <Account />
          <Cart />
        </div>
      </div>
      <Menu />
    </Wrapper>
  );
}
