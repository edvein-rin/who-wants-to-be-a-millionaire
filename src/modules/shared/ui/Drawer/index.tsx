import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./styles.module.css";

export type DrawerProps = {
  children?: ReactNode;
  className?: string;
};

export const Drawer = ({ children, className }: DrawerProps) => (
  <div className={classNames(styles.root, className)}>{children}</div>
);
