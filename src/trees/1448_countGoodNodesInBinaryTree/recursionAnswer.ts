// https://leetcode.com/problems/count-good-nodes-in-binary-tree
// Runtime 104ms beats 89.06% of users with TypeScript
// Memory 77.12MB beats 94.14% of users with TypeScript

import { TreeNode } from "../TreeNode";

const three = new TreeNode(3);
const one = new TreeNode(1);
const four = new TreeNode(4);
const threeLower = new TreeNode(3);
const oneLower = new TreeNode(1);
const five = new TreeNode(5);

three.left = one;
three.right = four;
one.left = threeLower;
four.left = oneLower;
four.right = five;

/* 
pre-order traversal: self, left, right
post-order traversal: left, right, self
in-order traversal: left, self, right

*/

const goodNodes = (root: TreeNode | null): number => {
  let count = 0;

  const depthFirst = (node: TreeNode | null, max: number) => {
    if (!node) return;

    if (node.val >= max) count++;

    const maxValue = Math.max(max, node.val);

    depthFirst(node.left, maxValue);
    depthFirst(node.right, maxValue);
  };

  depthFirst(root, root.val);
  return count;
};

console.log("goodNodes", goodNodes(three));
