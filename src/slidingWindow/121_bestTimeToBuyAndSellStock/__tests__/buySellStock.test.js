import { describe, expect, it } from "@jest/globals";
import { maxProfit, naiveMaxProfit } from "../buySellStock";

describe("121. Best Time to Buy and Sell Stock", () => {
  describe.skip("naive approach", () => {
    it.each([
      { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
      { prices: [7, 6, 4, 3, 1], expected: 0 },
    ])("$prices -> $expected", ({ prices, expected }) => {
      expect(naiveMaxProfit(prices)).toStrictEqual(expected);
    });
  });

  describe("sliding window approach", () => {
    it.each([
      { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
      { prices: [7, 6, 4, 3, 1], expected: 0 },
    ])("$prices -> $expected", ({ prices, expected }) => {
      expect(maxProfit(prices)).toStrictEqual(expected);
    });
  });
});
