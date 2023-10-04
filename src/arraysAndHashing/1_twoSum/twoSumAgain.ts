/* 
https://leetcode.com/problems/two-sum/
Runtime 65ms beats 61.25% of users with TypeScript
Memory 45.88MB beats 12.01% of users with TypeScript
*/

const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>(); // number and number's index

  for (let index = 0; index < nums.length; index++) {
    const current = nums[index];
    const addend = target - current;

    if (map.has(addend)) {
      const addendIndex = map.get(addend);
      return [addendIndex, index];
    } else {
      map.set(current, index);
    }
  }

  return [];
};

console.log("twoSum", twoSum([2, 7, 11, 15], 9));

export {};
