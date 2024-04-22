import Collapsible from "@/components/ui/collapsible";
import Item from "./item";

export default function Menu() {
  return (
    <nav className="bg-green-200">
      <ul className="flex flex-col lg:flex-row justify-center divide-y lg:divide-y-0 lg:divide-x">
        <Item>About Us</Item>
        <Item noLink={true}>
          <Collapsible
            theHeader="Books"
            theContent={
              <ul className="bg-green-100">
                <Item>Category A</Item>
                <Item>Catery B</Item>
                <Item>Cateory C</Item>
                <Item>Category D</Item>
              </ul>
            }
          />
        </Item>
        <Item>New Release</Item>
        <Item>Contact Us</Item>
        <Item>Blog</Item>
      </ul>
    </nav>
  );
}
