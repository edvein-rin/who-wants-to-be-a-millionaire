import { z } from "zod";

import type { Answer } from ".";

export const answerSchema: z.ZodSchema<Answer> = z.object({
  id: z.number(),
  text: z.string().nonempty(),
});
