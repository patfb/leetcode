import { describe, expect, it } from "@jest/globals";
import { canConstruct } from "../ransomNote";

describe("383. Ransom Note", () => {
  it.each([
    { ransomNote: "a", magazine: "b", expected: false },
    { ransomNote: "aa", magazine: "ab", expected: false },
    { ransomNote: "aa", magazine: "aab", expected: true },
  ])(
    "$ransomNote, $magazine -> $expected",
    ({ ransomNote, magazine, expected }) => {
      expect(canConstruct(ransomNote, magazine)).toStrictEqual(expected);
    },
  );
});
