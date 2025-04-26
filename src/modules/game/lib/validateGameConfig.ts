import type { GameConfig } from ".";

/**
 * @throws Will throw if `gameConfig` is invalid.
 */
export const validateGameConfig = (gameConfig: GameConfig) => {
  if (gameConfig.questions.length === 0) throw new Error("No questions found");

  // TODO: split into smaller functions like validateQuestion, validateReward etc.
  // TODO: use zod for validation.
  gameConfig.questions.forEach((question) => {
    if (question.answers.length < 2)
      throw new Error(`Question ${question.id} has less than 2 answers`);

    if (question.correctAnswerIds.length === 0)
      throw new Error(`Question ${question.id} has no correct answers`);

    if (question.reward <= 0)
      throw new Error(`Question ${question.id} has no reward`);

    const answerIds = question.answers.map((answer) => answer.id);
    question.correctAnswerIds.forEach((correctAnswerId) => {
      if (!answerIds.includes(correctAnswerId))
        throw new Error(
          `Correct answer ${correctAnswerId} is not found in answers`
        );
    });
  });
};
