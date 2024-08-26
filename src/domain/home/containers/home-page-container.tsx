import { NewReleaseBooksContainer } from "@/domain/product/containers/new-release-books-container";
import { FeaturedAuthorsContainer } from "@/domain/author/containers/featured-authors-container";
import { ExploreByCategoryComponent } from "@/domain/category/components/explore-by-category-component";

export function HomePageContainer() {
  return (
    <>
      <NewReleaseBooksContainer />
      <ExploreByCategoryComponent />
      <FeaturedAuthorsContainer />
    </>
  );
}
