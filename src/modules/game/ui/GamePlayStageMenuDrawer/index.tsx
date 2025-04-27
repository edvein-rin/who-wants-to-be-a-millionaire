import classNames from "classnames";

import { Drawer, Icon, IconButton } from "@/modules/shared";
import {
  Reward,
  RewardLadder,
  RewardLadderItem,
  RewardLadderItemProps,
} from "@/modules/reward";

import styles from "./styles.module.css";

export type GamePlayStageMenuDrawerProps = {
  rewards: Reward[];
  currentRewardIndex: number;
  onClose?: () => void;
  className?: string;
};

export const GamePlayStageMenuDrawer = ({
  rewards,
  currentRewardIndex,
  onClose,
  className,
}: GamePlayStageMenuDrawerProps) => (
  <Drawer className={classNames(styles.root, className)}>
    <div className={styles.header}>
      <IconButton onClick={onClose}>
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
              <RewardLadderItem key={index} reward={reward} variant={variant} />
            );
          })
          .reverse()}
      </RewardLadder>
    </div>
  </Drawer>
);
