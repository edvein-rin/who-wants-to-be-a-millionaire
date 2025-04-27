"use client";

import { useCallback, useMemo, useState } from "react";

import { Reward } from "@/modules/reward";
import { Answer } from "@/modules/answer";

import { GameStage, useGameConfig } from "../../lib";
import {
  GameStartStage,
  GamePlayStage,
  GameOverStage,
  GameContext,
  GameContextValue,
} from "..";

export const Game = () => {
  const gameConfig = useGameConfig();

  const [currentGameStage, setCurrentGameStage] = useState<GameStage>(
    GameStage.START
  );
  const [currentReward, setCurrentReward] = useState<Reward>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const currentQuestion = useMemo(
    () => gameConfig.questions[currentQuestionIndex],
    [gameConfig, currentQuestionIndex]
  );

  const startGame = useCallback(() => {
    setCurrentGameStage(GameStage.PLAY);
  }, []);

  const restartGame = useCallback(() => {
    setCurrentReward(0);
    setCurrentQuestionIndex(0);
    startGame();
  }, [startGame]);

  const handleCorrectAnswer = useCallback(() => {
    setCurrentReward(currentQuestion.reward);

    const nextQuestionIndex = currentQuestionIndex + 1;
    const isThereNextQuestion =
      nextQuestionIndex !== gameConfig.questions.length;

    if (isThereNextQuestion) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCurrentGameStage(GameStage.OVER);
    }
  }, [gameConfig, currentQuestionIndex, currentQuestion]);

  const handleWrongAnswer = useCallback(() => {
    setCurrentGameStage(GameStage.OVER);
  }, []);

  const answerCurrentQuestion = useCallback(
    (answerId: Answer["id"]) => {
      const isAnswerCorrect =
        currentQuestion.correctAnswerIds.includes(answerId);

      if (isAnswerCorrect) {
        handleCorrectAnswer();
      } else {
        handleWrongAnswer();
      }
    },
    [currentQuestion, handleCorrectAnswer, handleWrongAnswer]
  );

  const gameStageComponent = useMemo(() => {
    switch (currentGameStage) {
      case GameStage.START:
        return <GameStartStage />;
      case GameStage.PLAY:
        return <GamePlayStage />;
      case GameStage.OVER:
        return <GameOverStage />;
      default:
        throw new Error(`Stage ${currentGameStage} is not implemented`);
    }
  }, [currentGameStage]);

  const gameContextValue: GameContextValue = useMemo(
    () => ({
      gameConfig,
      startGame,
      restartGame,
      currentQuestion,
      answerCurrentQuestion,
      currentReward,
    }),
    [
      gameConfig,
      startGame,
      restartGame,
      currentQuestion,
      answerCurrentQuestion,
      currentReward,
    ]
  );

  return (
    <GameContext value={gameContextValue}>{gameStageComponent}</GameContext>
  );
};
