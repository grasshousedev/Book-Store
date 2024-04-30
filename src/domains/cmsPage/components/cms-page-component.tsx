"use client";

import { UiWrapperComponent } from "@/domains/ui/components/ui-wrapper-component";
import { useCmsPageContext } from "../contexts/cms-page-context";
import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";

export function CmsPageComponent() {
  const cmsPage = useCmsPageContext().state.cmsPage;
  return (
    <UiWrapperComponent>
      <main className="p-10">
        <UiTitleComponent size="large">{cmsPage.title}</UiTitleComponent>
        <p className="mt-4">{cmsPage.content}</p>
      </main>
    </UiWrapperComponent>
  );
}
