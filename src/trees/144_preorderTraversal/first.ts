/* 
https://leetcode.com/problems/binary-tree-preorder-traversal/
Runtime 48ms beats 88.41% of users with TypeScript
Memory 44.90MB beats 7.01% of users with TypeScript
*/

import { TreeNode } from "../TreeNode";

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);

one.right = two;
two.left = three;

const head = one;

// pre-order traversal: self, left, right
// post-order traversal: left, right, self
// in-order traversal: left, self, right

const preorderTraversal = (root: TreeNode | null): number[] => {
  if (root === null) return [];

  const stack = [root];
  const preorder = [];

  while (stack.length) {
    const current = stack.pop();

    if (current) preorder.push(current.val);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return preorder;
};

console.log("preorderTraversal", preorderTraversal(head));
