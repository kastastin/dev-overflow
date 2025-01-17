import { auth } from "@clerk/nextjs/server";

import { SearchParamsProps } from "@/types";
import Filter from "@/components/shared/Filter";
import { QuestionFilters } from "@/constants/filters";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/shared/Pagination";
import { getSavedQuestions } from "@/lib/actions/user.action";
import QuestionCard from "@/components/cards/QuestionCard";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

export default async function Home({ searchParams }: SearchParamsProps) {
  const { userId } = auth();

  if (!userId) return null;

  const data = await getSavedQuestions({
    clerkId: userId,
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: Number(searchParams.page) || 1,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/collection"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {data.questions.length > 0 ? (
          data.questions.map((question: any) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no saved questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? Number(searchParams.page) : 1}
          isNext={data.isNext}
        />
      </div>
    </>
  );
}
