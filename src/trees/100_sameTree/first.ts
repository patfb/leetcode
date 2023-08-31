// https://leetcode.com/problems/same-tree
// 63ms beats 31.44% of users with TypeScript
// 44.57MB beats 42.02% of users with TypeScript

import { TreeNode } from "../TreeNode";

// tree 1
const a = new TreeNode("a");
const b = new TreeNode("b");
a.left = b;

// tree 2
const x = new TreeNode("a");
const y = new TreeNode("b");
x.right = y;

const treeValues = (node: TreeNode | null) => {
  if (!node) return [];

  const stack = [node];
  const values = [];

  while (stack.length) {
    const current = stack.pop();

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }

    values.push(
      current?.val || null,
      current?.left?.val || null,
      current?.right?.val || null,
    );
  }

  return values;
};

const arraysEqual = <T>(a: Array<T>, b: Array<T>): boolean => {
  if (a.length !== b.length) return false;
  return a.every((item, index) => item === b[index]);
};

const isSameTree = (a: TreeNode | null, b: TreeNode | null): boolean => {
  const arrayA = treeValues(a);
  const arrayB = treeValues(b);
  return arraysEqual<number>(arrayA, arrayB);
};

console.log("isSameTree", isSameTree(a, x));
