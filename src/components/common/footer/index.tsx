import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Wrapper from "../../ui/wrapper";
import { Title } from "../../ui/title";
import Item from "./item";

export default function Footer() {
  return (
    <Wrapper className="grid grid-cols-1 lg:grid-cols-3 bg-green-500">
      <div className="bg-green-400 p-10">
        <Title level="h3" size="small">
          Stay Connected
        </Title>
        <p className="py-2">
          Tempor nisi duis eiusmod duis exercitation ipsum dolore dolor et
          deserunt id reprehenderit.
        </p>
        <ul className="flex gap-2">
          <li>
            <a href="" title="Emmanuel's Book Store Facebook" target="_blank">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="" title="Emmanuel's Book Store LinkedIn" target="_blank">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="" title="Emmanuel's Book Store X" target="_blank">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href=""
              title="Emmanuel's Book Store Youtube Channel"
              target="_blank"
            >
              <YoutubeIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-green-300 col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 pb-10">
        <div>
          <Title level="h3" size="small" id="footer-help" className="px-10 pt-10 pb-2 lg:pb-0">
            Help
          </Title>
          <nav aria-labelledby="footer-help" className="lg:py-2">
            <ul className="bg-green-200 lg:bg-transparent divide-y lg:divide-y-0">
              <Item title="Contact Us">Contact Us</Item>
              <Item title="Guarantee">Guarantee</Item>
              <Item title="Shipping">Shipping</Item>
              <Item title="Privacy">Privacy</Item>
              <Item title="Terms">Terms</Item>
            </ul>
          </nav>
        </div>
        <div>
          <Title level="h3" size="small" id="footer-explore" className="px-10 pt-10 pb-2 lg:pb-0">
            Explore
          </Title>
          <nav aria-labelledby="footer-explore" className="lg:py-2">
            <ul className="bg-green-200 lg:bg-transparent divide-y lg:divide-y-0">
              <Item title="Featured Authors">Featured Authors</Item>
              <Item title="New Release Books">New Release Books</Item>
              <Item title="Top Categories">Top Categories</Item>
              <Item title="Latest Blog Articles">Latest Blog Articles</Item>
              <Item title="Publishers">Publishers</Item>
              <Item title="About Us">About Us</Item>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-green-600 col-span-1 lg:col-span-3 text-center p-10">
        © {new Date().getFullYear()} emmanuelsbookstore.com
      </div>
    </Wrapper>
  );
}
