import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { AuthorWithPagePrisma } from "../types/author-prisma";
import { AuthorLinkComponent } from "./author-link-component";
import CldImage from "@/lib/cld-image";

export function AuthorCardComponent({
  author,
}: {
  author: AuthorWithPagePrisma;
}) {
  return (
    <article className="p-5 w-[227px] h-[267px] flex-none text-sm text-pretty">
      <AuthorLinkComponent author={author}>
        <figure className="bg-green-300 w-[187px] h-[187px] relative overflow-hidden rounded-full">
          <CldImage
            src={`author/${author.page.slug}`}
            width={207}
            height={207}
            alt={author.name}
            className="transition-all w-[187px] h-[187px] hover:w-[207px] hover:h-[207px] hover:-mt-[10px] object-cover"
            sizes="207px"
            crop="auto"
          />
        </figure>
      </AuthorLinkComponent>
      <UiTitleComponent level="p" size="small" className="line-clamp-2 mt-2">
        <AuthorLinkComponent author={author}>{author.name}</AuthorLinkComponent>
      </UiTitleComponent>
    </article>
  );
}
