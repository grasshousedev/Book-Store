import { NewReleaseBooksContainer } from "@/domains/product/containers/new-release-books-container";
import { ExploreOurTopCategoriesComponent } from "@/domains/category/components/explore-our-top-categories-component";
import { FeaturedAuthorsContainer } from "@/domains/author/containers/featured-authors-container";
import { CountdownContainer } from "@/domains/sales/containers/countdown-container";
import { SubscribeToOurNewsletterContainer } from "@/domains/newsletter/containers/subscribe-to-our-newsletter-container";
import { TheEmmanuelsBlogContainer } from "@/domains/blog/containers/the-emmanuels-blog-container";
import { Fragment } from "react";

export function HomePageContainer() {
  return (
    <Fragment>
      <NewReleaseBooksContainer />
      <ExploreOurTopCategoriesComponent />
      <FeaturedAuthorsContainer />
      <CountdownContainer />
      <SubscribeToOurNewsletterContainer />
      <TheEmmanuelsBlogContainer />
    </Fragment>
  );
}
