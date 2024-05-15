import { ProductPageProvider } from "../contexts/product-page-context";
import prisma from "@/lib/db";
import { ProductWithBookAndCategoriesPrisma } from "../types/product-prisma";
import { notFound } from "next/navigation";
import { ProductPageComponent } from "../components/product-page/product-page-component";
import { PageType } from "@/const/page";

export async function ProductPageContainer({ slug }: { slug: string }) {
  try {
    const product: ProductWithBookAndCategoriesPrisma =
      await prisma.product.findFirstOrThrow({
        where: {
          page: {
            type: PageType.PRODUCT,
            slug: slug,
          },
        },
        include: {
          book: {
            include: {
              authors: {
                include: {
                  page: true,
                  books: {
                    where: {
                      product: {
                        page: {
                          slug: {
                            not: slug,
                          },
                        },
                      },
                    },
                    take: 3,
                    include: {
                      product: {
                        include: {
                          page: true,
                          book: {
                            include: {
                              authors: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              publisher: {
                include: {
                  page: true,
                },
              },
            },
          },
          categories: {
            include: {
              page: true,
              products: {
                where: {
                  page: {
                    slug: {
                      not: slug,
                    },
                  },
                },
                take: 3,
                include: {
                  page: true,
                  book: {
                    include: {
                      authors: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

    return (
      <ProductPageProvider product={JSON.parse(JSON.stringify(product))}>
        <ProductPageComponent />
      </ProductPageProvider>
    );
  } catch (error) {
    return notFound();
  }
}
