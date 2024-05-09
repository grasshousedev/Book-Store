"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";

export function UiSearchComponent() {
  const [search, setSearch] = useState("");

  function resetForm() {
    setSearch("");
  }

  return (
    <form>
      <label className="flex rounded-full bg-primary-100 py-2 px-4">
        <input
          type="text"
          name="search"
          placeholder="Search Books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none block bg-transparent grow text-xs"
        />
        {search ? (
          <XIcon onClick={resetForm} size={16} className="cursor-pointer" />
        ) : (
          <SearchIcon size={16} className="cursor-pointer" />
        )}
      </label>
    </form>
  );
}
