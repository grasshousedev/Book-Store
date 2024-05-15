import { NewReleaseBooksContainer } from "@/domain/product/containers/new-release-books-container";
import { ExploreOurTopCategoriesComponent } from "@/domain/category/components/explore-our-top-categories-component";
import { FeaturedAuthorsContainer } from "@/domain/author/containers/featured-authors-container";
import { CountdownContainer } from "@/domain/sales/containers/countdown-container";
import { SubscribeToOurNewsletterContainer } from "@/domain/newsletter/containers/subscribe-to-our-newsletter-container";
import { TheEmmanuelsBlogContainer } from "@/domain/blog/containers/the-emmanuels-blog-container";
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
