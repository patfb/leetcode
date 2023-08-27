// https://leetcode.com/problems/container-with-most-water/

// brute force approach

const maxArea = (height: number[]): number => {
  let maxAreaSoFar = 0;

  height.forEach((leftHeight, leftPointer) => {
    let rightPointer = leftPointer + 1;

    while (rightPointer < height.length) {
      const distanceBetweenPointers = rightPointer - leftPointer;

      const rightHeight = height[rightPointer];

      // max water line is going to be the lowest of the two heights
      const maxWaterLine = Math.min(leftHeight, rightHeight);

      const area = maxWaterLine * distanceBetweenPointers;
      maxAreaSoFar = Math.max(maxAreaSoFar, area);

      rightPointer++;
    }
  });

  return maxAreaSoFar;
};

// console.log("maxArea", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log("maxArea", maxArea([1, 1]));
export {};
