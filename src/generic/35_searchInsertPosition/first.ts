/* 
https://leetcode.com/problems/search-insert-position/
Runtime 59ms beats 35.05% of users with TypeScript
Memory 44.71MB beats 9.26% of users with TypeScript
*/

const searchInsert = (nums: number[], target: number): number => {
  const index = nums.findIndex((item) => item >= target);
  if (index > -1) return index;
  // found the item, or the first element that's bigger. Either way this is the index where we either found
  // the item or where we need to insert the item

  // if we didn't find the item or an item larger than it then we need to insert our new item at the end of the list
  return nums.length;
};

// console.log("searchInsert", searchInsert([1, 3, 5, 6], 5));
// console.log("searchInsert", searchInsert([1, 3, 5, 6], 2));
console.log("searchInsert", searchInsert([1, 3, 5, 6], 7));
