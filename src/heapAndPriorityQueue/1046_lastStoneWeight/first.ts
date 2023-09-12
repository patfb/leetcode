/* 
https://leetcode.com/problems/last-stone-weight/description/
Runtime 49ms beats 95.85% of users with TypeScript
Memory 44.13MB beats 74.61% of users with TypeScript
*/

const lastStoneWeight = (stones: number[]): number => {
  const _smash = (heavier: number, lighter: number): number[] => {
    if (heavier === lighter) return []; // both are destroyed
    return [heavier - lighter]; // heavier destroys lighter and lighter. lighter value subtracted from heavier
  };

  const _sortInt = (a: number, b: number) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  const _destroy = (input: number[]) => {
    if (input.length === 1) return input[0]; // base case: 1 stone left
    if (input.length === 0) return []; // base case: no stones left

    const sorted = [...input].sort(_sortInt);
    const heaviest = sorted.pop();
    const secondHeaviest = sorted.pop();
    const smashResult = _smash(heaviest, secondHeaviest);

    return _destroy([...sorted, ...smashResult]); // recursively call destroy() again with result to keep smashing rocks down to the base case
  };

  return _destroy(stones);
};

console.log("lastStoneWeight", lastStoneWeight([2, 7, 4, 1, 8, 1]));
