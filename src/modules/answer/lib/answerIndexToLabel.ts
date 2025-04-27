const FIRST_CAPITAL_LETTER_OFFSET = 64;

export const answerIndexToLabel = (answerIndex: number): string =>
  String.fromCharCode(answerIndex + 1 + FIRST_CAPITAL_LETTER_OFFSET);
