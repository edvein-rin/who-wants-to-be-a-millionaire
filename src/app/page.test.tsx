import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import HomePage from "./page";

test("home page", () => {
  render(<HomePage />);
  expect(screen.getByText("Read our docs", { selector: "a" })).toBeDefined();
});
