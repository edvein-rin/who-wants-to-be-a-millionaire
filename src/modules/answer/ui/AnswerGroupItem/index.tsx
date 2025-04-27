"use client";

import classNames from "classnames";
import { ReactNode, useCallback, useContext } from "react";

import type { Answer } from "../..";
import { AnswerGroupContext } from "..";

import styles from "./styles.module.css";
import { Text } from "@/modules/shared";

export type AnswerGroupItemProps = {
  className?: string;
  label?: ReactNode;
  text?: ReactNode;
  value?: Answer["id"];
  isCorrect?: boolean;
};

export const AnswerGroupItem = ({
  className,
  label,
  text,
  value,
  isCorrect,
}: AnswerGroupItemProps) => {
  const {
    name,
    value: currentValue,
    onSelect,
  } = useContext(AnswerGroupContext);
  const isSelected = currentValue === value;

  const handleChange = useCallback(() => {
    if (!isSelected && value !== undefined) {
      onSelect?.(value);
    }
  }, [onSelect, value, isSelected]);

  return (
    <label
      className={classNames(
        styles.root,
        isSelected && styles.selected,
        isCorrect !== undefined && (isCorrect ? styles.correct : styles.wrong),
        className
      )}
    >
      <input
        type="radio"
        className={styles.input}
        name={name}
        value={value}
        checked={isSelected}
        onChange={handleChange}
      />
      <div className={styles.sideline} />
      <div className={styles.middlePart}>
        <svg
          width={288}
          height={56}
          viewBox="0 0 288 56"
          className={classNames(styles.middlePartBackground, styles.small)}
        >
          <path
            d="M26.1758 0.5H261.824C265.422 0.5 268.806 2.18323 270.977 5.03613L271.183 5.31543L287.385 28L271.183 50.6846C269.024 53.7066 265.538 55.5 261.824 55.5H26.1758C22.5778 55.5 19.1939 53.8168 17.0234 50.9639L16.8174 50.6846L0.614258 28L16.8174 5.31543C18.9761 2.29338 22.4619 0.5 26.1758 0.5Z"
            className={styles.middlePartBackgroundPath}
          />
        </svg>
        <svg
          width={373}
          height={72}
          viewBox="0 0 373 72"
          className={classNames(styles.middlePartBackground, styles.big)}
        >
          <path
            d="M32.0518 0.5H340.948C344.532 0.500066 347.904 2.17098 350.076 5.00586L350.283 5.2832L372.383 36L350.283 66.7168C348.122 69.72 344.648 71.4999 340.948 71.5H32.0518C28.4675 71.4999 25.0956 69.829 22.9238 66.9941L22.7168 66.7168L0.616211 36L22.7168 5.2832C24.8777 2.27998 28.3519 0.500067 32.0518 0.5Z"
            className={styles.middlePartBackgroundPath}
          />
        </svg>
        <div className={styles.middlePartForeground}>
          {label !== undefined && label !== null && (
            <Text className={styles.label}>{label}</Text>
          )}
          <Text className={styles.answer}>{text}</Text>
        </div>
      </div>
      <div className={styles.sideline} />
    </label>
  );
};
