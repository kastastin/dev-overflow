"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";

type LocalSearchbarProps = {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
};

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchbarProps) => {
  return (
    <div
      className={`
        ${otherClasses}
        background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4
        ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}
      `}
    >
      <Image
        src={imgSrc}
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
      />

      <Input
        type="text"
        placeholder={placeholder}
        value=""
        readOnly
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        onChange={() => {}}
      />
    </div>
  );
};

export default LocalSearchbar;
