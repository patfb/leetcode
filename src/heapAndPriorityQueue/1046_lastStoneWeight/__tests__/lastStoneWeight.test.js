import { describe, expect, it } from "@jest/globals";
import { lastStoneWeight } from "../lastStoneWeight";

describe("1046. Last Stone Weight", () => {
  it.each([
    { stones: [2, 7, 4, 1, 8, 1], expected: 1 },
    { stones: [2, 2], expected: 0 },
    { stones: [8, 10, 4], expected: 2 },
  ])("$stones -> $expected", ({ stones, expected }) => {
    expect(lastStoneWeight(stones)).toStrictEqual(expected);
  });
});
