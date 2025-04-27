import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.css";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ className, ...restProps }: IconButtonProps) => (
  <button
    className={classNames(styles.root, className)}
    type="button"
    {...restProps}
  />
);
