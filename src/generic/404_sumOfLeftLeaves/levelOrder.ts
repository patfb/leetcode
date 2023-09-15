/* 
https://leetcode.com/problems/sum-of-left-leaves/
Runtime 57ms beats 75.61% of users with TypeScript 
Memory 46.60MB beats 7.32% of users with TypeScript
*/

import { TreeNode } from "../../trees/TreeNode";

const three = new TreeNode(3);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const seven = new TreeNode(7);

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

const root = three;

/* 
Given a tree that looks like this:
   3
  / \
 9   20
    / \
   15  7 

*/

const sumOfLeftLeaves = (root: TreeNode | null): number => {
  const levelOrderTraversalLeftLeaves = (root: TreeNode | null) => {
    const leftLeaves = [];

    if (!root) return [];

    const queue = [{ node: root, level: 0 }];
    const levelMap = new Map<number, number[]>(); // level, left to right values on that level

    while (queue.length) {
      const current = queue.shift();

      if (levelMap.has(current.level)) {
        const levelValues = levelMap.get(current.level);
        levelMap.set(current.level, [...levelValues, current.node.val]);
      } else {
        levelMap.set(current.level, [current.node.val]);
      }

      if (current.node.left) {
        queue.push({ node: current.node.left, level: current.level + 1 });

        if (
          current.node.left.left === null &&
          current.node.left.right === null
        ) {
          leftLeaves.push(current.node.left);
        }
      }

      if (current.node.right) {
        queue.push({ node: current.node.right, level: current.level + 1 });
      }
    }

    return leftLeaves.map((node) => node.val);
  };

  const leftLeaves = levelOrderTraversalLeftLeaves(root);
  return leftLeaves.reduce((sum, value) => (sum += value), 0);
};

console.log("sumOfLeftLeaves", sumOfLeftLeaves(root));
