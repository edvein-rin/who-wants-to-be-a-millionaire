import classNames from "classnames";

import { Button, Image, Text } from "@/modules/shared";

import styles from "./styles.module.css";

export type GameStartStageProps = {
  onStart: () => void;
  className?: string;
};

export const GameStartStage = ({ className, onStart }: GameStartStageProps) => (
  <main className={classNames(styles.root, className)}>
    <div className={styles.imageWrapperWrapper}>
      <div className={styles.imageWrapper}>
        <Image alt="thumb-up" src="/thumb-up.svg" fill />
      </div>
    </div>
    <div className={styles.cta}>
      <Text className={styles.ctaTitle} variant="h1">
        Who wants to be
        <br />a millionaire?
      </Text>
      <Button onClick={onStart}>Start</Button>
    </div>
  </main>
);
