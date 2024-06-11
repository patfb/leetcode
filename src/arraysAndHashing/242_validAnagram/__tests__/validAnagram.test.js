import { describe, expect, it } from "@jest/globals";
import { isAnagram } from "../validAnagram";

describe("validAnagram", () => {
  it.each([
    { s: "anagram", t: "nagaram", expected: true },
    { s: "rat", t: "car", expected: false },
  ])("$s, $t -> $expected", ({ s, t, expected }) => {
    expect(isAnagram(s, t)).toStrictEqual(expected);
  });
});
