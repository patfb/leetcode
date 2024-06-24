import { describe, expect, it } from "@jest/globals";
import { wordBreak } from "../wordBreak";

describe("139. Word Break", () => {
  it.each([
    { s: "leetcode", wordDict: ["leet", "code"], expected: true },
    // { s: "applepenapple", wordDict: ["apple", "pen"], expected: true },
    // {
    //   s: "catsandog",
    //   wordDict: ["cats", "dog", "sand", "and", "cat"],
    //   expected: false,
    // },
  ])("$s, $wordDict -> $expected", ({ s, wordDict, expected }) => {
    expect(wordBreak(s, wordDict)).toStrictEqual(expected);
  });
});
