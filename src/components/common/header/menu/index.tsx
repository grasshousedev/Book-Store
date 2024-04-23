import Collapsible from "@/components/ui/collapsible";
import Item from "./item";

export default function Menu() {
  return (
    <nav className="bg-green-200">
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
