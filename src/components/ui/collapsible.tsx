"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState, ReactNode } from "react";

export interface CollapsibleProps extends React.ComponentProps<"div"> {
  theHeader: ReactNode;
  theContent: ReactNode;
}

export default function Collapsible({ theHeader, theContent, ...props }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  function swapIsOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  const contentClasses = isOpen ? "lg:absolute" : "hidden";

  return (
    <div {...props}>
      <div className="flex cursor-pointer gap-2 py-4 px-10" onClick={swapIsOpen}>
        <span className="grow">{theHeader}</span>
        {isOpen ? <ChevronUpIcon className="size-6 lg:size-4" /> : <ChevronDownIcon className="size-6 lg:size-4" />}
      </div>
      <div className={contentClasses}>{theContent}</div>
    </div>
  );
}
