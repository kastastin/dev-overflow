import { auth } from "@clerk/nextjs/server";

import { ParamsProps } from "@/types";
import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { getQuestionById } from "@/lib/actions/question.action";

const Page = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  const mongoUser = await getUserById({ userId });
  const question = await getQuestionById({ questionId: params.id });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

      <div className="mt-9">
        <Question
          type="Edit"
          mongoUserId={mongoUser._id}
          questionDetails={JSON.stringify(question)}
        />
      </div>
    </>
  );
};

export default Page;
