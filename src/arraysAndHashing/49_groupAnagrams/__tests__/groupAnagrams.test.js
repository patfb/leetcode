import { describe, expect, it } from "@jest/globals";
import { groupAnagrams } from "../groupAnagrams";

describe("groupAnagrams", () => {
  it.each([
    {
      strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
    },
    {
      strs: [""],
      expected: [[""]],
    },
    {
      strs: ["a"],
      expected: [["a"]],
    },
  ])(`$strs -> $expected`, ({ strs, expected }) => {
    expect(groupAnagrams(strs)).toStrictEqual(expected);
  });
});
