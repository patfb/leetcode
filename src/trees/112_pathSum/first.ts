/*
https://leetcode.com/problems/path-sum-iii/?envType=study-plan-v2&envId=leetcode-75
Runtime 64ms beats 62.19% of users with TypeScript
Memory 47.25MB beats 22.04% of users with TypeScript
*/

import { TreeNode } from "../TreeNode";

const five = new TreeNode(5);
const fourA = new TreeNode(4);
const eight = new TreeNode(8);
const eleven = new TreeNode(11);
const seven = new TreeNode(7);
const two = new TreeNode(2);
const thirteen = new TreeNode(13);
const fourB = new TreeNode(4);
const one = new TreeNode(1);

five.left = fourA;
five.right = eight;

fourA.left = eleven;

eleven.left = seven;
eleven.right = two;

eight.left = thirteen;
eight.right = fourB;

fourB.right = one;

const root = five;

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  interface StackItem {
    node: TreeNode | null;
    sum: number;
  }

  if (!root) return false;

  const stack: StackItem[] = [{ node: root, sum: 0 }];

  while (stack.length) {
    const current = stack.pop();
    const runningSum = current.sum + current.node.val;

    if (!current.node.left && !current.node.right && runningSum === targetSum) {
      return true;
    }

    if (current.node.right !== null) {
      stack.push({
        node: current.node.right,
        sum: runningSum,
      });
    }

    if (current.node.left !== null) {
      stack.push({
        node: current.node.left,
        sum: runningSum,
      });
    }
  }

  return false;
};

console.log("pathSum", hasPathSum(root, 22));
