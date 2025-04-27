"use client";

import { createContext } from "react";

import { Question } from "@/modules/question";
import { Answer } from "@/modules/answer";
import { Reward } from "@/modules/reward";

import { GameConfig } from "../../lib";

export type GameContextValue = {
  gameConfig: GameConfig | undefined;
  startGame: () => void;
  restartGame: () => void;
  currentQuestion: Question | undefined;
  answerCurrentQuestion: (answerId: Answer["id"]) => void;
  currentReward: Reward | undefined;
};

export const GameContext = createContext<GameContextValue>({
  gameConfig: undefined,
  startGame: () => {},
  restartGame: () => {},
  currentQuestion: undefined,
  answerCurrentQuestion: () => {},
  currentReward: undefined,
});
