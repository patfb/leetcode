/* 
https://leetcode.com/problems/leaf-similar-trees/description/?envType=study-plan-v2&envId=leetcode-75
Runtime 69ms beats 26.27% of users with TypeScript
Memory 45.11MB beats 46.08% of users with TypeScript
*/

import { TreeNode } from "../TreeNode";

const lThree = new TreeNode(3);
const lFive = new TreeNode(5);
const lSix = new TreeNode(6);
const lTwo = new TreeNode(2);
const lSeven = new TreeNode(7);
const lFour = new TreeNode(4);
const lOne = new TreeNode(1);
const lNine = new TreeNode(9);
const lEight = new TreeNode(8);

lThree.left = lFive;
lThree.right = lOne;
lFive.left = lSix;
lFive.right = lTwo;
lTwo.left = lSeven;
lTwo.right = lFour;
lOne.left = lNine;
lOne.right = lEight;

const lHead = lThree;

const rThree = new TreeNode(3);
const rFive = new TreeNode(5);
const rSix = new TreeNode(6);
const rSeven = new TreeNode(7);
const rOne = new TreeNode(1);
const rFour = new TreeNode(4);
const rTwo = new TreeNode(2);
const rNine = new TreeNode(9);
const rEight = new TreeNode(8);

rThree.left = rFive;
rThree.right = rOne;
rFive.left = rSix;
rFive.right = rSeven;
rOne.left = rFour;
rOne.right = rTwo;
rTwo.left = rNine;
rTwo.right = rEight;

const rHead = rThree;

const leafSimilar = (
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean => {
  const dfsLeaves = (root: TreeNode | null) => {
    const leaves = [];
    const stack: TreeNode[] = [root];

    while (stack.length) {
      const current = stack.pop();

      if (!current.left && !current.right) {
        // this is a leaf
        leaves.push(current.val);
      }

      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
      }
    }

    return leaves;
  };

  const root1Leaves = dfsLeaves(root1);
  const root2Leaves = dfsLeaves(root2);

  return (
    root1Leaves.length === root2Leaves.length &&
    root1Leaves.every((value, index) => {
      return value === root2Leaves[index];
    })
  );
};

console.log("leafSimilar", leafSimilar(lHead, rHead));
