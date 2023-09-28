/* 
https://leetcode.com/problems/diameter-of-binary-tree/
Runtime 91ms beats 9.31% of users with TypeScript
Memory 50.92MB beats 5.14% of users with TypeScript
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
  const dfsMaxHeight = (root: TreeNode | null): number => {
    if (!root) return 0;

    let maxHeight = 1;
    const stack = [{ node: root, height: 1 }];

    while (stack.length) {
      const current = stack.pop();

      if (current.node.right) {
        stack.push({ node: current.node.right, height: current.height + 1 });
      }

      if (current.node.left) {
        stack.push({ node: current.node.left, height: current.height + 1 });
      }

      if (!current.node.left && !current.node.right) {
        // this is a leaf node so we've gotten to the bottom. Record max height
        maxHeight = Math.max(maxHeight, current.height);
      }
    }

    return maxHeight;
  };

  const dfsAllNodes = (root: TreeNode | null): TreeNode[] => {
    const stack = [root];
    const nodes = [];

    while (stack.length) {
      const current = stack.pop();
      nodes.push(current);

      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
      }
    }

    return nodes;
  };

  const allNodes = dfsAllNodes(root);

  const maxDiameter = allNodes.reduce((maxDiameter, node) => {
    const leftHeight = dfsMaxHeight(node.left);
    const rightHeight = dfsMaxHeight(node.right);
    const diameter = leftHeight + rightHeight;
    // console.log(
    //   `node ${node.val}, leftHeight:${leftHeight}, rightHeight:${rightHeight}, diameter:${diameter}`,
    // );

    return Math.max(maxDiameter, diameter);
  }, 0);

  return maxDiameter;
};

console.log("diameterOfBinaryTree", diameterOfBinaryTree(root));
