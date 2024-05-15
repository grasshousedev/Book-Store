import { ProductWithPageAndBookPrisma } from "@/domain/product/types/product-prisma";
import prisma from "@/lib/db";

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const id = JSON.parse(context.params.id);
  try {
    const product: ProductWithPageAndBookPrisma =
      await prisma.product.findFirstOrThrow({
        where: {
          id: id,
        },
        include: {
          page: true,
          book: {
            include: {
              authors: true,
            },
          },
        },
      });

    return Response.json({ product });
  } catch (error) {
    return Response.json({});
  }
}
