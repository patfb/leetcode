/* 
https://leetcode.com/problems/minimum-depth-of-binary-tree/
Runtime 187ms beats 39.48% of users with TypeScript
Memory 99.28MB beats 95.32%of users with TypeScript
*/

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

const root = three;

const minDepth = (root: TreeNode | null): number => {
  const dfsDepth = (root: TreeNode) => {
    let minDepth = null;
    const stack = [{ node: root, depth: 1 }];

    while (stack.length) {
      const current = stack.pop();

      if (!current.node.left && !current.node.right) {
        // this is a leaf so record the depth
        if (minDepth === null) {
          minDepth = current.depth;
        } else {
          minDepth = Math.min(minDepth, current.depth);
        }
      }

      if (current.node.right) {
        stack.push({ node: current.node.right, depth: current.depth + 1 });
      }

      if (current.node.left) {
        stack.push({ node: current.node.left, depth: current.depth + 1 });
      }
    }

    return minDepth;
  };

  if (!root) return 0;

  return dfsDepth(root);
};

console.log("minDepth", minDepth(root));
