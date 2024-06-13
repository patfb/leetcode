import { describe, expect, it } from "@jest/globals";
import { letterCombinations } from "../letterCombinationsPhone";

describe("17. Letter Combinations of a Phone Number", () => {
  it.each([
    {
      digits: "23",
      expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    {
      digits: "",
      expected: [],
    },
    {
      digits: "2",
      expected: ["a", "b", "c"],
    },
  ])("$digits -> $expected", ({ digits, expected }) => {
    expect(letterCombinations(digits)).toStrictEqual(expected);
  });
});
