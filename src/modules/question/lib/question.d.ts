import { Answer } from "@/modules/answer";
import { Reward } from "@/modules/reward";

export type Question = {
  id: number;
  body: string;
  answers: Answer[];
  correctAnswerIds: Answer["id"][];
  reward: Reward;
};
