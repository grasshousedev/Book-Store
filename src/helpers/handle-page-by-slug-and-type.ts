import { PageType } from "@/const/page";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export async function handlePageBySlugAndType(slug: string, type: PageType) {
  try {
    const page = await prisma.page.findFirstOrThrow({
      where: {
        slug: slug,
        type: type,
      },
    });
    return {
      title: page.title,
      description: page.description,
    };
  } catch (error) {
    return notFound();
  }
}