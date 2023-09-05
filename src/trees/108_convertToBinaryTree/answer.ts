// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
// Runtime 77ms beats 35.18% of users with TypeScript
// Memory 44.83MB beats 87.30% of users with TypeScript

import { TreeNode } from "../TreeNode";

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  const createTree = (leftPointer: number, rightPointer: number) => {
    if (leftPointer > rightPointer) return null;

    const middlePointer = Math.floor((leftPointer + rightPointer) / 2);

    const node = new TreeNode(nums[middlePointer]);
    node.left = createTree(leftPointer, middlePointer - 1);
    node.right = createTree(middlePointer + 1, rightPointer);

    return node;
  };

  return createTree(0, nums.length - 1);
};

console.log(
  "sortedArrayToBST",
  JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9]), null, 2),
);
