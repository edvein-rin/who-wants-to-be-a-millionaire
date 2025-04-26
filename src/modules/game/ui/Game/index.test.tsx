import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Game } from "./index";

it("renders a placeholder", () => {
  render(<Game />);
  expect(screen.getByText("Here gonna be a game...")).toBeDefined();
});
