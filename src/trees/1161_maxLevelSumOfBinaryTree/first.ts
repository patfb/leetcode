/*
https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/?envType=study-plan-v2&envId=leetcode-75
Runtime 313ms beats 5.71% of users with TypeScript
Memory 85.51MB beats 5.71% of users with TypeScript
*/

import { TreeNode } from "../TreeNode";

const one = new TreeNode(1);
const seven = new TreeNode(7);
const zero = new TreeNode(0);
const seven2 = new TreeNode(7);
const negativeEight = new TreeNode(-8);

one.left = seven;
one.right = zero;
seven.left = seven2;
seven.right = negativeEight;

const head = one;

const maxLevelSum = (root: TreeNode | null): number => {
  const dfsLevelOrder = (root: TreeNode | null) => {
    const queue = [{ node: root, level: 1 }];
    const levelMap = new Map<number, number[]>(); // level, values on that level

    while (queue.length) {
      const current = queue.shift();

      if (levelMap.has(current.level)) {
        const valuesOnLevel = levelMap.get(current.level);
        levelMap.set(current.level, [...valuesOnLevel, current.node.val]);
      } else {
        levelMap.set(current.level, [current.node.val]);
      }

      if (current.node.left) {
        queue.push({ node: current.node.left, level: current.level + 1 });
      }

      if (current.node.right) {
        queue.push({ node: current.node.right, level: current.level + 1 });
      }
    }
    return levelMap;
  };

  const levelMap = dfsLevelOrder(root);

  let maxSum = null;
  let maxSumLevel = null;

  // console.log("levelMap", levelMap);

  levelMap.forEach((valuesOnLevel: number[], level: number) => {
    const sum = valuesOnLevel.reduce(
      (accumulator, current) => accumulator + current,
      0,
    );

    // console.log(`sum:${sum}, valuesOnLevel:${valuesOnLevel}, level:${level}`);

    if (maxSum === null) {
      maxSum = sum;
      maxSumLevel = level;
    }

    if (maxSum !== null) {
      if (sum > maxSum) {
        maxSum = sum;
        maxSumLevel = level;
      }
    }
  });

  return maxSumLevel;
};

console.log("maxLevelSum", maxLevelSum(head));
