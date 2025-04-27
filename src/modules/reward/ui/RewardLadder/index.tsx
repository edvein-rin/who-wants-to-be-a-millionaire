import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./styles.module.css";

export type RewardLadderProps = {
  children?: ReactNode;
  className?: string;
};

export const RewardLadder = ({ children, className }: RewardLadderProps) => (
  <ul className={classNames(styles.root, className)}>{children}</ul>
);
