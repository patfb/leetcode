import { describe, expect, it } from "@jest/globals";
import { longestPalindrome } from "../longestPalindrome";

describe("409. Longest Palindrome", () => {
  it.each([
    { input: "abccccdd", expected: 7 },
    { input: "a", expected: 1 },
  ])("$input -> $expected", ({ input, expected }) => {
    expect(longestPalindrome(input)).toStrictEqual(expected);
  });
});
