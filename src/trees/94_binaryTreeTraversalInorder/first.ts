/* 
https://leetcode.com/problems/binary-tree-inorder-traversal/
Runtime 54ms beats 65.31% of users with TypeScript
Memory 44.30MB beats 48.17% of users with TypeScript
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

const inorderTraversal = (root: TreeNode | null): number[] => {
  const inOrderList = [];

  const inOrder = (root: TreeNode | null) => {
    if (root === null) return;

    inOrder(root.left);
    inOrderList.push(root.val);
    inOrder(root.right);
  };

  inOrder(root);
  return inOrderList;
};

console.log("inorderTraversal", inorderTraversal(head));
