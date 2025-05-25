"use client";
import React, { ReactNode, useContext, createContext, useState } from "react";
import { ChevronDown } from "react-feather";
type AccordionComponent = {
  children: ReactNode;
};

type AccordionTitle = {
  children: ReactNode;
};

type AccordionContent = {
  children: ReactNode;
};

const AccordionContext = createContext(undefined);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be within an Accordion");
  }
  return context;
};

export default function Accordion({ children }: AccordionComponent) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function AccordionTitle({ children }: AccordionTitle) {
  const { isOpen, setIsOpen } = useAccordionContext();
  return (
    <div
      className={`z-1 flex gap-4 h-6 items-center h-fit text-xl font-bold cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button
        className={`${
          isOpen && "-rotate-180"
        } transition-all duration-300 transition-discrete cursor-pointer`}
      >
        <ChevronDown />
      </button>
      <div>{children}</div>
    </div>
  );
}

export function AccordionContent({ children }: AccordionContent) {
  const { isOpen } = useAccordionContext();
  return (
    <div
      className={`transition-transform transition-max-height duration-100 transition-discrete -translate-y-1 invisible max-h-0 ${
        isOpen ? "py-2 pl-4 translate-y-0 visible max-h-fit" : ""
      }`}
    >
      {children}
    </div>
  );
}
