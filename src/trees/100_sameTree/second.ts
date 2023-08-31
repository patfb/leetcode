// https://leetcode.com/problems/same-tree
// Runtime 43ms beats 98.24%o f users with TypeScript
// Memory 44.12MB beats 78.55% of users with TypeScript

import { TreeNode } from "../TreeNode";

// tree 1
const a = new TreeNode("a");
const b = new TreeNode("b");
a.left = b;

// tree 2
const x = new TreeNode("a");
const y = new TreeNode("b");
x.right = y;

const isSameTree = (a: TreeNode | null, b: TreeNode | null): boolean => {
  const jsonA = JSON.stringify(a);
  const jsonB = JSON.stringify(b);
  return jsonA === jsonB;
};

console.log("isSameTree", isSameTree(a, x));
