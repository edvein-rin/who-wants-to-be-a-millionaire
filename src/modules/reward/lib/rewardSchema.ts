import { z } from "zod";

import type { Reward } from ".";

export const rewardSchema: z.ZodSchema<Reward> = z.number().positive();
