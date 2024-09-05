"use server";

import { revalidatePath } from "next/cache";

import Answer from "@/database/answer.model";
import Question from "@/database/question.model";
import { connectToDatabase } from "@/lib/mongoose";

import { GetAnswersParams, CreateAnswerParams } from "./shared.types";

export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDatabase();

    const { questionId } = params;

    const answers = await Answer.find({ question: questionId })
      .populate("author", "_id clerkId name picture")
      .sort({ createdAt: -1 });

    return { answers };
  } catch (error) {
    console.log("Error in getAnswers", error);
    throw error;
  }
}

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDatabase();

    const { content, author, question, path } = params;

    const newAnswer = await Answer.create({ content, author, question });

    // Add the answer to question's answers array
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    // TODO: Add Interaction

    revalidatePath(path);
  } catch (error) {
    console.log("Error in createAnswer", error);
    throw error;
  }
}