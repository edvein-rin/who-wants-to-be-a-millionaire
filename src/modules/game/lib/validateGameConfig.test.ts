import { expect, it } from "vitest";
import { validateGameConfig } from ".";

it("throws on no questions", () => {
  expect(() =>
    validateGameConfig({ questions: [] })
  ).toThrowErrorMatchingInlineSnapshot(`[Error: No questions found]`);
});

it("throws on less than 2 answers", () => {
  expect(() =>
    validateGameConfig({
      questions: [
        { id: 0, text: "", answers: [], correctAnswerIds: [0], reward: 1 },
      ],
    })
  ).toThrowErrorMatchingInlineSnapshot(
    `[Error: Question 0 has less than 2 answers]`
  );
  expect(() =>
    validateGameConfig({
      questions: [
        {
          id: 0,
          text: "",
          answers: [{ id: 0, text: "" }],
          correctAnswerIds: [0],
          reward: 1,
        },
      ],
    })
  ).toThrowErrorMatchingInlineSnapshot(
    `[Error: Question 0 has less than 2 answers]`
  );
  expect(() =>
    validateGameConfig({
      questions: [
        {
          id: 0,
          text: "",
          answers: [
            { id: 0, text: "" },
            { id: 1, text: "" },
          ],
          correctAnswerIds: [0],
          reward: 1,
        },
      ],
    })
  ).not.toThrow();
});

it("throws on no correct answers", () => {
  expect(() =>
    validateGameConfig({
      questions: [
        {
          id: 0,
          text: "",
          answers: [
            { id: 0, text: "" },
            { id: 1, text: "" },
          ],
          correctAnswerIds: [],
          reward: 1,
        },
      ],
    })
  ).toThrowErrorMatchingInlineSnapshot(`[Error: Question 0 has no correct answers]`);
});

it("throws on no question reward", () => {
  expect(() =>
    validateGameConfig({
      questions: [
        {
          id: 0,
          text: "",
          answers: [
            { id: 0, text: "" },
            { id: 1, text: "" },
          ],
          correctAnswerIds: [0],
          reward: 0,
        },
      ],
    })
  ).toThrowErrorMatchingInlineSnapshot(`[Error: Question 0 has no reward]`);
});

it("throws on correct answers not being in answers", () => {
  expect(() =>
    validateGameConfig({
      questions: [
        {
          id: 0,
          text: "",
          answers: [
            { id: 0, text: "" },
            { id: 1, text: "" },
          ],
          correctAnswerIds: [3],
          reward: 1,
        },
      ],
    })
  ).toThrowErrorMatchingInlineSnapshot(`[Error: Correct answer 3 is not found in answers]`);
});
