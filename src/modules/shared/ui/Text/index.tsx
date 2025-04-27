import classNames from "classnames";
import { JSX, ReactNode } from "react";

import styles from "./styles.module.css";

export type TextProps = {
  className?: string;
  variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
};

export const Text = ({
  className,
  children,
  variant = "p",
  as: Tag = variant,
}: TextProps) => (
  <Tag className={classNames(styles.root, styles[variant], className)}>
    {children}
  </Tag>
);
