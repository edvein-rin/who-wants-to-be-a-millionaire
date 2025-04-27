"use client";

import { use } from "react";

import { Button, Image, Text } from "@/modules/shared";

import { GameContext } from "../GameContext";

import styles from "./styles.module.css";

export const GameStartStage = () => {
  const { startGame } = use(GameContext);

  return (
    <main className={styles.root}>
      <div className={styles.imageWrapperWrapper}>
        <div className={styles.imageWrapper}>
          <Image alt="thumb-up" src="/images/thumb-up.svg" fill priority />
        </div>
      </div>
      <div className={styles.cta}>
        <Text className={styles.ctaTitle} variant="h1">
          Who wants to be
          <br />a millionaire?
        </Text>
        <Button onClick={startGame}>Start</Button>
      </div>
    </main>
  );
};
