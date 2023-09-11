/* 
https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75
Runtime 118ms beats 30.40% of users with TypeScript
Memory 49.30MB beats 67.40% of users with TypeScript
*/

const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const set1 = Array.from(new Set(nums1));
  const set2 = Array.from(new Set(nums2));

  const unique1 = set1.filter((set1Item) => !set2.includes(set1Item));
  const unique2 = set2.filter((set2Item) => !set1.includes(set2Item));

  return [unique1, unique2];
};

console.log("findDifference", findDifference([1, 2, 3], [2, 4, 6]));
