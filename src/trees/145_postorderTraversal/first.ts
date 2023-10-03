/* 
https://leetcode.com/problems/binary-tree-postorder-traversal/
Runtime 56ms beats 53.23% of users with TypeScript
Memory 43.30MB beats 88.97% of users with TypeScript
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

const postorderTraversal = (root: TreeNode | null): number[] => {
  const postOrderList = [];

  const postOrder = (root: TreeNode | null) => {
    if (root === null) return;

    postOrder(root.left);
    postOrder(root.right);

    postOrderList.push(root.val);
  };

  postOrder(root);
  return postOrderList;
};

console.log("postorderTraversal", postorderTraversal(head));
