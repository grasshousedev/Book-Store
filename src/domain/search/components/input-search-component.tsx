"use client";

import { Input } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { SearchActionEnum } from "../enums/search-action-enum";
import { useSearchContext } from "../contexts/search-context";
import { FormEvent } from "react";
import { useCustomRouter } from "@/helpers/use-custom-router";

export function InputSearchComponent() {
  const keyword = useSearchContext().state.keyword;
  const searchDispatch = useSearchContext().dispatch;
  const customRouter = useCustomRouter();

  function handleChangeValue(value: string) {
    searchDispatch({
      type: SearchActionEnum.UPDATED_KEYWORD,
      payload: { keyword: value },
    });
    customRouter.push("keyword", value, "/search", true);
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
        placeholder="Search Books by Title, Author or ISBN"
        onClear={() => console.log("input cleared")}
        aria-label="Search"
      />
    </form>
  );
}
