import { describe, expect, it } from "@jest/globals";
import { lengthOfLongestSubstring } from "../longestSubstring";

describe("3. Longest Substring Without Repeating Characters", () => {
  it.each([
    { input: " ", expected: 1 },
    { input: "au", expected: 2 },
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
  ])("$input -> $expected", ({ input, expected }) => {
    expect(lengthOfLongestSubstring(input)).toStrictEqual(expected);
  });
});
