"use client";

import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type TagProps = {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
};

const RenderTag = ({ _id, name, totalQuestions, showCount }: TagProps) => {
  const router = useRouter();

  return (
    <Button
      className="flex justify-between gap-2"
      onClick={() => router.push(`/tags/${_id}`)}
    >
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Button>
  );
};

export default RenderTag;
