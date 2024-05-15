"use client";

import { Fragment } from "react";
import { useCmsPageContext } from "../contexts/cms-page-context";
import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";

export function CmsPageComponent() {
  const cmsPage = useCmsPageContext().state.cmsPage;
  return (
    <Fragment>
      <main className="p-10">
        <UiTitleComponent size="large">{cmsPage.title}</UiTitleComponent>
        <p className="mt-4">{cmsPage.content}</p>
      </main>
    </Fragment>
  );
}
