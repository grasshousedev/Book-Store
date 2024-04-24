"use client";
import Collapsible from "@/components/ui/collapsible";
import Item from "./item";
import { useMediaQuery } from "react-responsive";

export interface MenuProps extends React.ComponentProps<"nav"> {
  isOpen: boolean;
}

export default function Menu({ isOpen }: MenuProps) {
  const isLgScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const showMenuClass = isLgScreen || isOpen ? "" : "hidden";
  return (
    <nav className={`${showMenuClass} bg-green-200`}>
      <ul className="flex flex-col lg:flex-row justify-center divide-y lg:divide-y-0 lg:divide-x">
        <Item title="About Us">About Us</Item>
        <Item noLink={true} title="Books">
          <Collapsible
            theHeader="Books"
            theContent={
              <ul className="bg-green-100 divide-y">
                <Item title="Category A">Category A</Item>
                <Item title="Catery B">Catery B</Item>
                <Item title="Cateory C">Cateory C</Item>
                <Item title="Category D">Category D</Item>
              </ul>
            }
          />
        </Item>
        <Item title="New Release">New Release</Item>
        <Item title="Contact Us">Contact Us</Item>
        <Item title="Blog">Blog</Item>
      </ul>
    </nav>
  );
}
