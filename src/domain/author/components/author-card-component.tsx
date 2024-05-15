import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { AuthorWithPagePrisma } from "../types/author-prisma";
import { AuthorLinkComponent } from "./author-link-component";

export function AuthorCardComponent({ author }: { author: AuthorWithPagePrisma }) {
  return (
    <div className="bg-red-50 p-5 w-[227px] h-[267px] flex-none text-sm text-pretty">
      <AuthorLinkComponent author={author}>
        <div className="bg-gray-500 w-[187px] h-[187px] rounded-full"></div>
      </AuthorLinkComponent>
      <UiTitleComponent level="h6" size="small" className="line-clamp-2 mt-2">
        <AuthorLinkComponent author={author}>
          {author.name}
        </AuthorLinkComponent>
      </UiTitleComponent>
    </div>
  );
}
