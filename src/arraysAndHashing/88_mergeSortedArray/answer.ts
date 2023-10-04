/* 
https://leetcode.com/problems/merge-sorted-array
Runtime 67ms beats 10.35% of users with TypeScript
Memory 44.76MB beats 11.17% of users with TypeScript
*/
const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void => {
  let lastIndex = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[lastIndex] = nums1[m - 1];
      m--;
    } else {
      nums1[lastIndex] = nums2[n - 1];
      n--;
    }
    lastIndex--;
  }

  while (n > 0) {
    nums1[lastIndex] = nums2[n - 1];
    n--;
    lastIndex = lastIndex - 1;
  }

  // console.log("nums1", nums1);
};

console.log("merge", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
