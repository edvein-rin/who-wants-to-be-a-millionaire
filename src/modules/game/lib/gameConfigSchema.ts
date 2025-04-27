import { z } from "zod";

import { questionSchema } from "@/modules/question";

import type { GameConfig } from ".";

export const gameConfigSchema: z.ZodSchema<GameConfig> = z.object({
  questions: z.array(questionSchema).nonempty(),
});
