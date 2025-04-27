"use client";

import { use, useCallback, useState } from "react";

import { Icon, IconButton, Text } from "@/modules/shared";
import {
  Answer,
  AnswerGroup,
  AnswerGroupItem,
  answerIndexToLabel,
} from "@/modules/answer";

import { GameContext, GamePlayStageMenuDrawer, GamePlayStageSidebar } from "..";

import styles from "./styles.module.css";

export const GamePlayStage = () => {
  const { currentQuestion, answerCurrentQuestion } = use(GameContext);

  const [selectedAnswerId, setSelectedAnswerId] = useState<Answer["id"]>();

  const handleAnswerGroupChange = useCallback(
    (selectedAnswerId: Answer["id"]) => {
      if (!currentQuestion) return;

      setSelectedAnswerId(selectedAnswerId);

      setTimeout(() => {
        setSelectedAnswerId(undefined);
        answerCurrentQuestion(selectedAnswerId);
      }, 250);
    },
    [currentQuestion, answerCurrentQuestion]
  );

  if (!currentQuestion) return null;

  return (
    <div className={styles.root}>
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <div className={styles.header}>
            <GamePlayStageMenuDrawer>
              {({ open }) => (
                <IconButton onClick={open}>
                  <Icon name="menu" />
                </IconButton>
              )}
            </GamePlayStageMenuDrawer>
          </div>
          <Text className={styles.question}>{currentQuestion.text}</Text>
          <div>
            <AnswerGroup
              name="answers"
              value={selectedAnswerId}
              onChange={handleAnswerGroupChange}
              className={styles.answers}
            >
              {currentQuestion.answers.map((answer, index) => {
                const isCorrectAnswer =
                  currentQuestion.correctAnswerIds.includes(answer.id);

                return (
                  <AnswerGroupItem
                    key={answer.id}
                    label={answerIndexToLabel(index)}
                    value={answer.id}
                    text={answer.text}
                    isCorrect={isCorrectAnswer}
                  />
                );
              })}
            </AnswerGroup>
          </div>
        </main>
      </div>
      <div className={styles.sidebarWrapper}>
        <GamePlayStageSidebar />
      </div>
    </div>
  );
};
