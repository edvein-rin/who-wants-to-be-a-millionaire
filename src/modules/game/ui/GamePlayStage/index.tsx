"use client";

import classNames from "classnames";
import { useCallback, useState } from "react";

import { Icon, IconButton, Text } from "@/modules/shared";
import { Question } from "@/modules/question";
import {
  Answer,
  AnswerGroup,
  AnswerGroupItem,
  answerIndexToLabel,
} from "@/modules/answer";
import { Reward } from "@/modules/reward";

import { GamePlayStageMenuDrawer, GamePlayStageSidebar } from "..";

import styles from "./styles.module.css";

export type GamePlayStageProps = {
  question: Question;
  rewards: Reward[];
  currentRewardIndex: number;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  className?: string;
};

export const GamePlayStage = ({
  question,
  rewards,
  currentRewardIndex,
  onCorrectAnswer,
  onWrongAnswer,
  className,
}: GamePlayStageProps) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<Answer["id"]>();

  const handleAnswerGroupChange = useCallback(
    (selectedAnswerId: Answer["id"]) => {
      setSelectedAnswerId(selectedAnswerId);

      const isCorrectAnswer =
        question.correctAnswerIds.includes(selectedAnswerId);

      setTimeout(() => {
        setSelectedAnswerId(undefined);
        if (isCorrectAnswer) {
          onCorrectAnswer();
        } else {
          onWrongAnswer();
        }
      }, 250);
    },
    [question, onCorrectAnswer, onWrongAnswer]
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <div className={styles.header}>
            {isMenuOpen && (
              <GamePlayStageMenuDrawer
                rewards={rewards}
                currentRewardIndex={currentRewardIndex}
                onClose={closeMenu}
              />
            )}
            <IconButton onClick={openMenu}>
              <Icon name="menu" />
            </IconButton>
          </div>
          <Text className={styles.question}>{question.text}</Text>
          <div>
            <AnswerGroup
              name="answers"
              value={selectedAnswerId}
              onChange={handleAnswerGroupChange}
              className={styles.answers}
            >
              {question.answers.map((answer, index) => {
                const isCorrectAnswer = question.correctAnswerIds.includes(
                  answer.id
                );

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
        <GamePlayStageSidebar
          rewards={rewards}
          currentRewardIndex={currentRewardIndex}
        />
      </div>
    </div>
  );
};
