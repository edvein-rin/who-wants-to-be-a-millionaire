"use client";

import { Drawer, DrawerProps, Icon, IconButton } from "@/modules/shared";
import {
  Reward,
  RewardLadder,
  RewardLadderItem,
  RewardLadderItemProps,
} from "@/modules/reward";

import styles from "./styles.module.css";

export interface GamePlayStageMenuDrawerProps extends DrawerProps {
  rewards: Reward[];
  currentRewardIndex: number;
}

export const GamePlayStageMenuDrawer = ({
  rewards,
  currentRewardIndex,
  ...restProps
}: GamePlayStageMenuDrawerProps) => (
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
