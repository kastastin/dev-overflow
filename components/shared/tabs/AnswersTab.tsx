import { SearchParamsProps } from "@/types";
import { getUserAnswers } from "@/lib/actions/user.action";
import AnswerCard from "@/components/cards/AnswerCard";
import Pagination from "@/components/shared/Pagination";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ userId, clerkId, searchParams }: Props) => {
  const data = await getUserAnswers({
    userId,
    page: Number(searchParams.page) || 1,
  });

  return (
    <>
      {data.answers.map((answer) => (
        <AnswerCard
          key={answer._id}
          clerkId={clerkId}
          _id={answer._id}
          question={answer.question}
          author={answer.author}
          upvotes={answer.upvotes.length}
          createdAt={answer.createdAt}
        />
      ))}

      <Pagination
        pageNumber={searchParams?.page ? Number(searchParams.page) : 1}
        isNext={data.isNextAnswers}
      />
    </>
  );
};

export default AnswersTab;
