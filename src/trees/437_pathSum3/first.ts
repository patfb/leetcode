/*
https://leetcode.com/problems/path-sum-iii/?envType=study-plan-v2&envId=leetcode-75

*/

import { TreeNode } from "../TreeNode";

const ten = new TreeNode(10);
const five = new TreeNode(5);
const negativeThree = new TreeNode(-3);
const eleven = new TreeNode(11);
const threeA = new TreeNode(3);
const two = new TreeNode(2);
const threeB = new TreeNode(3);
const negativeTwo = new TreeNode(-2);
const one = new TreeNode(1);

ten.left = five;
ten.right = negativeThree;

negativeThree.right = eleven;

five.left = threeA;
five.right = two;

threeA.left = threeB;
threeA.right = negativeTwo;

two.right = one;

const root = ten;

const pathSum = (root: TreeNode | null, targetSum: number): number => {
  interface StackItem {
    node: TreeNode | null;
    sum: number;
    path: number[];
  }

  if (!root) return 0;

  const dfsPaths = (root: TreeNode) => {
    const downwardPaths = [];
    const stack: StackItem[] = [{ node: root, sum: 0, path: [] }];

    while (stack.length) {
      const current = stack.pop();
      const updatedSum = current.sum + current.node.val;

      if (!current.node.left && !current.node.right) {
        downwardPaths.push([...current.path, current.node.val]);
      }

      if (current.node.right) {
        stack.push({
          node: current.node.right,
          sum: updatedSum,
          path: [...current.path, current.node.val],
        });
      }

      if (current.node.left) {
        stack.push({
          node: current.node.left,
          sum: updatedSum,
          path: [...current.path, current.node.val],
        });
      }
    }

    return downwardPaths;
  };

  const adjacentSum = (path: number[], targetSum: number) => {
    let totalPathSums = 0;
    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < path.length && rightPointer < path.length) {
      const subset = path.slice(leftPointer, rightPointer + 1); // need to do +1 because slice end is exclusive
      const sum = subset.reduce((accum, current) => accum + current, 0);

      console.log(
        `left:${leftPointer}, right:${rightPointer}, sum:${sum}, subset:${subset}`,
      );

      if (sum === targetSum) {
        totalPathSums++;
        leftPointer++;
        rightPointer = leftPointer;
        console.log("found one", { totalPathSums, subset, path });
      }

      if (sum < targetSum) {
        rightPointer++;
      }

      if (sum > targetSum) {
        leftPointer++;
        rightPointer = leftPointer;
      }
    }

    return totalPathSums;
  };

  let pathsWithValidSum = 0;

  const paths = dfsPaths(root);

  console.log("all paths are", paths);

  paths.forEach((path) => {
    const nPaths = adjacentSum(path, targetSum);
    pathsWithValidSum += nPaths;
  });

  console.log("pathsWithValidSum", pathsWithValidSum);
};

console.log("pathSum", pathSum(root, 8));
