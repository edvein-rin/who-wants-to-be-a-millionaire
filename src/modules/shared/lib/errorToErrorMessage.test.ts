import { expect, it } from "vitest";
import { ZodError } from "zod";

import { errorToErrorMessage } from "./errorToErrorMessage";

it("returns fallback on unknown errors", () => {
  expect(errorToErrorMessage(null)).toMatchInlineSnapshot(`"Unexpected error"`);
});

it("works with plain Error objects", () => {
  expect(errorToErrorMessage(new Error("Test"))).toBe("Test");
});

it("works with Zod errors", () => {
  expect(
    errorToErrorMessage(
      new ZodError([
        {
          code: "invalid_type",
          expected: "number",
          received: "string",
          path: ["id"],
          message: "Expected number, received string",
        },
      ])
    )
  ).toMatchInlineSnapshot(`"id - Expected number, received string"`);
});
