import type { Metadata } from "next";
import { PageType } from "@/types/page-type";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { HomePageContainer } from "@/domain/home/containers/home-page-container";

export function generateMetadata(): Metadata {
  return {
    title: "Emmanuel's Book Store: Horror | Mystery | Romance ...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officia. Aperiam, quasi. Rem rerum corporis at aspernatur aperiam iusto? Fugit ipsum odit eos, repudiandae officiis id vero ipsam temporibus voluptates",
  };
}

export default async function Home() {
  return <HomePageContainer />;
}
