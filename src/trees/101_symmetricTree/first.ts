/* 
https://leetcode.com/problems/symmetric-tree/
Runtime 68ms beats 31.47% of users with TypeScript
Memory 45.30MB beats 28.22% of users with TypeScript
*/

import { TreeNode } from "../TreeNode";

const one = new TreeNode(1);

const lTwo = new TreeNode(2);
const lThree = new TreeNode(3);
const lFour = new TreeNode(4);

const rTwo = new TreeNode(2);
const rFour = new TreeNode(4);
const rThree = new TreeNode(3);

one.left = lTwo;
one.right = rTwo;
lTwo.left = lThree;
lTwo.right = lFour;
rTwo.left = rFour;
rTwo.right = rThree;

const root = one;

const isSymmetric = (root: TreeNode | null): boolean => {
  const leftDfsPrint = (root: TreeNode) => {
    const stack = [root];
    const items = [];

    while (stack.length) {
      const current = stack.pop();
      const currentVal = current?.val !== undefined ? current.val : null;
      items.push(currentVal);

      if (current) {
        stack.push(current.left || null);
        stack.push(current.right || null);
      }
    }

    return items;
  };

  const rightDfsPrint = (root: TreeNode) => {
    const stack = [root];
    const items = [];

    while (stack.length) {
      const current = stack.pop();
      const currentVal = current?.val !== undefined ? current.val : null;
      items.push(currentVal);

      if (current) {
        stack.push(current.right || null);
        stack.push(current.left || null);
      }
    }

    return items;
  };

  const checkEquality = (left: number[], right: number[]) => {
    if (left.length !== right.length) return false;
    return left.every((leftItem, index) => leftItem === right[index]);
  };

  if (!root.left && !root.right) return true;

  const left = leftDfsPrint(root.left);
  const right = rightDfsPrint(root.right);

  const isEqual = checkEquality(left, right);

  return isEqual;
};

console.log("isSymmetric", isSymmetric(root));
