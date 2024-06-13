import { describe, expect, it } from "@jest/globals";
import { longestConsecutive } from "../longestConsecutiveSequence";

describe("128. Longest Consecutive Sequence", () => {
  it.each([
    { nums: [100, 4, 200, 1, 3, 2], expected: 4 },
    { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
    { nums: [1, 2, 0, 1], expected: 3 },
  ])("$nums -> $expected", ({ nums, expected }) => {
    expect(longestConsecutive(nums)).toStrictEqual(expected);
  });
});
