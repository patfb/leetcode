/*
https://leetcode.com/problems/validate-binary-search-tree/
Runtime 63ms beats 71.99% of users with TypeScript
Memory 47.74MB beats 28.01% of users with TypeScript
 */

import { TreeNode } from "../TreeNode";

// first example
// const five = new TreeNode(5);
// const one = new TreeNode(1);
// const four = new TreeNode(4);
// const three = new TreeNode(3);
// const six = new TreeNode(6);

// five.left = one;
// five.right = four;

// four.left = three;
// four.right = six;

// const root = five;

// second example
// const two = new TreeNode(2);
// const one = new TreeNode(1);
// const three = new TreeNode(3);

// two.left = one;
// two.right = three;

// const root = two;

// third example
const five = new TreeNode(5);
const four = new TreeNode(4);
const six = new TreeNode(6);
const three = new TreeNode(3);
const seven = new TreeNode(7);

five.left = four;
five.right = six;
six.left = three;
six.right = seven;
const root = five;

const isValidBST = (root: TreeNode | null): boolean => {
  const recursiveValid = (
    node: TreeNode | null,
    left: number,
    right: number,
  ) => {
    console.log(`node:${node?.val}, left:${left}, right:${right}`);
    if (!node) return true;
    if (!(node.val < right && node.val > left)) return false;
    return (
      recursiveValid(node.left, left, node.val) &&
      recursiveValid(node.right, node.val, right)
    );
  };
  return recursiveValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

console.log("isValidBST", isValidBST(root));
