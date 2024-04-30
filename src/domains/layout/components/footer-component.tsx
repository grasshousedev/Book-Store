import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { UiWrapperComponent } from "@/ui-wrapper-component";
import { UiTitleComponent } from "@/ui-title-component";
import { FooterItemComponent } from "./footer-item-component";
import Link from "next/link";

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
            <Link
              href=""
              title="Emmanuel's Book Store Facebook"
              target="_blank"
            >
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link
              href=""
              title="Emmanuel's Book Store LinkedIn"
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
          </li>
          <li>
            <Link href="" title="Emmanuel's Book Store X" target="_blank">
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link
              href=""
              title="Emmanuel's Book Store Youtube Channel"
              target="_blank"
            >
              <YoutubeIcon />
            </Link>
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
              <FooterItemComponent title="Contact Us" />
              <FooterItemComponent title="Guarantee" />
              <FooterItemComponent title="Shipping" />
              <FooterItemComponent title="Privacy" />
              <FooterItemComponent title="Terms" />
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
              <FooterItemComponent title="Featured Authors" />
              <FooterItemComponent title="New Release Books" />
              <FooterItemComponent title="Top Categories" />
              <FooterItemComponent title="Latest Blog Articles" />
              <FooterItemComponent title="Publishers" />
              <FooterItemComponent title="About Us" />
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
