/* 
https://leetcode.com/problems/diameter-of-binary-tree/
Runtime 78ms beats 19.42% of users with TypeScript
Memory 46.54MB beats 82.50% of users with TypeScript
*/

import { TreeNode } from "../TreeNode";

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);

one.left = two;
one.right = three;
two.left = four;
two.right = five;

const root = one;

const diameterOfBinaryTree = (root: TreeNode | null): number => {
  let maxDiameter = 0;

  const dfsRecursive = (root: TreeNode | null): number => {
    if (!root) return 0;

    const leftHeight = dfsRecursive(root.left);
    const rightHeight = dfsRecursive(root.right);
    const diameter = leftHeight + rightHeight;

    maxDiameter = Math.max(maxDiameter, diameter);

    // console.log(
    //   `node:${root.val}, leftHeight:${leftHeight}, rightHeight:${rightHeight}, diameter:${diameter}`,
    // );

    return 1 + Math.max(leftHeight, rightHeight);
  };

  dfsRecursive(root);
  return maxDiameter;
};

console.log("diameterOfBinaryTree", diameterOfBinaryTree(root));
