import { UiWrapperComponent } from "@/ui-wrapper-component";
import { CountdownContainer } from "@/domains/sales/containers/countdown-container";
import { ExploreOurTopCategoriesContainer } from "@/domains/category/containers/explore-our-top-categories-container";
import { FeaturedAuthorsContainer } from "@/domains/author/containers/featured-authors-container";
import { NewReleaseBooksContainer } from "@/domains/product/containers/new-release-books-container";
import { SubscribeToOurNewsletterContainer } from "@/domains/newsletter/containers/subscribe-to-our-newsletter-container";
import { TheEmmanuelsBlogContainer } from "@/domains/blog/containers/the-emmanuels-blog-container";

export function HomePageContainer() {
  return (
    <UiWrapperComponent>
      <NewReleaseBooksContainer />
      <ExploreOurTopCategoriesContainer />
      <FeaturedAuthorsContainer />
      <CountdownContainer />
      <SubscribeToOurNewsletterContainer />
      <TheEmmanuelsBlogContainer />
    </UiWrapperComponent>
  );
}
