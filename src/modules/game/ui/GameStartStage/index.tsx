import classNames from "classnames";

import { Button } from "@/modules/shared";

export type GameStartStageProps = {
  onStart: () => void;
  className?: string;
};

export const GameStartStage = ({ className, onStart }: GameStartStageProps) => (
  <div className={classNames(className)}>
    <Button onClick={onStart}>Start</Button>
  </div>
);
