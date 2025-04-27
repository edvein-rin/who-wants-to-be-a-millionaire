'use client'

import { createContext } from "react";

import { Answer } from "../..";

export type AnswerGroupContextValue = {
  name?: string;
  value?: Answer["id"];
  onSelect?: (value: Answer["id"]) => void;
};

export const AnswerGroupContext = createContext<AnswerGroupContextValue>({
  name: undefined,
  value: undefined,
  onSelect: undefined,
});
