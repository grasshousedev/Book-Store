"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { AuthorPageContextType } from "../types/author-page-context-type";
import { AuthorWithProductsPrisma } from "../types/author-prisma";

const AuthorPageContext = createContext<AuthorPageContextType>({} as AuthorPageContextType);

export function AuthorPageProvider({
  author,
  children,
}: {
  author: AuthorWithProductsPrisma;
  children: ReactNode;
}) {
  const [state, setState] = useState({ author: author });

  return (
    <AuthorPageContext.Provider value={{ state }}>
      {children}
    </AuthorPageContext.Provider>
  );
}

export function useAuthorPageContext(): AuthorPageContextType {
  return useContext(AuthorPageContext);
}
