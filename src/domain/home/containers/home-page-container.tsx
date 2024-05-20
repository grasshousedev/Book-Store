import { NewReleaseBooksContainer } from "@/domain/product/containers/new-release-books-container";
import { FeaturedAuthorsContainer } from "@/domain/author/containers/featured-authors-container";
import { CountdownContainer } from "@/domain/sales/containers/countdown-container";
import { SubscribeToOurNewsletterContainer } from "@/domain/newsletter/containers/subscribe-to-our-newsletter-container";
import { TheEmmanuelsBlogContainer } from "@/domain/blog/containers/the-emmanuels-blog-container";
import { Fragment } from "react";
import { ExploreByCategoryComponent } from "@/domain/category/components/explore-by-category-component";

export function HomePageContainer() {
  return (
    <Fragment>
      <NewReleaseBooksContainer />
      <ExploreByCategoryComponent />
      <FeaturedAuthorsContainer />
      <CountdownContainer />
      <SubscribeToOurNewsletterContainer />
      <TheEmmanuelsBlogContainer />
    </Fragment>
  );
}
