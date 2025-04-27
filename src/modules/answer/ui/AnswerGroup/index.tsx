"use client";

import classNames from "classnames";
import { ReactNode } from "react";

import type { Answer } from "../..";
import { AnswerGroupContext } from "..";

import styles from "./styles.module.css";

export type AnswerGroupProps = {
  name?: string;
  value?: Answer["id"];
  onChange?: (value: Answer["id"]) => void;
  children?: ReactNode;
  className?: string;
};

export const AnswerGroup = ({
  className,
  name,
  value,
  onChange,
  children,
}: AnswerGroupProps) => (
  <div role="radiogroup" className={classNames(styles.root, className)}>
    <AnswerGroupContext value={{ name, value, onSelect: onChange }}>
      {children}
    </AnswerGroupContext>
  </div>
);
