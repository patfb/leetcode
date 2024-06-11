// Runtime 55ms Beats 64.35% of users with JavaScript
// 52.36 MB Beats 30.50% of users with JavaScript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1; // last index is length - 1

  while (start <= end) {
    let middleIndex = Math.floor((start + end) / 2);
    const middleValue = nums[middleIndex];

    if (middleValue === target) {
      return middleIndex; // return the index
    }

    if (target < middleValue) {
      end = middleIndex - 1;
    } else {
      start = middleIndex + 1;
    }
  }

  return -1; // if we didn't find it
};

export { search };
