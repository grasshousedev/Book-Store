"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useCustomRouter() {
  const router = useRouter();
  const pathFromRouter = usePathname();
  const searchParams = useSearchParams();
  function push(
    name: string,
    value: string,
    pathname?: string,
    replaceQueryString?: boolean
  ) {
    const finalPath = pathname ?? pathFromRouter;
    const params = new URLSearchParams(
      replaceQueryString ? "" : searchParams.toString()
    );
    if(value==""){
      params.delete(name);
    }else{
      params.set(name, value);
    }
    router.push(`${finalPath}?${params.toString()}`);
  }
  return { push: push };
}
