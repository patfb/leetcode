import { describe, expect, it } from "@jest/globals";
import { topKFrequent } from "../topKFrequentElements";

describe("347. Top K Frequent Elements", () => {
  it.each([
    { nums: [1, 1, 1, 2, 2, 3], k: 2, expected: [1, 2] },
    { nums: [1, 1, 1, 2, 2, 3], k: 1, expected: [1] },
  ])("$nums, $k -> $expected", ({ nums, k, expected }) => {
    expect(topKFrequent(nums, k)).toStrictEqual(expected);
  });
});
