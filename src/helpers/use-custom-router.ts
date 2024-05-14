"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useCustomRouter() {
  const router = useRouter();
  const pathFromRouter = usePathname();
  const searchParams = useSearchParams();
  function push(
    name: string | string[],
    value: string | string[],
    pathname?: string,
    replaceQueryString?: boolean
  ) {
    const finalPath = pathname ?? pathFromRouter;
    const params = new URLSearchParams(
      replaceQueryString ? "" : searchParams.toString()
    );

    if (Array.isArray(name)) {
      const names = name;
      names.map((n, i) => {
        params.delete(n);
        params.append(n, value[i]);
      });
    } else {
      params.delete(name);
      if (value != "") {
        const values = Array.isArray(value) ? value : [value];
        values.map((v) => {
          params.append(name, v);
        });
      }
    }

    router.push(`${finalPath}?${params.toString()}`, { scroll: false });
  }
  return { push: push };
}
