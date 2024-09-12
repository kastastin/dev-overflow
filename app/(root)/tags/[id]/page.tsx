import { URLProps } from "@/types";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/shared/Pagination";
import QuestionCard from "@/components/cards/QuestionCard";
import { getQuestionsByTagId } from "@/lib/actions/tag.action";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

const Page = async ({ params, searchParams }: URLProps) => {
  const data = await getQuestionsByTagId({
    tagId: params.id,
    searchQuery: searchParams.q,
    page: Number(searchParams.page) || 1,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900 capitalize">
        {data.tagTitle}
      </h1>

      <div className="mt-12 w-full">
        <LocalSearchbar
          route={`/tags/${params.id}`}
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search tag questions"
          otherClasses="flex-1"
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
            title="There's no tag question saved to show"
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
};

export default Page;
