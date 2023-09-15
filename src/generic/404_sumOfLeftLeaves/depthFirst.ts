/* 
https://leetcode.com/problems/sum-of-left-leaves/
Runtime 61ms beats 57.32% of users with TypeScript
Memory 44.97MB beats 57.32% of users with TypeScript
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
  const depthFirstLeftLeaves = (root: TreeNode | null): number[] => {
    const leftLeaves = [];
    const stack = [root];

    while (stack.length) {
      const current = stack.pop();

      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
        // check if this left node is also a leaf. leaves don't have child nodes
        if (current.left.left === null && current.left.right === null) {
          leftLeaves.push(current.left.val);
        }
      }
    }

    return leftLeaves;
  };

  const leftLeaves = depthFirstLeftLeaves(root);
  return leftLeaves.reduce((sum, value) => (sum += value), 0);
};

console.log("sumOfLeftLeaves", sumOfLeftLeaves(root));
