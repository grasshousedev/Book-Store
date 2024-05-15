"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { CmsPageContextType } from "../types/cms-page-context-type";
import { CmsPageWithPagePrisma } from "../types/cms-prisma";

const CmsPageContext = createContext<CmsPageContextType>({} as CmsPageContextType);

export function CmsPageProvider({
  cmsPage,
  children,
}: {
  cmsPage: CmsPageWithPagePrisma;
  children: ReactNode;
}) {
  const [state, setState] = useState({ cmsPage: cmsPage });

  return (
    <CmsPageContext.Provider value={{ state }}>
      {children}
    </CmsPageContext.Provider>
  );
}

export function useCmsPageContext(): CmsPageContextType {
  return useContext(CmsPageContext);
}
