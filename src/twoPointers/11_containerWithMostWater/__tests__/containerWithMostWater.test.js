import { describe, expect, it } from "@jest/globals";
import { maxArea } from "../containerWithMostWater";

describe("11. Container with Most Water", () => {
  it.each([
    { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
    { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
  ])("$height -> $expected", ({ height, expected }) => {
    expect(maxArea(height)).toStrictEqual(expected);
  });
});
