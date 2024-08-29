import { z } from "zod";

export const QuestionsSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must contain at least 5 characters" })
    .max(130, { message: "Title must contain at most 130 characters" }),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(2).max(15)).min(1).max(3),
});
