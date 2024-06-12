import { describe, expect, it } from "@jest/globals";
import { romanToInt } from "../romanToInteger";

describe("13. Roman to Integer", () => {
  it.each([
    { input: "III", expected: 3 },
    { input: "LVIII", expected: 58 },
    { input: "MCMXCIV", expected: 1994 },
    { input: "DCXXI", expected: 621 },
    { input: "MDLXX", expected: 1570 },
  ])("$input -> $expected", ({ input, expected }) => {
    expect(romanToInt(input)).toStrictEqual(expected);
  });
});
