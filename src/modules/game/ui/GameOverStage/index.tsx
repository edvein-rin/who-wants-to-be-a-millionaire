import classNames from "classnames";

import { Reward, formatReward } from "@/modules/reward";
import { Button } from "@/modules/shared";

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
  <main className={classNames(className)}>
    <p>Score: {formatReward(reward)}</p>
    <Button onClick={onRestart}>Try again</Button>
  </main>
);
