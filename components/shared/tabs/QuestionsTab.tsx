import { SearchParamsProps } from "@/types";
import Pagination from "@/components/shared/Pagination";
import { getUserQuestions } from "@/lib/actions/user.action";
import QuestionCard from "@/components/cards/QuestionCard";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const QuestionsTab = async ({ userId, clerkId, searchParams }: Props) => {
  const data = await getUserQuestions({
    userId,
    page: Number(searchParams.page) || 1,
  });

  return (
    <>
      {data.questions.map((question) => (
        <QuestionCard
          key={question._id}
          _id={question._id}
          clerkId={clerkId}
          title={question.title}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}
        />
      ))}

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? Number(searchParams.page) : 1}
          isNext={data.isNextQuestions}
        />
      </div>
    </>
  );
};

export default QuestionsTab;
