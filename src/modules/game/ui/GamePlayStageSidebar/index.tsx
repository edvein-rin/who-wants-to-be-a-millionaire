import classNames from "classnames";

import {
  Reward,
  RewardLadder,
  RewardLadderItem,
  RewardLadderItemProps,
} from "@/modules/reward";

import styles from "./styles.module.css";

export type GamePlayStageSidebarProps = {
  rewards: Reward[];
  currentRewardIndex: number;
  className?: string;
};

export const GamePlayStageSidebar = ({
  rewards,
  currentRewardIndex,
  className,
}: GamePlayStageSidebarProps) => (
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
