/*
https://leetcode.com/problems/path-sum-iii/?envType=study-plan-v2&envId=leetcode-75

*/

import { TreeNode } from "../TreeNode";

/* const ten = new TreeNode(10);
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

const root = ten; */

/* const negativeTwo = new TreeNode(-2);
const negativeThree = new TreeNode(-3);

negativeTwo.right = negativeThree;

const root = negativeTwo; */

const one = new TreeNode(1);
const two = new TreeNode(2);

one.left = two;

const root = one;

const pathSum = (root: TreeNode | null, targetSum: number): number => {
  interface PathItem {
    val: number;
    id: number;
  }

  interface StackItem {
    node: TreeNode | null;
    sum: number;
    path: PathItem[];
  }

  if (!root) return 0;

  let id = 0;
  const dfsPaths = (root: TreeNode) => {
    const downwardPaths: PathItem[][] = [];
    const stack: StackItem[] = [{ node: root, sum: 0, path: [] }];

    while (stack.length) {
      id++;
      const current = stack.pop();
      const updatedSum = current.sum + current.node.val;

      if (!current.node.left && !current.node.right) {
        downwardPaths.push([...current.path, { val: current.node.val, id }]);
      }

      if (current.node.right) {
        stack.push({
          node: current.node.right,
          sum: updatedSum,
          path: [...current.path, { val: current.node.val, id }],
        });
      }

      if (current.node.left) {
        stack.push({
          node: current.node.left,
          sum: updatedSum,
          path: [...current.path, { val: current.node.val, id }],
        });
      }
    }

    return downwardPaths;
  };

  const adjacentSum = (path: PathItem[], targetSum: number) => {
    const validPaths = [];
    let leftPointer = 0;
    let rightPointer = 0;
    let runningSum = 0;

    const prefixSum = (subset: PathItem[]) => {
      const subsetId = subset.map(({ id }) => id).join("_");
    };

    const subset = path.slice(leftPointer, rightPointer + 1);
    const subsetId = subset.map(({ id }) => id).join("_");
    const sum = subset.reduce((accum, current) => accum + current.val, 0);

    for (let index = 0; index < path.length; index++) {}

    return validPaths;
  };

  const paths = dfsPaths(root);
  console.log("paths", paths);
  const validPaths = paths.flatMap((path) => adjacentSum(path, targetSum));
  console.log("validPaths", validPaths);
  const uniquePaths = new Set(validPaths);
  return uniquePaths.size;
};

console.log("pathSum", pathSum(root, 0));

// const exampleSet = new Set<string>();
// exampleSet.add("2_3");
// exampleSet.add("2_3");
// console.log("size", exampleSet.size);
// console.log(exampleSet);
