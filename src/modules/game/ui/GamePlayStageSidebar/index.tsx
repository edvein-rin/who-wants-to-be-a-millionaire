import classNames from "classnames";
import { use, useMemo } from "react";

import {
  RewardLadder,
  RewardLadderItem,
  RewardLadderItemProps,
} from "@/modules/reward";

import { GameContext } from "../GameContext";

import styles from "./styles.module.css";

export type GamePlayStageSidebarProps = {
  className?: string;
};

export const GamePlayStageSidebar = ({
  className,
}: GamePlayStageSidebarProps) => {
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
    <aside className={classNames(styles.root, className)}>
      <RewardLadder>
        {rewards
          .map((reward, index) => {
            const variant: RewardLadderItemProps["variant"] = (() => {
              if (index < currentRewardIndex) return "finished";
              if (index === currentRewardIndex) return "current";
              return "inactive";
            })();

            return (
              <RewardLadderItem key={index} reward={reward} variant={variant} />
            );
          })
          .reverse()}
      </RewardLadder>
    </aside>
  );
};
