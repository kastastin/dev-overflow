import Link from "next/link";

import Filter from "@/components/shared/Filter";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import NoResult from "@/components/shared/NoResult";
import HomeFilters from "@/components/home/HomeFilters";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

const questions = [
  // {
  //   _id: 1,
  //   title: "Best practices for data fetching",
  //   tags: [
  //     { _id: 1, name: "next" },
  //     { _id: 2, name: "javascript" },
  //   ],
  //   author: "John Snow",
  //   upvotes: 10,
  //   views: 121,
  //   answers: 2,
  //   createdAt: "2024-08-05T11:14:23.429Z",
  // },
  // {
  //   _id: 2,
  //   title: "How to Perfectly Center a Div with Tailwind CSS?",
  //   tags: [
  //     { _id: 1, name: "css" },
  //     { _id: 2, name: "javascript" },
  //   ],
  //   author: "John Snow",
  //   upvotes: 4,
  //   views: 36,
  //   answers: 1,
  //   createdAt: "2024-07-03T10:22:11.153Z",
  // },
];

const Home = () => {
  return (
    <>
      {/* All Questions */}
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => "QuestionCard")
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. Our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
