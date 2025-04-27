"use client";

import { use } from "react";

import { formatReward } from "@/modules/reward";
import { Button, Image, Text } from "@/modules/shared";

import { GameContext } from "../GameContext";

import styles from "./styles.module.css";

export const GameOverStage = () => {
  const { currentReward, restartGame } = use(GameContext);

  return (
    <main className={styles.root}>
      <div className={styles.imageWrapperWrapper}>
        <div className={styles.imageWrapper}>
          <Image alt="thumb-up" src="/images/thumb-up.svg" fill priority />
        </div>
      </div>
      <div className={styles.cta}>
        <div className={styles.score}>
          <Text className={styles.scoreLabel}>Total score:</Text>
          <Text className={styles.scoreValue} variant="h1">
            {currentReward && formatReward(currentReward)} earned
          </Text>
        </div>
        <Button onClick={restartGame}>Try again</Button>
      </div>
    </main>
  );
};
