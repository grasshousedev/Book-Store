"use client";

import { ChevronDownIcon, ChevronLeft } from "lucide-react";
import { useState, ReactNode } from "react";
import { useOutsideClick } from '../helpers/use-outside-click';

export interface UiCollapsibleComponentInterface extends React.ComponentProps<"div"> {
  shouldCloseWhenOutside: boolean;
  theHeader: ReactNode;
  theContent: ReactNode;
}

export function UiCollapsibleComponent({ shouldCloseWhenOutside, theHeader, theContent, ...props }: UiCollapsibleComponentInterface) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => {
    if(shouldCloseWhenOutside){
      setIsOpen(false);
    }
  });

  function swapIsOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  const contentClasses = isOpen ? "lg:absolute lg:z-[100]" : "hidden";

  return (
    <div {...props} ref={ref} onClick={swapIsOpen}>
      <div className="flex cursor-pointer gap-2 p-4 lg:px-10 lg:py-2 items-center">
        <span className="grow">{theHeader}</span>
        {isOpen ? <ChevronDownIcon className="size-4" /> : <ChevronLeft className="size-4" />}
      </div>
      <div className={contentClasses}>{theContent}</div>
    </div>
  );
}
