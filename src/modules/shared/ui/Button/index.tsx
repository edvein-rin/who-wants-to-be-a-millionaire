import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...restProps }: ButtonProps) => (
  <button
    className={classNames(styles.root, className)}
    type="button"
    {...restProps}
  />
);
