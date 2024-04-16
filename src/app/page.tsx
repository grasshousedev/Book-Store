import Countdown from "@/components/home/countdown";
import ExploreOurTopCategories from "@/components/home/explore-our-top-categories";
import FeaturedAuthors from "@/components/home/featured-authors";
import NewReleaseBooks from "@/components/home/new-release-books";
import SubscribeToOurNewsletter from "@/components/home/subscribe-to-our-newsletter";
import TheEmmanuelsBlog from "@/components/home/the-emmanuels-blog";

export default function Home() {
  return (
    <>
      <NewReleaseBooks />
      <ExploreOurTopCategories />
      <FeaturedAuthors />
      <Countdown />
      <SubscribeToOurNewsletter />
      <TheEmmanuelsBlog />
    </>
  );
}
