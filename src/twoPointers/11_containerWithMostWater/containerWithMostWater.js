// 70 ms Beats 43.13% of users with JavaScript
// 57.10 MB Beats 50.34% of users with JavaScript

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let maxAreaSoFar = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer < rightPointer) {
    const maxWaterLevel = Math.min(height[leftPointer], height[rightPointer]);
    const width = rightPointer - leftPointer;
    const area = maxWaterLevel * width;

    maxAreaSoFar = Math.max(maxAreaSoFar, area);

    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return maxAreaSoFar;
};

export { maxArea };

// do a depth first search later
// do a breadth first search later so I can remember it
