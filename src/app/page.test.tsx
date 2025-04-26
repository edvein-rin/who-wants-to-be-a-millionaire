import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import HomePage from "./page";

test("home page", () => {
  render(<HomePage />);
  expect(screen.getByText("Empty, but ready to be filled!")).toBeDefined();
});
