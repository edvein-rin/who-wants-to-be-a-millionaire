"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Reward } from "@/modules/reward";
import { GameOverStage, GamePlayStage, GameStartStage } from "..";

import { GameStage, gameConfig, validateGameConfig } from "./lib";

export const Game = () => {
  const isFirstRenderReference = useRef(true);

  useEffect(() => {
    if (isFirstRenderReference) {
      validateGameConfig(gameConfig);
      isFirstRenderReference.current = false;
    }
  }, []);

  const [currentGameStage, setCurrentGameStage] = useState<GameStage>(
    GameStage.START
  );
  const [reward, setReward] = useState<Reward>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const currentQuestion = useMemo(
    () => gameConfig.questions[currentQuestionIndex],
    [currentQuestionIndex]
  );

  const startGame = useCallback(() => {
    setCurrentGameStage(GameStage.PLAY);
  }, []);

  const restartGame = useCallback(() => {
    setReward(0);
    setCurrentQuestionIndex(0);
    startGame();
  }, [startGame]);

  const handleCorrectAnswer = useCallback(() => {
    setReward(currentQuestion.reward);

    const nextQuestionIndex = currentQuestionIndex + 1;
    const isThereNextQuestion =
      nextQuestionIndex !== gameConfig.questions.length;

    if (isThereNextQuestion) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCurrentGameStage(GameStage.OVER);
    }
  }, [currentQuestionIndex, currentQuestion]);

  const handleWrongAnswer = useCallback(() => {
    setCurrentGameStage(GameStage.OVER);
  }, []);

  switch (currentGameStage) {
    case GameStage.START:
      return <GameStartStage onStart={startGame} />;
    case GameStage.PLAY:
      return (
        <GamePlayStage
          question={currentQuestion}
          onCorrectAnswer={handleCorrectAnswer}
          onWrongAnswer={handleWrongAnswer}
        />
      );
    case GameStage.OVER:
      return <GameOverStage reward={reward} onRestart={restartGame} />;
    default:
      throw new Error(`Stage ${currentGameStage} is not implemented`);
  }
};
