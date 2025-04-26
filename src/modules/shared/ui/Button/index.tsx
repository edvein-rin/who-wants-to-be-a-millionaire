import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...restProps }: ButtonProps) => (
  <button className={classNames(className)} type="button" {...restProps} />
);
