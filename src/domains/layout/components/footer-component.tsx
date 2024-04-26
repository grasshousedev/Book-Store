import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { UiWrapperComponent } from "@/ui-wrapper-component";
import { UiTitleComponent } from "@/ui-title-component";
import { FooterItemComponent } from "./footer-item-component";


export function FooterComponent() {
  return (
    <UiWrapperComponent className="grid grid-cols-1 lg:grid-cols-3 bg-green-500">
      <div className="bg-green-400 p-10">
        <UiTitleComponent level="h3" size="small">
          Stay Connected
        </UiTitleComponent>
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
      <div className="bg-green-300 col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 lg:pb-10">
        <div>
          <UiTitleComponent
            level="h3"
            size="small"
            id="footer-help"
            className="px-10 pt-10 pb-2 lg:pb-0"
          >
            Help
          </UiTitleComponent>
          <nav aria-labelledby="footer-help" className="lg:py-2">
            <ul className="bg-green-200 lg:bg-transparent divide-y lg:divide-y-0">
              <FooterItemComponent title="Contact Us">Contact Us</FooterItemComponent>
              <FooterItemComponent title="Guarantee">Guarantee</FooterItemComponent>
              <FooterItemComponent title="Shipping">Shipping</FooterItemComponent>
              <FooterItemComponent title="Privacy">Privacy</FooterItemComponent>
              <FooterItemComponent title="Terms">Terms</FooterItemComponent>
            </ul>
          </nav>
        </div>
        <div>
          <UiTitleComponent
            level="h3"
            size="small"
            id="footer-explore"
            className="px-10 pt-10 pb-2 lg:pb-0"
          >
            Explore
          </UiTitleComponent>
          <nav aria-labelledby="footer-explore" className="lg:py-2">
            <ul className="bg-green-200 lg:bg-transparent divide-y lg:divide-y-0">
              <FooterItemComponent title="Featured Authors">Featured Authors</FooterItemComponent>
              <FooterItemComponent title="New Release Books">New Release Books</FooterItemComponent>
              <FooterItemComponent title="Top Categories">Top Categories</FooterItemComponent>
              <FooterItemComponent title="Latest Blog Articles">Latest Blog Articles</FooterItemComponent>
              <FooterItemComponent title="Publishers">Publishers</FooterItemComponent>
              <FooterItemComponent title="About Us">About Us</FooterItemComponent>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-green-600 col-span-1 lg:col-span-3 text-center p-10">
        © {new Date().getFullYear()} emmanuelsbookstore.com
      </div>
    </UiWrapperComponent>
  );
}
