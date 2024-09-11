"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { formUrlQuery } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";

const HomeFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [active, setActive] = useState("");

  const handleTypeClick = (item: string) => {
    if (active === item) {
      setActive("");

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: null,
      });

      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: item.toLowerCase(),
      });

      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none
            ${
              active === filter.value
                ? "bg-primary-100 text-primary-500"
                : "bg-light-800 text-light-500"
            }`}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
