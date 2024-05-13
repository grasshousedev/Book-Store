"use client";

import { Input } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { SearchActionTypes } from "../enums/search-action-types";
import { useSearchContext } from "../contexts/search-context";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export function InputSearchComponent() {
  const keyword = useSearchContext().state.keyword;
  const searchDispatch = useSearchContext().dispatch;
  const router = useRouter();

  function handleChangeValue(value: string) {
    searchDispatch({
      type: SearchActionTypes.UPDATED_KEYWORD,
      payload: { keyword: value },
    });
    const keywordParam = value == "" ? "" : `?keyword=${value}`;
    router.push(`/search${keywordParam}`);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleChangeValue(keyword);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        color="primary"
        size="sm"
        radius="full"
        labelPlacement="inside"
        isClearable
        startContent={<SearchIcon size={16} className="cursor-pointer" />}
        value={keyword}
        onValueChange={handleChangeValue}
        placeholder="Search Books"
        onClear={() => console.log("input cleared")}
        aria-label="Search"
      />
    </form>
  );
}
