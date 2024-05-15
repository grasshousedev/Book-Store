"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { useAuthorPageContext } from "../../contexts/author-page-context";

export function AuthorIntroComponent() {
  const author = useAuthorPageContext().state.author;
  return (
    <div className="p-10">
      <UiTitleComponent size="large">{author.name}</UiTitleComponent>
      <p className="mt-4">{author.description}</p>
    </div>
  );
}
