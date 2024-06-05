import { NewReleaseBooksContainer } from "@/domain/product/containers/new-release-books-container";
import { FeaturedAuthorsContainer } from "@/domain/author/containers/featured-authors-container";
import { Fragment } from "react";
import { ExploreByCategoryComponent } from "@/domain/category/components/explore-by-category-component";

export function HomePageContainer() {
  return (
    <Fragment>
      <NewReleaseBooksContainer />
      <ExploreByCategoryComponent />
      <FeaturedAuthorsContainer />
    </Fragment>
  );
}
