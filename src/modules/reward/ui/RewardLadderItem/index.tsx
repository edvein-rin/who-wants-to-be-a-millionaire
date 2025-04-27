import classNames from "classnames";

import { Reward, formatReward } from "../..";

import styles from "./styles.module.css";

export type RewardLadderItemProps = {
  reward: Reward;
  variant?: "inactive" | "current" | "finished";
  className?: string;
};

export const RewardLadderItem = ({
  reward,
  variant = "inactive",
  className,
}: RewardLadderItemProps) => (
  <li className={classNames(styles.root, styles[variant], className)}>
    <div className={styles.sideline} />
    <div className={styles.middlePart}>
      <svg
        width={240}
        height={32}
        viewBox="0 0 240 32"
        className={classNames(styles.middlePartBackground, styles.small)}
      >
        <path
          d="M21.4941 0.5H218.506C221.289 0.500066 223.971 1.50913 226.06 3.3291L226.47 3.7041L239.277 16L226.47 28.2959C224.328 30.3518 221.475 31.4999 218.506 31.5H21.4941C18.7112 31.4999 16.0294 30.4909 13.9404 28.6709L13.5303 28.2959L0.72168 16L13.5303 3.7041C15.6718 1.6482 18.5255 0.500064 21.4941 0.5Z"
          className={styles.middlePartBackgroundPath}
        />
      </svg>
      <svg
        width={240}
        height={40}
        viewBox="0 0 240 40"
        className={classNames(styles.middlePartBackground, styles.big)}
      >
        <path
          d="M22.2871 0.5H217.713C221.019 0.500018 224.16 1.92272 226.34 4.39551L226.548 4.6377L239.349 20L226.548 35.3623C224.363 37.9842 221.126 39.5 217.713 39.5H22.2871C18.9807 39.5 15.8397 38.0773 13.6602 35.6045L13.4521 35.3623L0.650391 20L13.4521 4.6377C15.6371 2.0158 18.8742 0.500017 22.2871 0.5Z"
          className={styles.middlePartBackgroundPath}
        />
      </svg>
      <div className={styles.middlePartForeground}>{formatReward(reward)}</div>
    </div>
    <div className={styles.sideline} />
  </li>
);
