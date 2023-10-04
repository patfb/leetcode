// https://leetcode.com/problems/binary-tree-level-order-traversal
// Runtime 74ms beats 71.10% of users with TypeScript
// Memory 48.38MB beats 13.96% of users with TypeScript

import { TreeNode } from "../TreeNode";

const three = new TreeNode(3);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const seven = new TreeNode(7);

three.left = nine;
three.right = twenty;

twenty.left = fifteen;
twenty.right = seven;

/* Given a tree that looks like this: 

   3
  / \
9   20
   /  \
  15   7

*/

const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const queue = [{ node: root, level: 0 }];
  const levels = new Map<number, number[]>();

  while (queue.length) {
    const current = queue.shift();

    // we're visiting each item from each level left to right so load them into the map in
    // that same order
    if (levels.has(current.level)) {
      const levelArray = levels.get(current.level);
      levels.set(current.level, [...levelArray, current.node.val]);
    } else {
      levels.set(current.level, [current.node.val]);
    }

    if (current.node.left) {
      queue.push({ node: current.node.left, level: current.level + 1 });
    }

    if (current.node.right) {
      queue.push({ node: current.node.right, level: current.level + 1 });
    }
  }

  const arrayRepresentation = Array.from(levels, ([_key, value]) => value);
  return arrayRepresentation;
};

console.log("levelOrder", levelOrder(three));
