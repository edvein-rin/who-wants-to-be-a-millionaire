import classNames from "classnames";

import { Reward, formatReward } from "@/modules/reward";
import { Button, Image, Text } from "@/modules/shared";

import styles from "./styles.module.css";

export type GameOverStageProps = {
  reward: Reward;
  onRestart: () => void;
  className?: string;
};

export const GameOverStage = ({
  className,
  reward,
  onRestart,
}: GameOverStageProps) => (
  <main className={classNames(styles.root, className)}>
    <div className={styles.imageWrapperWrapper}>
      <div className={styles.imageWrapper}>
        <Image alt="thumb-up" src="/images/thumb-up.svg" fill priority />
      </div>
    </div>
    <div className={styles.cta}>
      <div className={styles.score}>
        <Text className={styles.scoreLabel}>Total score:</Text>
        <Text className={styles.scoreValue} variant="h1">
          {formatReward(reward)} earned
        </Text>
      </div>
      <Button onClick={onRestart}>Try again</Button>
    </div>
  </main>
);
