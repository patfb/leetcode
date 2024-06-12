import { describe, expect, it } from "@jest/globals";
import { dailyTemperatures } from "../dailyTemperatures";

describe("739. Daily Temperatures", () => {
  it.each([
    {
      temps: [73, 74, 75, 71, 69, 72, 76, 73],
      expected: [1, 1, 4, 2, 1, 1, 0, 0],
    },
    {
      temps: [30, 40, 50, 60],
      expected: [1, 1, 1, 0],
    },
    {
      temps: [30, 60, 90],
      expected: [1, 1, 0],
    },
  ])("$temps -> $expected", ({ temps, expected }) => {
    expect(dailyTemperatures(temps)).toStrictEqual(expected);
  });
});
