import { describe, expect, it } from "@jest/globals";
import { rotate, rotateRecursiveApproach } from "../rotateArray";

describe("189. Rotate Array", () => {
  describe("recursive approach", () => {
    it.each([
      { nums: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
      { nums: [-1, -100, 3, 99], k: 2, expected: [3, 99, -1, -100] },
    ])("$nums, $k -> $expected", ({ nums, k, expected }) => {
      expect(rotateRecursiveApproach(nums, k)).toStrictEqual(expected);
    });
  });

  describe.only("map approach", () => {
    it.each([
      { nums: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
      // { nums: [-1, -100, 3, 99], k: 2, expected: [3, 99, -1, -100] },
    ])("$nums, $k -> $expected", ({ nums, k, expected }) => {
      expect(rotateRecursiveApproach(nums, k)).toStrictEqual(expected);
    });
  });
});
