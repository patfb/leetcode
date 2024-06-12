// Runtime 48 ms Beats 89.43% of users with JavaScript
// 50.98 MB Beats 40.07% of users with JavaScript

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (inputStones) => {
  const smash = (stones) => {
    if (!stones.length) return 0;
    if (stones.length === 1) return stones[0];

    // sort doesn't sort numbers correctly by default
    const sorted = stones.sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    });

    const heaviest = sorted.shift(); // shift pops from front
    const secondHeaviest = sorted.shift();

    if (secondHeaviest === heaviest) {
      return smash(sorted);
    }

    if (secondHeaviest < heaviest) {
      const stoneLeftover = heaviest - secondHeaviest;
      return smash([...sorted, stoneLeftover]);
    }
  };

  // copying the inputStones so we don't mutate our inputs
  const finalResult = smash([...inputStones]);
  return finalResult;
};

export { lastStoneWeight };
