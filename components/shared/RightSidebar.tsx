import Link from "next/link";
import Image from "next/image";

import RenderTag from "@/components/shared/RenderTag";

const topQuestions = [
  { _id: 1, title: "Best practices for data fetching in a Next.js app?" },
  { _id: 2, title: "Is it only me or the font is bolder than necessary?" },
  { _id: 3, title: "Redux Toolkit Not Updating State as Expected" },
  { _id: 4, title: "Async/Await Function Not Handling Errors Properly" },
  { _id: 5, title: "How to Perfectly Center a Div with Tailwind CSS?" },
];

const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 9 },
  { _id: 2, name: "react", totalQuestions: 7 },
  { _id: 3, name: "next", totalQuestions: 5 },
  { _id: 4, name: "vue", totalQuestions: 3 },
  { _id: 5, name: "redux", totalQuestions: 2 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-8 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* Top Questions */}
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>

              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="mt-8">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
