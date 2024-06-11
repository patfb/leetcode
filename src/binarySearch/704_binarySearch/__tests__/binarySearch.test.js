import { describe, expect, it } from "@jest/globals";
import { search } from "../binarySearch";

describe("binarySearch", () => {
  it.each([
    { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
    { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
  ])(
    "nums $nums, target $target -> $expected",
    ({ nums, target, expected }) => {
      expect(search(nums, target)).toStrictEqual(expected);
    },
  );
});
