import { describe, expect, it } from "@jest/globals";
import { intToRoman } from "../integerToRoman";

describe("12. Integer to Roman", () => {
  it.each([
    { num: 3749, expected: "MMMDCCXLIX" },
    { num: 58, expected: "LVIII" },
    { num: 1994, expected: "MCMXCIV" },
    { num: 10, expected: "X" },
  ])("nums $nums, target $target -> $expected", ({ num, expected }) => {
    expect(intToRoman(num)).toStrictEqual(expected);
  });
});
