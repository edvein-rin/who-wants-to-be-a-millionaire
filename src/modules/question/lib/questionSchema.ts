import { z } from "zod";

import { answerSchema } from "@/modules/answer";
import { rewardSchema } from "@/modules/reward";

import type { Question } from ".";

export const questionSchema: z.ZodSchema<Question> = z.object({
  id: z.number(),
  text: z.string().nonempty(),
  answers: z.array(answerSchema).nonempty(),
  correctAnswerIds: z.array(z.number()),
  reward: rewardSchema,
});
