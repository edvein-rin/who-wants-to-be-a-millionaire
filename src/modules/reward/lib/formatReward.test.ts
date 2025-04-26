import { expect, it } from "vitest";

import { formatReward } from ".";

it("formats reward", () => {
  expect(formatReward(0)).toBe("$0");
  expect(formatReward(100)).toBe("$100");
  expect(formatReward(1000)).toBe("$1,000");
  expect(formatReward(1000000)).toBe("$1,000,000");
});
