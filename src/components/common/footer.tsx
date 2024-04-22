import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Wrapper from "../ui/wrapper";
import { Title } from "../ui/title";

export default function Footer() {
  return (
    <Wrapper className="grid grid-cols-1 md:grid-cols-3 bg-green-500">
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
      <div className="bg-green-300 col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <Title level="h3" size="small" id="footer-help">
            Help
          </Title>
          <nav aria-labelledby="footer-help" className="py-2">
            <ul>
              <li>
                <a href="" title="Contact Us">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="" title="Guarantee">
                  Guarantee
                </a>
              </li>
              <li>
                <a href="" title="Shipping">
                  Shipping
                </a>
              </li>
              <li>
                <a href="" title="Privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a href="" title="Terms">
                  Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Title level="h3" size="small" id="footer-explore">
            Explore
          </Title>
          <nav aria-labelledby="footer-explore" className="py-2">
            <ul>
              <li>
                <a href="" title="Featured Authors">
                  Featured Authors
                </a>
              </li>
              <li>
                <a href="" title="New Release Books">
                  New Release Books
                </a>
              </li>
              <li>
                <a href="" title="Top Categories">
                  Top Categories
                </a>
              </li>
              <li>
                <a href="" title="Latest Blog Articles">
                  Latest Blog Articles
                </a>
              </li>
              <li>
                <a href="" title="Publishers">
                  Publishers
                </a>
              </li>
              <li>
                <a href="" title="About Us">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-green-600 col-span-1 md:col-span-3 text-center p-10">
        © {new Date().getFullYear()} emmanuelsbookstore.com
      </div>
    </Wrapper>
  );
}
