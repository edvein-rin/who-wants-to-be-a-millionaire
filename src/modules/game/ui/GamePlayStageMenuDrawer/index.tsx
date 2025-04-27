"use client";

import { use, useMemo } from "react";

import { Drawer, DrawerProps, Icon, IconButton } from "@/modules/shared";
import {
  RewardLadder,
  RewardLadderItem,
  RewardLadderItemProps,
} from "@/modules/reward";

import { GameContext } from "../GameContext";

import styles from "./styles.module.css";

export type GamePlayStageMenuDrawerProps = DrawerProps;

export const GamePlayStageMenuDrawer = ({
  ...restProps
}: GamePlayStageMenuDrawerProps) => {
  const { gameConfig, currentQuestion } = use(GameContext);

  const rewards = useMemo(
    () => gameConfig?.questions.map((question) => question.reward),
    [gameConfig?.questions]
  );
  const currentQuestionIndex =
    gameConfig && currentQuestion
      ? gameConfig.questions.findIndex((x) => x.id === currentQuestion.id)
      : undefined;
  const currentRewardIndex = currentQuestionIndex;

  if (
    rewards === undefined ||
    currentRewardIndex === undefined ||
    currentRewardIndex === -1
  )
    return null;

  return (
    <Drawer
      content={({ close }) => (
        <div className={styles.root}>
          <div className={styles.header}>
            <IconButton onClick={close}>
              <Icon name="close" />
            </IconButton>
          </div>
          <div className={styles.main}>
            <RewardLadder>
              {rewards
                .map((reward, index) => {
                  const variant: RewardLadderItemProps["variant"] = (() => {
                    if (index < currentRewardIndex) return "finished";
                    if (index === currentRewardIndex) return "current";
                    return "inactive";
                  })();

                  return (
                    <RewardLadderItem
                      key={index}
                      reward={reward}
                      variant={variant}
                    />
                  );
                })
                .reverse()}
            </RewardLadder>
          </div>
        </div>
      )}
      {...restProps}
    />
  );
};
